"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { type PointerEvent, type ReactNode } from "react";

/** Wrapper that tilts toward the mouse with a soft glare. Does nothing on touch input. */
export function TiltCard({
  children,
  className = "",
  max = 6,
}: {
  children: ReactNode;
  className?: string;
  /** Maximum tilt in degrees. */
  max?: number;
}) {
  const rx = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const glare = useSpring(useMotionValue(0), { stiffness: 180, damping: 22 });
  const background = useMotionTemplate`radial-gradient(520px circle at ${gx}% ${gy}%, rgb(var(--ink) / 0.14), transparent 60%)`;

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    ry.set((px - 0.5) * 2 * max);
    rx.set((0.5 - py) * 2 * max);
    gx.set(px * 100);
    gy.set(py * 100);
    glare.set(1);
  }

  function onLeave() {
    rx.set(0);
    ry.set(0);
    glare.set(0);
  }

  return (
    <div className={className} style={{ perspective: 1200 }}>
      <motion.div
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative h-full w-full will-change-transform"
      >
        {children}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ background, opacity: glare }}
        />
      </motion.div>
    </div>
  );
}
