"use client";

import { ArrowUpRight, Github, MessageCircle, Plus } from "lucide-react";
import Image from "next/image";
import { useState, type ComponentType } from "react";
import {
  SiAuth0,
  SiChartdotjs,
  SiDocker,
  SiFastapi,
  SiFramer,
  SiN8N,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiShopify,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { projects, type Project } from "@/lib/projects";
import { whatsappLink } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { TiltCard } from "@/components/ui/TiltCard";
import { FadeIn } from "@/components/Motion";
import { useLocale } from "@/lib/i18n/LocaleProvider";

/** Projects whose main visual is a stacked before/after sheet (see BeforeAfter). */
const beforeAfterSlugs = new Set(["oppenheim-3d", "falak-cosmetic"]);

const stackIconByKeyword: Array<{ key: string; icon: ComponentType<{ className?: string }> }> = [
  { key: "next.js", icon: SiNextdotjs },
  { key: "typescript", icon: SiTypescript },
  { key: "tailwind", icon: SiTailwindcss },
  { key: "prisma", icon: SiPrisma },
  { key: "supabase", icon: SiSupabase },
  { key: "postgresql", icon: SiPostgresql },
  { key: "neon", icon: SiPostgresql },
  { key: "nextauth", icon: SiAuth0 },
  { key: "paddle", icon: SiStripe },
  { key: "fastapi", icon: SiFastapi },
  { key: "framer", icon: SiFramer },
  { key: "recharts", icon: SiChartdotjs },
  { key: "three.js", icon: SiThreedotjs },
  { key: "react", icon: SiReact },
  { key: "n8n", icon: SiN8N },
  { key: "openai", icon: SiOpenai },
  { key: "python", icon: SiPython },
  { key: "docker", icon: SiDocker },
  { key: "shopify", icon: SiShopify },
  { key: "vercel", icon: SiVercel },
];

function getStackIcon(stackLabel: string) {
  const normalized = stackLabel.toLowerCase();
  return stackIconByKeyword.find((entry) => normalized.includes(entry.key))?.icon;
}

function Shot({
  src,
  alt,
  ratio,
  sizes,
}: {
  src: string;
  alt: string;
  ratio: string;
  sizes: string;
}) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden rounded-2xl border border-line bg-surface-raised ${ratio}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
    </a>
  );
}

function Facts({
  items,
  columns,
}: {
  items: Array<{ label: string; body: string; accent?: boolean }>;
  columns: boolean;
}) {
  return (
    <dl className={`grid gap-6 ${columns ? "md:grid-cols-3 md:gap-10" : ""}`}>
      {items.map((item) => (
        <div key={item.label} className="border-t border-line pt-4">
          <dt className={`label ${item.accent ? "text-accent" : "text-muted"}`}>{item.label}</dt>
          <dd className="mt-3 text-sm leading-relaxed text-ink/85">{item.body}</dd>
        </div>
      ))}
    </dl>
  );
}

