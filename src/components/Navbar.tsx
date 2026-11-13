"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/Container";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Locale } from "@/lib/i18n/messages";

export function Navbar() {
  const { t, locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const hasResume = /^(https?:\/\/|\/)/.test(site.resume);
  const resumeHref = hasResume ? site.resume : site.resumeRequestMailto;

  const nav = [
    { label: t.nav.work, href: "/projects" },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.experience, href: "/#experience" },
    { label: t.nav.contact, href: "/#contact" },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function LanguageToggle() {
    return (
      <div className="label inline-flex items-center gap-1" role="group" aria-label="Language">
        {(["fr", "en"] as Locale[]).map((code, i) => (
          <span key={code} className="inline-flex items-center gap-1">
            {i > 0 ? <span className="text-ink/25">/</span> : null}
            <button
              type="button"
              onClick={() => setLocale(code)}
              aria-pressed={locale === code}
              className={`px-1 py-2 transition-colors ${
                locale === code ? "text-accent" : "text-muted hover:text-ink"
              }`}
            >
              {code}
            </button>
          </span>
        ))}
      </div>
    );
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled || open
          ? "border-line bg-surface/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-[68px] items-center justify-between gap-6">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold tracking-tight text-ink">
              {site.name}
            </span>
            <span className="text-[11px] text-muted">{t.nav.role}</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-ink/75 transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <LanguageToggle />
            <a
              href={resumeHref}
              target={hasResume ? "_blank" : undefined}
              rel={hasResume ? "noopener noreferrer" : undefined}
              className="text-sm text-ink/75 transition-colors hover:text-accent"
            >
              {hasResume ? t.nav.resume : t.nav.requestResume}
            </a>
            <Button
              href={site.bookCall}
              external={site.bookCall.startsWith("http")}
              variant="primary"
              className="!py-2.5"
            >
              {t.nav.bookCall}
            </Button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <LanguageToggle />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <Container>
              <nav className="flex flex-col border-t border-line pb-6">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="border-b border-line py-4 font-display text-2xl font-semibold text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-6 flex flex-col gap-3">
                  <Button href={site.bookCall} variant="primary" onClick={() => setOpen(false)}>
                    {t.nav.bookCall}
                  </Button>
                  <Button href={resumeHref} external={hasResume} variant="secondary">
                    {hasResume ? t.hero.downloadResume : t.hero.requestResume}
                  </Button>
                </div>
              </nav>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
