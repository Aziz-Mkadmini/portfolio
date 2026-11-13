"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/lib/i18n/LocaleProvider";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const { t } = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      project: (form.elements.namedItem("project") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const out = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !out.ok) throw new Error(out.error || "Request failed");
      setStatus("success");
      setMessage(t.form.success);
      form.reset();
    } catch {
      setStatus("error");
      setMessage(t.form.error);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-7 rounded-2xl border border-line bg-surface-raised p-6 sm:p-10"
    >
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="label text-muted">
          {t.form.name}
          <input
            name="name"
            required
            className="mt-2 w-full rounded-none border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-ink outline-none transition-colors focus:border-accent"
            autoComplete="name"
          />
        </label>
        <label className="label text-muted">
          {t.form.email}
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-none border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-ink outline-none transition-colors focus:border-accent"
            autoComplete="email"
          />
        </label>
      </div>
      <label className="label text-muted">
        {t.form.company}
        <input
          name="company"
          className="mt-2 w-full rounded-none border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-ink outline-none transition-colors focus:border-accent"
          autoComplete="organization"
        />
      </label>
      <label className="label text-muted">
        {t.form.project}
        <textarea
          name="project"
          required
          rows={4}
          className="mt-2 w-full resize-y rounded-none border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-ink outline-none transition-colors focus:border-accent"
        />
      </label>
      {message ? (
        <p className="text-sm text-ink/85">
          {message}{" "}
          {status === "error" ? (
            <>
              <a href={`mailto:${site.email}`} className="underline underline-offset-2 hover:text-accent">
                {site.email}
              </a>
            </>
          ) : null}
        </p>
      ) : null}
      <div className="flex flex-col gap-2 min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between">
        <Button type="submit" variant="primary" className="w-full min-[400px]:w-auto">
          <Send className="h-4 w-4" />
          {status === "loading" ? t.form.sending : t.form.send}
        </Button>
      </div>
    </form>
  );
}
