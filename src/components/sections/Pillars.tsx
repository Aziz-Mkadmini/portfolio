"use client";

import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/Motion";
import { useLocale } from "@/lib/i18n/LocaleProvider";

/** "What I do for you": the two pillars of the offer, each with benefits, a proof and a CTA. */
export function Pillars() {
  const { t } = useLocale();
  const p = t.studio.pillars;

  return (
    <section id="offer" className="py-24 sm:py-36">
      <Container>
        <SectionHeading kicker={p.kicker} title={p.title} description={p.description} />

        <Stagger className="mt-14 grid gap-6 sm:mt-20 lg:grid-cols-2" staggerChildren={0.12}>
          {p.cards.map((card, i) => (
            <StaggerItem key={card.key} y={20} className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-line bg-surface-raised p-7 sm:p-10">
                <p className="label text-accent">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-display text-4xl font-semibold leading-none tracking-tight text-ink sm:text-5xl">
                  {card.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-ink/85">{card.promise}</p>

                <p className="label mt-8 text-muted">{p.benefitsLabel}</p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink">
                  {card.benefits.map((b) => (
                    <li key={b} className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-accent" />
                      {b}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-sm leading-relaxed text-muted">
                  <span className="text-ink/80">{p.examplesLabel} :</span> {card.examples}
                </p>

                <a
                  href={`#project-${card.proofSlug}`}
                  className="group mt-8 block border-t border-line pt-5 transition-colors hover:text-accent"
                >
                  <span className="label flex items-center justify-between text-muted">
                    {p.proofLabel}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </span>
                  <span className="mt-2 block font-display text-lg font-semibold">
                    {card.proofName}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">
                    {card.proofText}
                  </span>
                </a>

                <div className="mt-auto pt-8">
                  <Button
                    href={whatsappLink(card.prefill)}
                    external
                    variant="primary"
                    className="w-full sm:w-auto"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {card.cta}
                  </Button>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
