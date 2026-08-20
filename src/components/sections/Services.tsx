"use client";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Motion";
import {
  SiOpenai,
  SiNextdotjs,
  SiN8N,
  SiPostman,
  SiGrafana,
  SiJupyter,
  SiZapier,
} from "react-icons/si";
import { type ReactNode } from "react";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const icons: ReactNode[] = [
  <SiOpenai key="ai" className="h-5 w-5 text-sky-300/95" />,
  <SiNextdotjs key="fs" className="h-5 w-5 text-indigo-300/95" />,
  <SiN8N key="aut" className="h-5 w-5 text-cyan-300/95" />,
  <SiPostman key="api" className="h-5 w-5 text-blue-300/95" />,
  <SiGrafana key="dash" className="h-5 w-5 text-sky-300/95" />,
  <SiJupyter key="ds" className="h-5 w-5 text-indigo-300/95" />,
  <SiZapier key="bpa" className="h-5 w-5 text-cyan-300/95" />,
];

export function Services() {
  const { t } = useLocale();

  return (
    <section id="services" className="border-t border-white/10 py-24 sm:py-28">
      <Container>
        <SectionHeading
          kicker={t.services.kicker}
          title={t.services.title}
          description={t.services.description}
        />

        <Stagger className="mt-14 grid gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => (
            <StaggerItem key={s.title}>
              <div className="glass-panel hover-lift group relative h-full overflow-hidden rounded-2xl p-5">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-cyan-500/0 opacity-0 transition group-hover:opacity-100 group-hover:from-blue-500/10 group-hover:to-cyan-500/8" />
                <div className="relative">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    {icons[i] ?? <SiOpenai className="h-5 w-5 text-sky-300/95" />}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.description}</p>
                  <ul className="mt-4 space-y-2 text-xs text-zinc-500">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="text-sky-400/70">·</span>
                        <span className="text-zinc-400">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
