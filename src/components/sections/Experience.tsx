import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, Stagger, StaggerItem } from "@/components/Motion";
import { Award, Briefcase, CalendarRange, Medal, Trophy } from "lucide-react";

const experience = [
  {
    label: "Professional experience",
    items: [
      "Software Engineering Intern — APRILIUM (2024): contributed to production web features, code quality, and delivery workflows.",
      "AI and automation project work (2023-2026): built scalable software, AI-backed tools, and business process systems.",
    ],
  },
  {
    label: "Education & training",
    items: [
      "Computer science engineering track with hands-on software architecture, data systems, and full-stack implementation.",
      "Continuous learning through practical projects, technical certifications, and applied product work.",
    ],
  },
] as const;

const creds = [
  {
    title: "APRILIUM Internship",
    body: "Industry internship with real delivery expectations, collaborative development, and production-focused engineering practices.",
    icon: Briefcase,
  },
  {
    title: "ISTQB Certification Path",
    body: "Testing and quality assurance foundation that strengthens reliability mindset across architecture, implementation, and release flow.",
    icon: Award,
  },
] as const;

const achievements = [
  "Delivered software solutions that combine product usability with maintainable engineering",
  "Built portfolio projects with real architecture choices, measurable outcomes, and clear business value",
] as const;

export function Experience() {
  return (
    <section id="experience" className="border-t border-white/10 py-24 sm:py-28">
      <Container>
        <SectionHeading
          kicker="Experience & authority"
          title="Experience built through shipped systems and practical delivery constraints"
          description="My track record combines product delivery, technical ownership, and quality-focused engineering across software and AI work."
        />

        <div className="mt-14 grid gap-4 sm:mt-20 lg:grid-cols-2">
          {experience.map((b) => (
            <FadeIn key={b.label}>
              <div className="glass-panel hover-lift h-full rounded-2xl p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  <Briefcase className="h-4 w-4 text-sky-300/80" />
                  {b.label}
                </div>
                <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                  {b.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-sky-400/60">·</span>
                      <span className="leading-relaxed">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <Stagger className="mt-4 grid gap-4 lg:grid-cols-3">
          {creds.map((c) => (
            <StaggerItem key={c.title}>
              <div className="glass-panel hover-lift h-full rounded-2xl bg-gradient-to-b from-white/[0.04] to-zinc-950/20 p-6">
                <c.icon className="h-5 w-5 text-sky-300/80" />
                <h3 className="mt-3 font-display text-base font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{c.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <div className="glass-panel hover-lift lg:col-span-2 rounded-2xl bg-zinc-950/40 p-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              <Trophy className="h-4 w-4 text-amber-300/70" />
              Achievements
            </div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {achievements.map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="text-sky-400/60">·</span>
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-zinc-500">More details are available in the downloadable resume and LinkedIn profile.</p>
          </div>
          <div className="glass-panel hover-lift rounded-2xl p-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              <CalendarRange className="h-4 w-4 text-zinc-400" />
              Timeline snapshot
            </div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              2023-2026: software and AI product builds. 2024: APRILIUM internship.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-300">
              <Medal className="h-4 w-4 text-sky-300/80" />
              Resume available for recruiters and partners
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
