import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Motion";
import { Handshake, LineChart, Star } from "lucide-react";

const items = [
  {
    title: "Industry internship exposure",
    body: "APRILIUM internship experience in real delivery conditions with version control, review loops, and team collaboration.",
    icon: Handshake,
  },
  {
    title: "Architecture-first project approach",
    body: "Projects emphasize problem framing, technical architecture, and maintainability rather than only visual polish.",
    icon: LineChart,
  },
  {
    title: "Quality and testing mindset",
    body: "ISTQB-aligned quality practices and reliability-focused delivery standards across product and engineering decisions.",
    icon: Star,
  },
] as const;

const strip = [
  { k: "Profile", v: "Software + AI Engineer" },
  { k: "Engagement", v: "Freelance / consulting / hiring" },
  { k: "Availability", v: "Remote-first collaboration" },
  { k: "Timezone", v: "UTC+1" },
] as const;

export function SocialProof() {
  return (
    <section className="border-t border-white/10 py-24 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <SectionHeading
              kicker="Achievements"
              title="Trust built through shipped work and technical consistency"
              description="I focus on verifiable signals: architecture quality, delivery discipline, and outcomes teams can evaluate quickly."
            />
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              This section highlights concrete indicators recruiters and clients care about: project
              depth, quality mindset, and consistency of execution.
            </p>
          </div>

          <div className="lg:col-span-8">
            <Stagger className="grid gap-3 sm:grid-cols-2">
              {items.map((i) => (
                <StaggerItem key={i.title}>
                  <div className="glass-panel hover-lift h-full rounded-2xl p-5">
                    <i.icon className="h-5 w-5 text-sky-300/80" />
                    <h3 className="mt-3 text-sm font-semibold text-white">{i.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{i.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {strip.map((s) => (
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
