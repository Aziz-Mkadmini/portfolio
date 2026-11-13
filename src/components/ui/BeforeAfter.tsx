"use client";

import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { useState, type CSSProperties } from "react";

// The before/after files in public/redesigns are one stacked 1680x1614 image: the "before"
// screenshot on top and the "after" one below. Each layer shows the same file, cropped.
const SHEET = { width: 1680, height: 1614 };
const FRAME = { x: 40, width: 1600, height: 730 };
const BEFORE_Y = 90;
const AFTER_Y = 845;

function crop(y: number): CSSProperties {
  return {
    position: "absolute",
    maxWidth: "none",
    height: "auto",
    width: `${(SHEET.width / FRAME.width) * 100}%`,
    left: `${(-FRAME.x / FRAME.width) * 100}%`,
    top: `${(-y / FRAME.height) * 100}%`,
  };
}

export function BeforeAfter({
  src,
  alt,
  beforeLabel,
  afterLabel,
  hint,
  priority = false,
}: {
  src: string;
  alt: string;
  beforeLabel: string;
  afterLabel: string;
  hint: string;
  priority?: boolean;
}) {
  const [pos, setPos] = useState(50);
  const sizes = "(min-width: 1024px) 1200px, 105vw";

  return (
    <figure>
      <div
        className="relative w-full select-none overflow-hidden rounded-2xl border border-line bg-surface-raised"
        style={{ aspectRatio: `${FRAME.width} / ${FRAME.height}` }}
        data-cursor="drag"
      >
        <Image
          src={src}
          alt={alt}
          width={SHEET.width}
          height={SHEET.height}
          sizes={sizes}
          priority={priority}
          style={crop(AFTER_Y)}
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          aria-hidden
        >
          <Image
            src={src}
            alt=""
            width={SHEET.width}
            height={SHEET.height}
            sizes={sizes}
            priority={priority}
            style={crop(BEFORE_Y)}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-accent"
          style={{ left: `${pos}%` }}
          aria-hidden
        >
          <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-surface shadow-lg">
            <MoveHorizontal className="h-5 w-5" />
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          step={0.5}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`${beforeLabel} / ${afterLabel}`}
          aria-valuetext={`${Math.round(pos)}% ${beforeLabel}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          style={{ touchAction: "pan-y" }}
        />
      </div>
      <figcaption className="label mt-3 flex items-center justify-between text-muted">
        <span>{beforeLabel}</span>
        <span className="hidden sm:inline">{hint}</span>
        <span className="text-accent">{afterLabel}</span>
      </figcaption>
    </figure>
  );
}
