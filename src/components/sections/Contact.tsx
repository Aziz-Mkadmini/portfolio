"use client";

import { ArrowUpRight, Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/Button";
import { FadeIn, RevealWords } from "@/components/Motion";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Contact() {
  const { t } = useLocale();
  const hasResume = /^(https?:\/\/|\/)/.test(site.resume);
  const resumeHref = hasResume ? site.resume : site.resumeRequestMailto;
  const hasWhatsapp = site.whatsapp.startsWith("http");
  const hasBooking = site.bookCall.startsWith("http");

  const links = [
    ...(hasWhatsapp
      ? [
          {
            label: t.contact.whatsapp,
            href: site.whatsapp,
            icon: MessageCircle,
            hint: t.contact.whatsappHint,
          },
        ]
      : []),
    {
      label: "Email",
      href: `mailto:${site.email}?subject=Portfolio%20inquiry&body=Hi%20Mohamed%2C%20I%20want%20to%20discuss%20a%20project.`,
      icon: Mail,
      hint: site.email,
    },
    { label: "LinkedIn", href: site.linkedin, icon: Linkedin, hint: t.contact.linkedinHint },
    { label: "GitHub", href: site.github, icon: Github, hint: t.contact.githubHint },
    {
      label: hasResume ? t.nav.resume : t.nav.requestResume,
      href: resumeHref,
      icon: Download,
      hint: hasResume ? t.contact.resumeHint : t.contact.requestResumeHint,
    },
  ];

  return (
    <section id="contact" className="border-t border-line py-24 sm:py-36">
      <Container>
        {/* Final call to action */}
        <p className="label flex items-center gap-3 text-accent">
          <span className="text-muted">05</span>
          <span className="h-px w-8 bg-accent/60" aria-hidden />
          {t.contact.kicker}
        </p>
        <RevealWords
          as="h2"
          text={t.cta.title}
          className="mt-6 max-w-5xl font-display text-[2.5rem] font-semibold leading-[1] tracking-tight text-ink sm:text-7xl lg:text-[5.5rem]"
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-6">
            <p className="text-base leading-relaxed text-muted sm:text-lg">{t.cta.body}</p>
            <p className="label mt-5 flex flex-wrap gap-x-6 gap-y-2 text-ink/70">
              <span>{t.cta.chipFast}</span>
              <span>{t.cta.chipSolid}</span>
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:justify-end">
            {hasWhatsapp ? (
              <Button
                href={whatsappLink(t.studio.whatsappPrefill)}
                external
                variant="primary"
                className="w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                {t.studio.whatsappCta}
              </Button>
            ) : null}
            {hasBooking ? (
              <Button href={site.bookCall} external variant="secondary" className="w-full sm:w-auto">
                {t.cta.bookCall}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            ) : null}
          </div>
        </div>

        {/* Contact */}
        <div className="mt-20 grid gap-12 border-t border-line pt-12 sm:mt-28 sm:pt-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl text-balance">
              {t.contact.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted">{t.contact.description}</p>

            <p className="label mt-10 text-muted">{t.studio.contactOr}</p>
            <ul className="mt-4 border-b border-line">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between gap-4 border-t border-line py-4 transition-colors hover:text-accent"
                  >
                    <span className="flex min-w-0 items-center gap-4">
                      <l.icon className="h-4 w-4 flex-none text-accent" />
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold">{l.label}</span>
                        <span className="block truncate text-xs text-muted">{l.hint}</span>
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 flex-none text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-muted">{t.cta.asyncNote}</p>
          </div>
          <FadeIn className="lg:col-span-7" y={18}>
            <ContactForm />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
