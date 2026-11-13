import { type ReactNode } from "react";
import { RevealWords } from "@/components/Motion";

export function SectionHeading({
  kicker,
  index,
  title,
  description,
}: {
  kicker?: string;
  /** Optional section number shown before the kicker, e.g. "02". */
  index?: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-8">
        {kicker ? (
          <p className="label flex items-center gap-3 text-accent">
            {index ? <span className="text-muted">{index}</span> : null}
            <span className="h-px w-8 bg-accent/60" aria-hidden />
            {kicker}
          </p>
        ) : null}
        <RevealWords
          as="h2"
          text={title}
          className="mt-5 font-display text-[2rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem] text-balance"
        />
      </div>
      {description ? (
        <p className="max-w-md self-end text-base leading-relaxed text-muted lg:col-span-4">
          {description}
        </p>
      ) : null}
    </div>
  );
}
