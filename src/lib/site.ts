/**
 * Central site & contact configuration — update for production deployment.
 */
export const site = {
  name: "Mohamed Aziz Mkadmini",
  /** Used in the <title>, Open Graph and JSON-LD. French first: the main audience is francophone. */
  title: "Développeur Full-Stack & Automatisation n8n / IA freelance",
  titleEn: "Freelance Full-Stack & AI Automation Developer",
  tagline:
    "J’automatise les tâches répétitives de votre entreprise (agents IA, workflows n8n) et je développe vos sites et SaaS, de l’idée à la mise en ligne.",
  taglineEn:
    "I automate your business with AI agents and n8n workflows, and build your websites and SaaS from idea to launch.",
  url: (() => {
    const u = process.env.NEXT_PUBLIC_SITE_URL?.trim();
    if (u) {
      try {
        return new URL(u).toString();
      } catch {
        /* fall through */
      }
    }
    return "http://localhost:3000";
  })(),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "mkadmiaziz0203@gmail.com",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/mohamed-aziz-mkadmini-84b274221",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/Aziz-Mkadmini",
  /** Include country code, e.g. +216XXXXXXXX */
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/21627346662",
  /** Optional Calendly, Cal.com, or TidyCal */
  bookCall: process.env.NEXT_PUBLIC_BOOK_CALL_URL ?? "#contact",
  /** Public resume or CV URL */
  resume: process.env.NEXT_PUBLIC_RESUME_URL ?? "/cv-mohamed-aziz-mkadmini.pdf",
  /** Fallback used when resume URL is not set */
  resumeRequestMailto:
    "mailto:mkadmiaziz0203@gmail.com?subject=Resume%20request&body=Hi%20Mohamed%2C%20I%20would%20like%20to%20receive%20your%20latest%20resume.",
} as const;

/** WhatsApp link with a pre-filled message (falls back to the bare link for non wa.me URLs). */
export function whatsappLink(text?: string) {
  if (!text || !site.whatsapp.includes("wa.me")) return site.whatsapp;
  const sep = site.whatsapp.includes("?") ? "&" : "?";
  return `${site.whatsapp}${sep}text=${encodeURIComponent(text)}`;
}

export const services = [
  {
    title: "AI SaaS Development",
    description:
      "End-to-end product work: from LLM features and RAG pipelines to billing, auth, and production-grade UX — shipped as a market-ready SaaS.",
    highlights: [
      "Product architecture & feature scoping",
      "Secure, observable APIs",
      "Scalable data & session model",
    ],
  },
  {
    title: "Full-Stack Development",
    description:
      "Reliable, maintainable web platforms with Next.js, TypeScript, and modern infrastructure — designed to scale with your customer base.",
    highlights: [
      "Performance & SEO as first-class concerns",
      "Clean, reviewable codebases",
      "CI-friendly delivery",
    ],
  },
  {
    title: "Automation Systems",
    description:
      "Connect tools, data, and people with workflows that reduce manual work, eliminate errors, and unlock measurable time savings.",
    highlights: [
      "Process mapping & handoffs",
      "Event-driven & scheduled jobs",
      "Monitoring & fallbacks",
    ],
  },
  {
    title: "API Integration",
    description:
      "Resilient integrations with payments, CRMs, analytics, and custom backends — with clear contracts, retries, and audit-friendly logs.",
    highlights: [
      "Webhooks & idempotency",
      "Rate limits & error budgets",
      "Docs your team can trust",
    ],
  },
  {
    title: "Dashboard Development",
    description:
      "Operator-grade consoles: clear KPIs, role-aware access, and fast iteration on the workflows your team actually uses every day.",
    highlights: [
      "Role & permission modeling",
      "Data viz that drives decisions",
      "Accessible, responsive UI",
    ],
  },
  {
    title: "Data Science Solutions",
    description:
      "From exploratory analysis to model-assisted features — helping you turn data into defensible product decisions, not just charts.",
    highlights: [
      "Problem framing with stakeholders",
      "Reproducible pipelines",
      "Model evaluation in context",
    ],
  },
  {
    title: "Business Process Automation",
    description:
      "Map repetitive work, automate the boring parts, and leave humans in the loop where judgment matters — for lasting operational leverage.",
    highlights: [
      "ROI-focused prioritization",
      "Change management friendly rollouts",
      "Measurable SLAs",
    ],
  },
] as const;
