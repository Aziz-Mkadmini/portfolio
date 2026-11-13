"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Counter, FadeIn, Stagger, StaggerItem } from "@/components/Motion";
import { useLocale } from "@/lib/i18n/LocaleProvider";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink/85">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Experience() {
  const { t } = useLocale();
  const hasResume = /^(https?:\/\/|\/)/.test(site.resume);
  const credentials = [...t.experience.creds, ...t.social.items];

  return (
    <section id="experience" className="border-t border-line py-24 sm:py-36">
      <Container>
        <SectionHeading
          index="04"
          kicker={t.experience.kicker}
          title={t.experience.title}
          description={t.experience.description}
        />

        {/* Key figures */}
        <div className="mt-16 sm:mt-24">
          <p className="label text-muted">{t.studio.stats.kicker}</p>
          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-8 lg:grid-cols-4">
            {t.studio.stats.items.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse justify-end">
                <dt className="mt-3 max-w-[16rem] text-sm leading-snug text-muted">
                  {stat.label}
                  <span className="label mt-2 block text-ink/70">{stat.source}</span>
                </dt>
                <dd className="whitespace-nowrap font-display text-5xl font-semibold leading-none tracking-tight text-ink sm:text-7xl">
                  <Counter value={stat.value} prefix={stat.prefix} />
                  {stat.suffix ? (
                    <span className="text-2xl text-accent sm:text-4xl">{stat.suffix}</span>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* About */}
        <div className="mt-20 grid gap-10 sm:mt-28 lg:grid-cols-12 lg:gap-12">
          <FadeIn className="lg:col-span-4" y={24}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-surface-raised">
              <div
                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-accent/15 to-transparent"
                aria-hidden
              />
              <Image
                src="/imageprofil.png"
                alt={site.name}
                fill
                sizes="(min-width: 1024px) 360px, 86vw"
                className="object-contain object-bottom"
              />
            </div>
          </FadeIn>
          <div className="lg:col-span-8">
            <p className="label text-accent">{t.studio.aboutKicker}</p>
            <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl text-balance">
              {t.about.title}
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted">{t.about.description}</p>
            <p className="mt-4 text-base leading-relaxed text-ink/85">
              {t.about.bodyBefore} <strong className="font-semibold text-ink">AI Engineer</strong> &{" "}
              <strong className="font-semibold text-ink">Software Engineer</strong>{" "}
              {t.about.bodyAfter}
            </p>
            <Bullets items={t.about.bullets} />
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 sm:grid-cols-4">
              {t.social.strip.map((s) => (
                <div key={s.k}>
                  <dt className="label text-muted">{s.k}</dt>
                  <dd className="mt-1.5 text-sm font-medium text-ink">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-20 grid gap-10 sm:mt-28 lg:grid-cols-3 lg:gap-12">
          <div className="border-t border-line pt-5">
            <p className="label text-muted">{t.experience.professional}</p>
            <Bullets items={t.experience.professionalItems} />
          </div>
          <div className="border-t border-line pt-5">
            <p className="label text-muted">{t.experience.education}</p>
            <Bullets items={t.experience.educationItems} />
          </div>
          <div className="border-t border-line pt-5">
            <p className="label text-muted">{t.experience.achievements}</p>
            <Bullets items={t.experience.achievementItems} />
          </div>
        </div>

        {/* Certifications & credentials */}
        <div className="mt-20 sm:mt-28">
          <div className="max-w-2xl">
            <p className="label text-accent">{t.studio.credsKicker}</p>
            <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl text-balance">
              {t.social.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted">{t.social.description}</p>
          </div>
          <Stagger className="mt-10 border-b border-line" staggerChildren={0.07}>
            {credentials.map((c, i) => (
              <StaggerItem key={c.title}>
                <div className="grid gap-2 border-t border-line py-5 sm:grid-cols-12 sm:gap-8">
                  <p className="label pt-1 text-muted sm:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h4 className="font-display text-lg font-semibold text-ink sm:col-span-4">
                    {c.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted sm:col-span-7">{c.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">{t.social.note}</p>
        </div>

        {/* Availability */}
        <div className="mt-16 grid gap-8 rounded-2xl border border-line bg-surface-raised p-6 sm:p-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <p className="label text-accent">{t.experience.availability}</p>
            <p className="mt-3 font-display text-xl font-semibold leading-snug text-ink">
              {t.experience.availabilityBody}
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="label text-muted">{t.experience.timeline}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/85">{t.experience.timelineBody}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{t.experience.moreDetails}</p>
          </div>
          <div className="lg:col-span-3 lg:text-right">
            <Button
              href={hasResume ? site.resume : site.resumeRequestMailto}
              external={hasResume}
              variant="secondary"
              className="w-full lg:w-auto"
            >
              <Download className="h-4 w-4" />
              {hasResume ? t.hero.downloadResume : t.hero.requestResume}
            </Button>
            <p className="mt-3 text-xs text-muted">{t.experience.resumeNote}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
