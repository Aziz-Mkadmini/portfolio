"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Calendar, Download, FolderKanban, Github, Linkedin, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Hero() {
  const r = useReducedMotion();
  const { t } = useLocale();
  const hasResume = /^(https?:\/\/|\/)/.test(site.resume);

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-34 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-glow-radial opacity-70" />
      <div
        className="pointer-events-none absolute inset-0 bg-[size:64px_64px] bg-grid-fade opacity-[0.24]"
        style={{ maskImage: "radial-gradient(70% 60% at 50% 0%, black, transparent)" }}
        aria-hidden
      />
      <motion.div
        animate={r ? undefined : { y: [0, -12, 0], opacity: [0.3, 0.45, 0.3] }}
        transition={r ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="ambient-orb pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
      />
      <motion.div
        animate={r ? undefined : { y: [0, 14, 0], opacity: [0.28, 0.42, 0.28] }}
        transition={r ? undefined : { duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
        className="ambient-orb-delayed pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-accent/28 blur-3xl"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="max-w-2xl lg:col-span-7">
            <motion.p
              initial={r ? false : { opacity: 0, y: 8 }}
              animate={r ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="neon-text text-xs font-semibold uppercase tracking-[0.2em] text-accent/95"
            >
              {t.hero.kicker}
            </motion.p>
            <motion.h1
              initial={r ? false : { opacity: 0, y: 10 }}
              animate={r ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 font-display text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl text-balance"
            >
              {t.hero.titleBefore}{" "}
              <span className="bg-gradient-to-r from-accent via-accent to-accent bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>{" "}
              {t.hero.titleAfter}
            </motion.h1>
            <motion.p
              initial={r ? false : { opacity: 0, y: 10 }}
              animate={r ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg"
            >
              {t.hero.body}
            </motion.p>

            <motion.div
              initial={r ? false : { opacity: 0, y: 10 }}
              animate={r ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Button href="#projects" variant="primary" className="w-full min-[420px]:w-auto">
                <FolderKanban className="h-4 w-4" />
                {t.hero.viewPortfolio}
              </Button>
              <Button
                href={hasResume ? site.resume : site.resumeRequestMailto}
                variant="secondary"
                className="w-full min-[420px]:w-auto"
                external={hasResume}
              >
                <Download className="h-4 w-4" />
                {hasResume ? t.hero.downloadResume : t.hero.requestResume}
              </Button>
              <Button
                href={site.bookCall}
                variant="ghost"
                className="w-full min-[420px]:w-auto"
                external={site.bookCall.startsWith("http")}
              >
                <Calendar className="h-4 w-4" />
                {t.hero.bookCall}
                <ArrowUpRight className="h-4 w-4 opacity-80" />
              </Button>
            </motion.div>

            <motion.div
              initial={r ? false : { opacity: 0, y: 10 }}
              animate={r ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Button href={site.linkedin} external variant="ghost" className="w-full min-[420px]:w-auto">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
              <Button href={site.github} external variant="ghost" className="w-full min-[420px]:w-auto">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
              <Button href={site.whatsapp} external variant="ghost" className="w-full min-[420px]:w-auto">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={r ? false : { opacity: 0, y: 16 }}
              animate={r ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="pointer-events-none absolute inset-x-10 top-12 h-52 rounded-full bg-accent/20 blur-3xl" />
              <div className="pointer-events-none absolute inset-x-16 bottom-20 h-44 rounded-full bg-accent/20 blur-3xl" />
              <motion.div
                whileHover={r ? undefined : { y: -6 }}
                className="relative mx-auto w-full max-w-md"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
                  <Image
                    src="/imageprofil.png"
                    alt={site.name}
                    fill
                    priority
                    sizes="(min-width: 1024px) 420px, 86vw"
                    className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(56,189,248,0.2)]"
                  />
                </div>
              </motion.div>
              <motion.div
                whileHover={r ? undefined : { y: -3, scale: 1.01 }}
                className="glass-panel glow-border -mt-10 rounded-2xl p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs text-zinc-500">{t.hero.sideKicker}</p>
                    <p className="mt-1 font-medium text-zinc-100">{t.hero.sideTitle}</p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-zinc-300">
                    {t.hero.sideChip}
                  </div>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-zinc-300">
                  {t.hero.sideBullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent/60" />
                      <span className="leading-relaxed text-zinc-200/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
