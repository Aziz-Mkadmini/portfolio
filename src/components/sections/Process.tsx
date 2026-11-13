"use client";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Motion";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Process() {
  const { t } = useLocale();
  const p = t.studio.process;

  return (
    <section id="process" className="border-t border-line py-24 sm:py-36">
      <Container>
        <SectionHeading index="03" kicker={p.kicker} title={p.title} description={p.description} />

        <Stagger
          className="mt-16 grid gap-x-8 gap-y-12 sm:mt-24 sm:grid-cols-2 lg:grid-cols-4"
          staggerChildren={0.12}
        >
          {p.steps.map((step, i) => (
            <StaggerItem key={step.title} y={20}>
              <div className="relative border-t border-line pt-6">
                <span className="absolute -top-px left-0 h-px w-12 bg-accent" aria-hidden />
                <p className="font-display text-6xl font-semibold leading-none text-ink/15 sm:text-7xl">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="label mt-2 text-accent">{step.when}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
