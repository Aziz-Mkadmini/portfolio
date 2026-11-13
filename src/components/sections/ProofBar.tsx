"use client";

import { Container } from "@/components/Container";
import { Counter } from "@/components/Motion";
import { useLocale } from "@/lib/i18n/LocaleProvider";

/** Key figures shown right under the hero. Every number comes with its source. */
export function ProofBar() {
  const { t } = useLocale();

  return (
    <section className="border-y border-line bg-surface-raised/60 py-12 sm:py-16" aria-label={t.studio.stats.kicker}>
      <Container>
        <p className="label text-muted">{t.studio.stats.kicker}</p>
        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {t.studio.stats.items.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse justify-end">
              <dt className="mt-3 max-w-[16rem] text-sm leading-snug text-muted">
                {stat.label}
                <span className="label mt-2 block text-ink/70">{stat.source}</span>
              </dt>
              <dd className="whitespace-nowrap font-display text-5xl font-semibold leading-none tracking-tight text-ink sm:text-6xl">
                <Counter value={stat.value} prefix={stat.prefix} />
                {stat.suffix ? (
                  <span className="text-2xl text-accent sm:text-3xl">{stat.suffix}</span>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
