"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/Motion";
import { useLocale } from "@/lib/i18n/LocaleProvider";

/** Offers grouped by pillar: what the client gets, how long it takes, and one way to ask. */
export function Services() {
  const { t } = useLocale();
  const o = t.studio.offers;
  const s = t.studio.services;

  return (
    <section id="services" className="border-t border-line py-24 sm:py-36">
      <Container>
        <SectionHeading
          index="02"
          kicker={t.services.kicker}
          title={o.title}
          description={o.description}
        />

        <div className="mt-16 space-y-20 sm:mt-24 sm:space-y-28">
          {o.families.map((family, f) => (
            <div key={family.key} className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <p className="label text-accent">
                    02.{f + 1} — {t.studio.filters[family.key]}
                  </p>
                  <h3 className="mt-4 font-display text-4xl font-semibold leading-none tracking-tight text-ink sm:text-5xl">
                    {family.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-muted">{family.intro}</p>
                  <p className="mt-6 inline-flex rounded-full border border-accent/40 px-3 py-1 text-xs font-medium text-accent">
                    {o.priceNote}
                  </p>
                </div>
              </div>

              <ul className="lg:col-span-8">
                {family.items.map((item) => (
                  <li key={item.title} className="group border-t border-line last:border-b">
                    <FadeIn className="grid gap-5 py-8 sm:grid-cols-12 sm:gap-8">
                      <div className="sm:col-span-6">
                        <h4 className="font-display text-2xl font-semibold leading-tight tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">
                          {item.title}
                        </h4>
                        <p className="mt-3 text-sm leading-relaxed text-ink/85">{item.benefit}</p>
                        <p className="mt-4 text-sm text-muted">
                          <span className="label mr-2 text-muted">{s.delayLabel}</span>
                          <span className="font-semibold text-ink">{item.delay}</span>
                        </p>
                      </div>
                      <div className="sm:col-span-6">
                        <p className="label text-muted">{o.deliverablesLabel}</p>
                        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/85">
                          {item.deliverables.map((d) => (
                            <li key={d} className="flex gap-3">
                              <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeIn>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button
            href={whatsappLink(t.studio.whatsappPrefill)}
            external
            variant="primary"
            className="w-full sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            {s.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
