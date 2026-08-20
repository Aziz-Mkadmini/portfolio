"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
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

  function LanguageToggle({ compact = false }: { compact?: boolean }) {
    return (
      <div
        className={`inline-flex items-center rounded-xl border border-white/10 bg-white/5 p-0.5 ${
          compact ? "w-full justify-center" : ""
        }`}
        role="group"
        aria-label="Language"
      >
        {(["fr", "en"] as Locale[]).map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={`rounded-lg px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition ${
              locale === code
                ? "bg-sky-500/20 text-sky-100"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {code}
          </button>
        ))}
      </div>
    );
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "pt-2" : "pt-0"
      }`}
    >
      <Container>
        <div
          className={`glass-panel flex h-[72px] items-center justify-between gap-4 rounded-2xl px-3 py-2 ${
            scrolled ? "glow-border bg-zinc-950/75" : "bg-zinc-950/50"
          }`}
        >
          <Link href="/" className="group flex flex-col items-start leading-tight">
            <span className="neon-text text-sm font-semibold tracking-tight text-white/95">
              Mohamed Aziz Mkadmini
            </span>
            <span className="text-xs text-zinc-400">{t.nav.role}</span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-1 md:flex">
            {nav.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl px-3 py-1.5 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <LanguageToggle />
            <Button
              href={hasResume ? site.resume : site.resumeRequestMailto}
              external={hasResume}
              variant="secondary"
              className="!px-3"
            >
              <Download className="h-4 w-4" />
              {hasResume ? t.nav.resume : t.nav.requestResume}
            </Button>
            <Button href={site.github} external variant="ghost" className="!px-3">
              GitHub
            </Button>
            <Button href={site.bookCall} variant="primary" className="!px-4">
              {t.nav.bookCall}
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-200 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 md:hidden"
          >
            <div className="glass-panel mx-auto flex max-w-6xl flex-col gap-1 rounded-2xl p-3">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-zinc-200 hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2">
                <LanguageToggle compact />
                <Button
                  href={hasResume ? site.resume : site.resumeRequestMailto}
                  external={hasResume}
                  variant="secondary"
                >
                  <Download className="h-4 w-4" />
                  {hasResume ? t.hero.downloadResume : t.hero.requestResume}
                </Button>
                <Button href={site.github} external variant="secondary">
                  GitHub
                </Button>
                <Button href={site.bookCall} variant="primary">
                  {t.nav.bookCall}
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
