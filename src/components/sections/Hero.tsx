"use client";

import { ArrowDown, MessageCircle } from "lucide-react";
import { type CSSProperties } from "react";
import { site } from "@/lib/site";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/Button";
import { RevealWords } from "@/components/Motion";
import { HeroVisual } from "@/components/three/HeroVisual";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-32 sm:pt-40">
      <HeroVisual />

      <Container className="relative flex flex-1 flex-col">
        <div className="max-w-4xl">
          <p className="label fade-up flex items-center gap-3 text-ink/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t.hero.kicker}
          </p>

          <RevealWords
            as="h1"
            immediate
            delay={120}
            key={t.hero.titleBefore}
            segments={[
              { text: t.hero.titleBefore },
              { text: t.hero.titleHighlight, className: "text-accent" },
              { text: t.hero.titleAfter },
            ]}
            className="mt-7 font-display text-[2.35rem] font-semibold leading-[1.03] tracking-tight text-ink min-[420px]:text-5xl sm:text-6xl lg:text-[4.5rem]"
          />

          <p
            className="fade-up mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
            style={delay(700)}
          >
            {t.hero.body}
          </p>

          <div
            className="fade-up mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={delay(850)}
          >
            <Button href="#projects" variant="primary" className="w-full sm:w-auto">
              {t.studio.viewProjects}
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button href={site.whatsapp} external variant="secondary" className="w-full sm:w-auto">
              <MessageCircle className="h-4 w-4" />
              {t.studio.whatsappCta}
            </Button>
          </div>
        </div>

        <div
          className="fade-up mt-16 border-t border-line pb-10 pt-6 sm:mt-auto lg:mt-auto"
          style={delay(1000)}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="label text-muted">
              {t.hero.sideKicker} — <span className="text-ink">{t.hero.sideTitle}</span>
            </p>
            <p className="label text-accent">{t.hero.sideChip}</p>
          </div>
          <ul className="mt-6 grid gap-5 text-sm leading-relaxed text-ink/85 sm:grid-cols-3 sm:gap-8">
            {t.hero.sideBullets.map((item, i) => (
              <li key={item} className="flex gap-3">
                <span className="label pt-0.5 text-accent">0{i + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
