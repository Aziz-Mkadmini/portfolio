"use client";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, Stagger, StaggerItem } from "@/components/Motion";
import { Award, Briefcase, CalendarRange, Medal, Trophy } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Experience() {
  const { t } = useLocale();

  const experience = [
    { label: t.experience.professional, items: t.experience.professionalItems, icon: Briefcase },
    { label: t.experience.education, items: t.experience.educationItems, icon: Briefcase },
  ];

  const credIcons = [Briefcase, Award] as const;

  return (
    <section id="experience" className="border-t border-white/10 py-24 sm:py-28">
      <Container>
        <SectionHeading
          kicker={t.experience.kicker}
          title={t.experience.title}
          description={t.experience.description}
        />

        <div className="mt-14 grid gap-4 sm:mt-20 lg:grid-cols-2">
          {experience.map((b) => (
            <FadeIn key={b.label}>
              <div className="glass-panel hover-lift h-full rounded-2xl p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  <b.icon className="h-4 w-4 text-accent/80" />
                  {b.label}
                </div>
                <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                  {b.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent/60">·</span>
                      <span className="leading-relaxed">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <Stagger className="mt-4 grid gap-4 lg:grid-cols-3">
          {t.experience.creds.map((c, idx) => {
            const Icon = credIcons[idx] ?? Award;
            return (
              <StaggerItem key={c.title}>
                <div className="glass-panel hover-lift h-full rounded-2xl bg-gradient-to-b from-white/[0.04] to-zinc-950/20 p-6">
                  <Icon className="h-5 w-5 text-accent/80" />
                  <h3 className="mt-3 font-display text-base font-semibold text-white">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{c.body}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <div className="glass-panel hover-lift lg:col-span-2 rounded-2xl bg-zinc-950/40 p-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              <Trophy className="h-4 w-4 text-amber-300/70" />
              {t.experience.achievements}
            </div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {t.experience.achievementItems.map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="text-accent/60">·</span>
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-zinc-500">{t.experience.moreDetails}</p>
          </div>
          <div className="glass-panel hover-lift rounded-2xl p-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              <CalendarRange className="h-4 w-4 text-zinc-400" />
              {t.experience.timeline}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{t.experience.timelineBody}</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-300">
              <Medal className="h-4 w-4 text-accent/80" />
              {t.experience.resumeNote}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
