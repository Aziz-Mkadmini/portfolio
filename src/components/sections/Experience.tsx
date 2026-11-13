"use client";

import Image from "next/image";
import { Download, Plus } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn, Stagger, StaggerItem } from "@/components/Motion";
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

/**
 * "Why me": what a client needs to trust the person (photo, promise, working conditions).
 * The résumé-style content (internships, degrees, certifications, availability for jobs) is
 * kept, but behind a toggle so it does not compete with the client message.
 */
export function Experience() {
  const { t } = useLocale();
  const w = t.studio.why;
  const hasResume = /^(https?:\/\/|\/)/.test(site.resume);
  const credentials = [...t.experience.creds, ...t.social.items];

  return (
    <section id="experience" className="border-t border-line py-24 sm:py-36">
      <Container>
        <SectionHeading index="04" kicker={w.kicker} title={w.title} description={w.description} />

        <div className="mt-16 grid gap-10 sm:mt-24 lg:grid-cols-12 lg:gap-12">
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
            <Stagger className="grid gap-x-8 gap-y-8 sm:grid-cols-3" staggerChildren={0.1}>
              {w.points.map((point) => (
                <StaggerItem key={point.title}>
                  <div className="relative border-t border-line pt-5">
                    <span className="absolute -top-px left-0 h-px w-10 bg-accent" aria-hidden />
                    <h3 className="font-display text-xl font-semibold leading-tight text-ink">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{point.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <p className="label mt-12 text-accent">{t.studio.aboutKicker}</p>
            <p className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl text-balance">
              {t.about.title}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">{t.about.description}</p>
            <Bullets items={t.about.bullets} />
          </div>
        </div>

        <details className="group mt-16 border-y border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 font-display text-xl font-semibold text-ink transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
            {w.backgroundToggle}
            <Plus className="h-5 w-5 flex-none transition-transform duration-300 group-open:rotate-45" />
          </summary>

          <div className="pb-10">
            <p className="text-base leading-relaxed text-ink/85">
              {t.about.bodyBefore} <strong className="font-semibold text-ink">AI Engineer</strong> &{" "}
              <strong className="font-semibold text-ink">Software Engineer</strong>{" "}
              {t.about.bodyAfter}
            </p>

            <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-12">
              <div className="border-t border-line pt-5 lg:col-span-2">
                <p className="label text-muted">{t.experience.professional}</p>
                <Bullets items={t.experience.professionalItems} />
              </div>
              <div className="border-t border-line pt-5">
                <p className="label text-muted">{t.experience.education}</p>
                <Bullets items={t.experience.educationItems} />
                <p className="label mt-8 text-muted">{t.experience.achievements}</p>
                <Bullets items={t.experience.achievementItems} />
              </div>
            </div>

            <p className="label mt-12 text-accent">{t.studio.credsKicker}</p>
            <div className="mt-4 border-b border-line">
              {credentials.map((c, i) => (
                <div
                  key={c.title}
                  className="grid gap-2 border-t border-line py-5 sm:grid-cols-12 sm:gap-8"
                >
                  <p className="label pt-1 text-muted sm:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h4 className="font-display text-lg font-semibold text-ink sm:col-span-4">
                    {c.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted sm:col-span-7">{c.body}</p>
                </div>
              ))}
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {t.social.strip.map((s) => (
                <div key={s.k}>
                  <dt className="label text-muted">{s.k}</dt>
                  <dd className="mt-1.5 text-sm font-medium text-ink">{s.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 grid gap-8 rounded-2xl border border-line bg-surface-raised p-6 sm:p-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-4">
                <p className="label text-accent">{t.experience.availability}</p>
                <p className="mt-3 font-display text-xl font-semibold leading-snug text-ink">
                  {t.experience.availabilityBody}
                </p>
              </div>
              <div className="lg:col-span-5">
                <p className="label text-muted">{t.experience.timeline}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/85">
                  {t.experience.timelineBody}
                </p>
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
          </div>
        </details>
      </Container>
    </section>
  );
}
