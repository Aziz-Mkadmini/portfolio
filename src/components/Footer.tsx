"use client";

import { site } from "@/lib/site";
import { Container } from "@/components/Container";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Footer() {
  const { t } = useLocale();
  const hasResume = /^(https?:\/\/|\/)/.test(site.resume);
  const resumeHref = hasResume ? site.resume : site.resumeRequestMailto;
  const resumeLabel = hasResume ? t.footer.downloadResume : t.footer.requestResume;
  const hasWhatsapp = site.whatsapp.startsWith("http");
  const bookingExternal = site.bookCall.startsWith("http");

  const cols: Array<{
    title: string;
    links: Array<{ label: string; href: string; external?: boolean }>;
  }> = [
    {
      title: t.footer.navigate,
      links: [
        { label: t.footer.featuredWork, href: "/projects" },
        { label: t.nav.services, href: "/#services" },
        { label: t.nav.experience, href: "/#experience" },
        { label: t.nav.contact, href: "/#contact" },
      ],
    },
    {
      title: t.footer.engagement,
      links: [
        { label: t.footer.bookCall, href: site.bookCall, external: bookingExternal },
        { label: resumeLabel, href: resumeHref, external: hasResume },
        { label: "Email", href: `mailto:${site.email}` },
        ...(hasWhatsapp ? [{ label: "WhatsApp", href: site.whatsapp, external: true }] : []),
        { label: "LinkedIn", href: site.linkedin, external: true },
        { label: "GitHub", href: site.github, external: true },
      ],
    },
  ];

  return (
    <footer className="border-t border-line">
      <Container>
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <p className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              {site.name}
            </p>
            <p className="label mt-3 text-accent">{t.footer.role}</p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">{t.footer.body}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-5 lg:col-start-8">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="label text-muted">{c.title}</p>
                <ul className="mt-4 space-y-3 text-sm text-ink/85">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        className="transition-colors hover:text-accent"
                        href={l.href}
                        target={l.external ? "_blank" : undefined}
                        rel={l.external ? "noopener noreferrer" : undefined}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="border-t border-line py-6 text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. {t.footer.rights}
        </p>
      </Container>
    </footer>
  );
}