function ProjectCase({ p, index }: { p: Project; index: number }) {
  const { t } = useLocale();
  // Gallery images and the video are only rendered once the case study has been opened.
  const [opened, setOpened] = useState(false);
  const copy = t.projectFields[p.slug];
  const type = copy?.type ?? p.type;
  const summary = copy?.summary ?? p.summary;
  const highlights = copy?.highlights ?? p.highlights;
  const outcomes = copy?.outcomes ?? p.outcomes;
  const videoLabel = copy?.videoLabel ?? p.videoLabel;

  const facts = [
    { label: t.projects.problem, body: copy?.problem ?? p.problem },
    { label: t.projects.impact, body: copy?.impact ?? p.impact, accent: true },
    { label: t.projects.solution, body: copy?.solution ?? p.solution },
  ];

  const isBeforeAfter = beforeAfterSlugs.has(p.slug) && Boolean(p.imageSrc);
  // The first project and the before/after ones get a full-width visual; the rest alternate
  // between two split layouts so no two neighbours look the same.
  const wide = index === 0 || isBeforeAfter;
  const flipped = index % 2 === 1;
  const isLive = Boolean(p.demoUrl && p.demoUrl.startsWith("http"));
  const hasMore = Boolean(highlights?.length || outcomes?.length || p.images?.length || p.videoSrc);

  const visual = !p.imageSrc ? null : isBeforeAfter ? (
    <BeforeAfter
      src={p.imageSrc}
      alt={p.imageAlt}
      beforeLabel={t.studio.before}
      afterLabel={t.studio.after}
      hint={t.studio.dragHint}
    />
  ) : (
    <TiltCard>
      <Shot
        src={p.imageSrc}
        alt={p.imageAlt}
        ratio={wide ? "aspect-[4/3] sm:aspect-[16/9]" : flipped ? "aspect-[4/3]" : "aspect-[5/4]"}
        sizes={wide ? "(min-width: 1024px) 1100px, 100vw" : "(min-width: 1024px) 640px, 100vw"}
      />
    </TiltCard>
  );

  const stack = (
    <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted">
      {p.stack.map((item) => {
        const Icon = getStackIcon(item);
        return (
          <li key={item} className="inline-flex items-center gap-1.5">
            {Icon ? <Icon className="h-3.5 w-3.5 text-ink/70" /> : null}
            {item}
          </li>
        );
      })}
    </ul>
  );

  const actions = (
    <div className="flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
      {isLive ? (
        <Button href={p.demoUrl} variant="secondary" external className="w-full min-[420px]:w-auto">
          {t.projects.liveDemo}
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      ) : (
        <Button
          href={whatsappLink(`${t.studio.whatsappAbout} ${p.name}`)}
          variant="secondary"
          external
          className="w-full min-[420px]:w-auto"
        >
          <MessageCircle className="h-4 w-4" />
          {t.studio.askDemo}
        </Button>
      )}
      {p.repoUrl ? (
        <Button href={p.repoUrl} external variant="ghost" className="w-full min-[420px]:w-auto">
          <Github className="h-4 w-4" />
          GitHub
        </Button>
      ) : null}
    </div>
  );

  return (
    <article id={`project-${p.slug}`} className="scroll-mt-20 border-t border-line pt-10 sm:pt-14">
      <FadeIn>
        <header className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-8">
            <p className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
              <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
              <span>{type}</span>
            </p>
            <h3 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl text-balance">
              {p.name}
            </h3>
          </div>
          <p className="text-base leading-relaxed text-muted lg:col-span-4">{summary}</p>
        </header>
      </FadeIn>

      {wide ? (
        <div className="mt-10">
          <FadeIn y={24}>{visual}</FadeIn>
          <div className="mt-10">
            <Facts items={facts} columns />
          </div>
          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {stack}
            <div className="flex-none">{actions}</div>
          </div>
        </div>
      ) : (
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <FadeIn y={24} className={`lg:col-span-7 ${flipped ? "lg:order-2" : ""}`}>
            {visual}
          </FadeIn>
          <div className="flex flex-col gap-8 lg:col-span-5">
            <Facts items={facts} columns={false} />
            {stack}
            {actions}
          </div>
        </div>
      )}

      {hasMore ? (
        <details
          className="group mt-10 border-t border-line"
          onToggle={(e) => {
            if (e.currentTarget.open) setOpened(true);
          }}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-semibold text-ink transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
            {t.studio.caseToggle}
            <Plus className="h-5 w-5 flex-none transition-transform duration-300 group-open:rotate-45" />
          </summary>
          <div className="grid gap-10 pb-4 pt-2 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-8 lg:col-span-5">
              {highlights?.length ? (
                <div>
                  <p className="label text-muted">{t.projects.highlights}</p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink/85">
                    {highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-muted" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {outcomes?.length ? (
                <div>
                  <p className="label text-accent">{t.projects.outcomes}</p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink/85">
                    {outcomes.map((o) => (
                      <li key={o} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
            <div className="space-y-4 lg:col-span-7">
              {opened && p.images?.length ? (
                <>
                  <p className="label text-muted">{t.studio.gallery}</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {p.images.map((img) => (
                      <Shot
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        ratio="aspect-[16/10]"
                        sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
                      />
                    ))}
                  </div>
                </>
              ) : null}
              {opened && p.videoSrc ? (
                <div className="overflow-hidden rounded-2xl border border-line bg-surface-raised">
                  <p className="label border-b border-line px-4 py-3 text-muted">
                    {videoLabel ?? t.projects.videoFallback}
                  </p>
                  <video
                    className="mx-auto aspect-[9/16] max-h-[560px] w-full bg-surface object-contain"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src={p.videoSrc} type="video/mp4" />
                  </video>
                </div>
              ) : null}
            </div>
          </div>
        </details>
      ) : null}
    </article>
  );
}

export function Projects() {
  const { t } = useLocale();

  return (
    <section id="projects" className="py-24 sm:py-36">
      <Container>
        <SectionHeading
          index="01"
          kicker={t.projects.kicker}
          title={t.projects.title}
          description={t.projects.description}
        />
        <div className="mt-16 space-y-20 sm:mt-24 sm:space-y-28">
          {projects.map((p, i) => (
            <ProjectCase key={p.slug} p={p} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
