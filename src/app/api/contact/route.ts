import { z } from "zod";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const ipRequestLog = new Map<string, number[]>();

const bodySchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(254),
  company: z.string().max(200).optional().or(z.literal("")),
  project: z.string().min(10).max(8000),
});

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (ipRequestLog.get(ip) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );
  recent.push(now);
  ipRequestLog.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX_REQUESTS;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(req: Request) {
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please retry later." },
      {
        status: 429,
        headers: { "cache-control": "no-store", "retry-after": "600" },
      },
    );
  }

  const json = await req.json().catch(() => null);
  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid payload" },
      { status: 400, headers: { "cache-control": "no-store" } },
    );
  }
  const { name, email, company, project } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "Email provider not configured" },
      { status: 500, headers: { "cache-control": "no-store" } },
    );
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL?.trim() || "mkadmiaziz0203@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL?.trim() || "Portfolio Contact <onboarding@resend.dev>";
  const subject = `New portfolio inquiry from ${escapeHtml(name)}`;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = company ? escapeHtml(company) : "N/A";
  const safeProject = escapeHtml(project).replace(/\n/g, "<br />");
  const html = `
    <h2>New contact inquiry</h2>
    <p><strong>Name:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Company:</strong> ${safeCompany}</p>
    <p><strong>Project:</strong></p>
    <p>${safeProject}</p>
  `;

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      html,
    });
  } catch (error) {
    console.error("[contact] resend failed", error);
    return NextResponse.json(
      { ok: false, error: "Failed to deliver message" },
      { status: 502, headers: { "cache-control": "no-store" } },
    );
  }

  return NextResponse.json(
    { ok: true },
    { status: 200, headers: { "cache-control": "no-store" } },
  );
}
