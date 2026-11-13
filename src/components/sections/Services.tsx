"use client";

import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/Motion";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Services() {
  const { t } = useLocale();
  const s = t.studio.services;

  return (
    <section id="services" className="border-t border-line py-24 sm:py-36">
      <Container>
        <SectionHeading
          index="02"
          kicker={t.services.kicker}
          title={t.services.title}
          description={t.services.description}
        />

        <ul className="mt-16 sm:mt-24">
          {t.services.items.map((item, i) => (
            <li key={item.title} className="group border-t border-line last:border-b">
              <FadeIn className="grid gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:gap-10">
                <div className="flex gap-5 lg:col-span-5">
                  <span className="label pt-2 text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-ink transition-colors duration-300 group-hover:text-accent sm:text-3xl">
                    {item.title}
                  </h3>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-ink/80">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <dl className="grid grid-cols-2 gap-6 lg:col-span-3 lg:grid-cols-1 lg:gap-5 lg:text-right">
                  <div>
                    <dt className="label text-muted">{s.from}</dt>
                    <dd className="mt-1 font-display text-xl font-semibold text-ink">{s.onQuote}</dd>
                  </div>
                  <div>
                    <dt className="label text-muted">{s.delayLabel}</dt>
                    <dd className="mt-1 font-display text-xl font-semibold text-ink">
                      {s.delays[i] ?? "—"}
                    </dd>
                  </div>
                </dl>
              </FadeIn>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Button href="#contact" variant="primary" className="w-full sm:w-auto">
            {s.cta}
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
