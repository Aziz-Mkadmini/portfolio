"use client";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, Stagger, StaggerItem } from "@/components/Motion";
import { CheckCircle2 } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function About() {
  const { t } = useLocale();

  return (
    <section id="about" className="border-t border-white/10 py-24 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-12">
            <SectionHeading
              kicker={t.about.kicker}
              title={t.about.title}
              description={t.about.description}
            />
            <FadeIn>
              <p className="mt-6 text-base leading-relaxed text-zinc-300">
                {t.about.bodyBefore}{" "}
                <strong className="font-medium text-white">AI Engineer</strong>{" "}
                &{" "}
                <strong className="font-medium text-white">Software Engineer</strong>{" "}
                {t.about.bodyAfter}
              </p>
            </FadeIn>
            <Stagger className="mt-6 space-y-3" staggerChildren={0.12}>
              {t.about.bullets.map((b) => (
                <StaggerItem key={b}>
                  <div className="flex gap-2 text-sm text-zinc-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-accent/80" />
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
