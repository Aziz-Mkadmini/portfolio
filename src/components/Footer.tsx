import { site } from "@/lib/site";
import { Container } from "@/components/Container";
import { Linkedin, Mail, MessageCircle, Github, Download } from "lucide-react";

const cols = [
  {
    title: "Navigate",
    links: [
      { label: "Featured work", href: "/projects" },
      { label: "Services", href: "/#services" },
      { label: "Experience", href: "/#experience" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Engagement",
    links: [
      { label: "View portfolio", href: "/projects" },
      { label: "Book a call", href: site.bookCall },
      { label: "Download resume", href: site.resume },
    ],
  },
] as const;

export function Footer() {
  const hasResume = /^(https?:\/\/|\/)/.test(site.resume);
  const resumeHref = hasResume ? site.resume : site.resumeRequestMailto;
  const resumeLabel = hasResume ? "Download resume" : "Request resume";
  const hasWhatsapp = site.whatsapp.startsWith("http");
  return (
    <footer className="border-t border-white/10 bg-zinc-950/80 backdrop-blur-sm">
      <Container>
        <div className="py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
                Mohamed Aziz Mkadmini
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white text-balance">
                Software Engineer & AI Product Builder
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
                I design and build scalable products, AI-enabled features, and business systems
                with a focus on reliability and maintainability.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-zinc-200 transition hover:border-white/15 hover:bg-white/10"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-zinc-200 transition hover:border-white/15 hover:bg-white/10"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-zinc-200 transition hover:border-white/15 hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
                <a
                  href={resumeHref}
                  target={hasResume ? "_blank" : undefined}
                  rel={hasResume ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-zinc-200 transition hover:border-white/15 hover:bg-white/10"
                >
                  <Download className="h-4 w-4" /> {resumeLabel}
                </a>
                {hasWhatsapp ? (
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-zinc-200 transition hover:border-white/15 hover:bg-white/10"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                ) : null}
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-4 lg:col-start-8">
              {cols.map((c) => (
                <div key={c.title}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    {c.title}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                    {c.links.map((l) => (
                      <li key={l.label}>
                        {l.href === site.resume ? (
                          <a
                            className="inline-flex transition hover:text-white"
                            href={resumeHref}
                          >
                            {resumeLabel}
                          </a>
                        ) : l.href.startsWith("#") || l.href.startsWith("/#") || l.href === "/projects" ? (
                          <a
                            className="inline-flex transition hover:text-white"
                            href={l.href}
                          >
                            {l.label}
                          </a>
                        ) : (
                          <a
                            className="inline-flex transition hover:text-white"
                            href={l.href}
                            target={l.href === site.bookCall && site.bookCall.startsWith("http") ? "_blank" : undefined}
                            rel={l.href === site.bookCall && site.bookCall.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {l.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <p className="text-xs text-zinc-500">
              Built for clarity, speed, and long-term maintainability.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
