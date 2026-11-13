"use client";

import {
  Boxes,
  CircleDot,
  ExternalLink,
  Github,
  Orbit,
  Rocket,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { type ComponentType } from "react";
import {
  SiAuth0,
  SiChartdotjs,
  SiFastapi,
  SiFramer,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiStripe,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";
import { projects, type ProjectIcon } from "@/lib/projects";
import { site } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MockProductShot } from "@/components/ui/MockProductShot";
import { FadeIn, Stagger, StaggerItem } from "@/components/Motion";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const projectIcons: Record<ProjectIcon, LucideIcon> = {
  orbit: Orbit,
  rocket: Rocket,
  boxes: Boxes,
  sparkles: Sparkles,
};

const tone = ["violet", "slate", "violet"] as const;

const stackIconByKeyword: Array<{ key: string; icon: ComponentType<{ className?: string }> }> = [
  { key: "next.js", icon: SiNextdotjs },
  { key: "typescript", icon: SiTypescript },
  { key: "tailwind", icon: SiTailwindcss },
  { key: "prisma", icon: SiPrisma },
  { key: "postgresql", icon: SiPostgresql },
  { key: "neon", icon: SiPostgresql },
  { key: "nextauth", icon: SiAuth0 },
  { key: "paddle", icon: SiStripe },
  { key: "fastapi", icon: SiFastapi },
  { key: "framer", icon: SiFramer },
  { key: "recharts", icon: SiChartdotjs },
  { key: "three.js", icon: SiThreedotjs },
];

function getStackIcon(stackLabel: string) {
  const normalized = stackLabel.toLowerCase();
  return stackIconByKeyword.find((entry) => normalized.includes(entry.key))?.icon;
}

export function Projects() {
  const { t } = useLocale();

  return (
    <section id="projects" className="border-t border-white/10 py-24 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <SectionHeading
              kicker={t.projects.kicker}
              title={t.projects.title}
              description={t.projects.description}
            />
          </div>
          <FadeIn>
            <Button
              href={site.bookCall}
              variant="secondary"
              external={site.bookCall.startsWith("http")}
              className="w-full sm:w-auto"
            >
              {t.projects.discuss}
            </Button>
          </FadeIn>
        </div>

        <Stagger className="mt-14 space-y-16 sm:mt-20 sm:space-y-20">
          {projects.map((p, i) => {
            const TypeIcon = projectIcons[p.icon];
            const copy = t.projectFields[p.slug];
            const type = copy?.type ?? p.type;
            const summary = copy?.summary ?? p.summary;
            const problem = copy?.problem ?? p.problem;
            const impact = copy?.impact ?? p.impact;
            const solution = copy?.solution ?? p.solution;
            const highlights = copy?.highlights ?? p.highlights;
            const outcomes = copy?.outcomes ?? p.outcomes;
            const videoLabel = copy?.videoLabel ?? p.videoLabel;
            return (
              <StaggerItem key={p.slug}>
                <article
                  className={`grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-12 lg:items-start lg:gap-12 lg:pt-10 ${
                    i % 2 === 1 ? "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1" : ""
                  }`}
                >
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <p className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-medium text-zinc-300">
                        <TypeIcon className="h-3.5 w-3.5 text-sky-300/80" />
                        {type}
                      </p>
                      <span className="text-zinc-600">·</span>
                      <span>{t.projects.caseStudy}</span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{summary}</p>

                    <div className="mt-6 space-y-4">
                      <div className="glass-panel hover-lift rounded-2xl p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                          {t.projects.problem}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-300">{problem}</p>
                      </div>
                      <div className="hover-lift rounded-2xl border border-white/10 bg-gradient-to-b from-sky-500/10 to-zinc-950/10 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-sky-200/60">
                          {t.projects.impact}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-200">{impact}</p>
                      </div>
                      <div className="glass-panel hover-lift rounded-2xl p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                          {t.projects.solution}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-300">{solution}</p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                        {t.projects.stack}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {p.stack.map((stackItem) => (
                          <span
                            key={stackItem}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-zinc-200"
                          >
                            {(() => {
                              const Icon = getStackIcon(stackItem);
                              return Icon ? (
                                <Icon className="h-3.5 w-3.5 text-sky-300/95" />
                              ) : (
                                <CircleDot className="h-3.5 w-3.5 text-sky-300/80" />
                              );
                            })()}
                            {stackItem}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-2 min-[400px]:flex-row min-[400px]:flex-wrap">
                      <Button
                        href={p.demoUrl ?? "#contact"}
                        variant="primary"
                        className="w-full min-[400px]:w-auto"
                        external={Boolean(p.demoUrl && p.demoUrl.startsWith("http"))}
                      >
                        <Sparkles className="h-4 w-4" />
                        {p.demoUrl && p.demoUrl !== "#contact" && p.demoUrl.startsWith("http")
                          ? t.projects.liveDemo
                          : t.projects.requestDemo}
                        <ExternalLink className="h-4 w-4 opacity-80" />
                      </Button>
                      {p.repoUrl ? (
                        <Button
                          href={p.repoUrl}
                          external
                          variant="secondary"
                          className="w-full min-[400px]:w-auto"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                          <ExternalLink className="h-4 w-4 opacity-70" />
                        </Button>
                      ) : null}
                      <Button href="#contact" variant="ghost" className="w-full min-[400px]:w-auto">
                        <Target className="h-4 w-4" />
                        {t.projects.talkAbout}
                      </Button>
                    </div>

                    {highlights?.length ? (
                      <div className="glass-panel hover-lift mt-5 rounded-2xl p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                          {t.projects.highlights}
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                          {highlights.map((h) => (
                            <li key={h} className="flex gap-2">
                              <span className="text-sky-400/70">·</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {outcomes?.length ? (
                      <div className="hover-lift mt-4 rounded-2xl border border-white/10 bg-gradient-to-b from-sky-500/10 to-zinc-950/10 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-sky-200/60">
                          {t.projects.outcomes}
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-zinc-200">
                          {outcomes.map((o) => (
                            <li key={o} className="flex gap-2">
                              <span className="text-sky-400/70">·</span>
                              <span>{o}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  <div className="lg:col-span-7">
                    <div className="space-y-3">
                      <p className="text-xs text-zinc-500">{t.projects.preview}</p>
                      {p.imageSrc ? (
                        <a
                          href={p.imageSrc}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass-panel hover-lift group relative block overflow-hidden rounded-2xl"
                        >
                          <div className="relative h-[520px] w-full sm:h-[680px] lg:h-[760px]">
                            <Image
                              src={p.imageSrc}
                              alt={p.imageAlt}
                              fill
                              sizes="(min-width: 1024px) 640px, 100vw"
                              className="object-contain bg-zinc-950/20 transition duration-700 group-hover:scale-[1.06]"
                              priority={i === 0}
                            />
                          </div>
                        </a>
                      ) : (
                        <MockProductShot label={p.name} icon={p.icon} tone={tone[i % 3]} />
                      )}
                      {p.videoSrc ? (
                        <div className="glass-panel overflow-hidden rounded-2xl">
                          <p className="border-b border-white/10 px-3 py-2 text-xs text-zinc-500">
                            {videoLabel ?? t.projects.videoFallback}
                          </p>
                          <video
                            className="aspect-[9/16] max-h-[520px] w-full bg-zinc-950 object-contain sm:max-h-[640px]"
                            controls
                            playsInline
                            preload="metadata"
                          >
                            <source src={p.videoSrc} type="video/mp4" />
                          </video>
                        </div>
                      ) : null}
                      {t.projects.previewHint ? (
                        <p className="text-[11px] leading-relaxed text-zinc-600">
                          {t.projects.previewHint}
                        </p>
                      ) : null}
                      {p.images?.length ? (
                        <>
                          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {p.images.slice(0, 4).map((img) => (
                              <a
                                key={img.src}
                                href={img.src}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-panel group relative block overflow-hidden rounded-xl"
                              >
                                <div className="relative h-44 w-full sm:h-56">
                                  <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes="(min-width: 1024px) 560px, 100vw"
                                    className="object-contain bg-zinc-950/20 transition duration-500 group-hover:scale-[1.08]"
                                  />
                                </div>
                              </a>
                            ))}
                          </div>
                          {p.images.length > 4 ? (
                            <details className="group mt-3">
                              <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-zinc-200 transition hover:border-white/15 hover:bg-white/10">
                                <span>{t.projects.seeMore}</span>
                                <span className="text-zinc-400">(+{p.images.length - 4})</span>
                              </summary>
                              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {p.images.slice(4).map((img) => (
                                  <a
                                    key={img.src}
                                    href={img.src}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-panel group relative block overflow-hidden rounded-xl"
                                  >
                                    <div className="relative h-44 w-full sm:h-56">
                                      <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        sizes="(min-width: 1024px) 560px, 100vw"
                                        className="object-contain bg-zinc-950/20 transition duration-500 group-hover:scale-[1.08]"
                                      />
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </details>
                          ) : null}
                        </>
                      ) : null}
                    </div>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
