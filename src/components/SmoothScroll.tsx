"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ReactNode } from "react";

// Lenis only smooths wheel scrolling, so it is fetched for mouse/trackpad devices only.
// Touch devices keep native scrolling and never download it.
const LenisRoot = dynamic(() => import("lenis/react").then((m) => m.ReactLenis), { ssr: false });

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setEnabled(fine.matches && !reduced.matches);
    sync();
    reduced.addEventListener("change", sync);
    fine.addEventListener("change", sync);
    return () => {
      reduced.removeEventListener("change", sync);
      fine.removeEventListener("change", sync);
    };
  }, []);

  return (
    <>
      {enabled ? <LenisRoot root options={{ lerp: 0.11, anchors: true }} /> : null}
      {children}
    </>
  );
}
