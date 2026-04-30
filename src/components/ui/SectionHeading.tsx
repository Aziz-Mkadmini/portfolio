import { type ReactNode } from "react";

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}: {
  kicker?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {kicker ? (
        <p className="inline-flex text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300/85">
          {kicker}
        </p>
      ) : null}
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl text-balance">
        {title}
      </h2>
      <div className="mt-4 h-px w-20 bg-gradient-to-r from-cyan-300/70 to-transparent" />
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-zinc-400 text-balance">
          {description}
        </p>
      ) : null}
    </div>
  );
}
