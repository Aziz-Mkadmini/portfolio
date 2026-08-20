"use client";

import { site } from "@/lib/site";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/Motion";
import { Calendar, Download, FolderKanban, Github, Linkedin, Shield, Zap } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function FinalCTA() {
  const { t } = useLocale();
  const hasResume = /^(https?:\/\/|\/)/.test(site.resume);
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <FadeIn>
          <div className="glass-panel glow-border relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900/60 via-zinc-950/40 to-zinc-950/80 p-8 sm:p-10">
            <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl text-balance">
                  {t.cta.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {t.cta.body}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs text-zinc-500">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-zinc-300">
                    <Zap className="h-3.5 w-3.5 text-amber-300/70" />
                    {t.cta.chipFast}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-zinc-300">
                    <Shield className="h-3.5 w-3.5 text-sky-300/80" />
                    {t.cta.chipSolid}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 lg:col-span-5 lg:items-end">
                <Button href="/projects" variant="primary" className="w-full lg:w-full">
                  <FolderKanban className="h-4 w-4" />
                  {t.cta.viewPortfolio}
                </Button>
                <Button
                  href={hasResume ? site.resume : site.resumeRequestMailto}
                  variant="secondary"
                  className="w-full lg:w-full"
                  external={hasResume}
                >
                  <Download className="h-4 w-4" />
                  {hasResume ? t.cta.downloadResume : t.cta.requestResume}
                </Button>
                <Button
                  href={site.bookCall}
                  variant="ghost"
                  className="w-full lg:w-full"
                  external={site.bookCall.startsWith("http")}
                >
                  <Calendar className="h-4 w-4" />
                  {t.cta.bookCall}
                </Button>
                <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3">
                  <Button href={site.linkedin} external variant="ghost" className="w-full">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button href={site.github} external variant="ghost" className="w-full">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                  <Button
                    href={hasResume ? site.resume : site.resumeRequestMailto}
                    external={hasResume}
                    variant="ghost"
                    className="w-full"
                  >
                    <Download className="h-4 w-4" />
                    {hasResume ? t.nav.resume : t.nav.requestResume}
                  </Button>
                </div>
                <p className="w-full text-center text-[11px] text-zinc-600 lg:text-right">
                  {t.cta.asyncNote}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
