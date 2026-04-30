import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, Stagger, StaggerItem } from "@/components/Motion";
import { CheckCircle2 } from "lucide-react";

const bullets = [
  "I structure codebases for long-term growth, not short-term demos",
  "I integrate AI features with strict control over quality, cost, and latency",
  "I optimize business workflows so teams move faster with less operational noise",
] as const;

export function About() {
  return (
    <section id="about" className="border-t border-white/10 py-24 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-12">
            <SectionHeading
              kicker="About"
              title="I build software and AI systems that solve real operational problems."
              description="From SaaS platforms to internal tools, I focus on systems that are fast to ship, easy to maintain, and useful in day-to-day work."
            />
            <FadeIn>
              <p className="mt-6 text-base leading-relaxed text-zinc-300">
                I work as an <strong className="font-medium text-white">AI Engineer</strong> and{" "}
                <strong className="font-medium text-white">Software Engineer</strong> focused on
                clean architecture, product reliability, and measurable outcomes.
              </p>
            </FadeIn>
            <Stagger className="mt-6 space-y-3" staggerChildren={0.12}>
              {bullets.map((b) => (
                <StaggerItem key={b}>
                  <div className="flex gap-2 text-sm text-zinc-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-sky-400/80" />
                    {b}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  );
}
