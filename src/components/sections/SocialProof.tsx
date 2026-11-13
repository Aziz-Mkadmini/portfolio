"use client";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Motion";
import { Handshake, LineChart, Star } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const icons = [Handshake, LineChart, Star] as const;

export function SocialProof() {
  const { t } = useLocale();

  return (
    <section className="border-t border-white/10 py-24 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <SectionHeading
              kicker={t.social.kicker}
              title={t.social.title}
              description={t.social.description}
            />
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">{t.social.note}</p>
          </div>

          <div className="lg:col-span-8">
            <Stagger className="grid gap-3 sm:grid-cols-2">
              {t.social.items.map((i, idx) => {
                const Icon = icons[idx] ?? Star;
                return (
                  <StaggerItem key={i.title}>
                    <div className="glass-panel hover-lift h-full rounded-2xl p-5">
                      <Icon className="h-5 w-5 text-accent/80" />
                      <h3 className="mt-3 text-sm font-semibold text-white">{i.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{i.body}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {t.social.strip.map((s) => (
                <div
                  key={s.k}
                  className="glass-panel hover-lift rounded-2xl bg-zinc-950/40 p-3 sm:p-4"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                    {s.k}
                  </p>
                  <p className="mt-1 text-xs font-medium text-zinc-200 sm:text-sm">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
