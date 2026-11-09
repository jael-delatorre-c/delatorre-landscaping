"use client";

import { useEffect, useState, type ReactNode } from "react";

/** Gradient stops keyed by scroll progress 0..1. Complimentary to fade-in sections. */
const GRADIENT_STOPS = [
  { progress: 0, top: "#e7efe6", bottom: "#eef0ea" },      // sage → warm (hero)
  { progress: 0.25, top: "#eef0ea", bottom: "#f6f3ea" },   // warm → base (services)
  { progress: 0.5, top: "#f6f3ea", bottom: "#e7efe6" },    // base → sage (portfolio)
  { progress: 0.75, top: "#e7efe6", bottom: "#e0e8de" },   // sage → deeper (gallery)
  { progress: 1, top: "#e0e8de", bottom: "#171717" },      // into CTA dark
];

function interpolate(
  a: string,
  b: string,
  t: number
): string {
  const hex = (x: string) => parseInt(x.slice(1), 16);
  const r = (h: number) => (h >> 16) & 0xff;
  const g = (h: number) => (h >> 8) & 0xff;
  const bl = (h: number) => h & 0xff;
  const ha = hex(a);
  const hb = hex(b);
  const rr = Math.round(r(ha) + (r(hb) - r(ha)) * t);
  const gg = Math.round(g(ha) + (g(hb) - g(ha)) * t);
  const bb = Math.round(bl(ha) + (bl(hb) - bl(ha)) * t);
  return `#${(1 << 24 | rr << 16 | gg << 8 | bb).toString(16).slice(1)}`;
}

function getGradientForProgress(progress: number): { top: string; bottom: string } {
  if (progress <= 0) return GRADIENT_STOPS[0];
  if (progress >= 1) return GRADIENT_STOPS[GRADIENT_STOPS.length - 1];
  let i = 0;
  while (i < GRADIENT_STOPS.length - 1 && GRADIENT_STOPS[i + 1].progress < progress) i++;
  const low = GRADIENT_STOPS[i];
  const high = GRADIENT_STOPS[i + 1];
  const t = (progress - low.progress) / (high.progress - low.progress);
  return {
    top: interpolate(low.top, high.top, t),
    bottom: interpolate(low.bottom, high.bottom, t),
  };
}

interface ScrollGradientProps {
  children: ReactNode;
}

export function ScrollGradient({ children }: ScrollGradientProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight <= 0 ? 0 : Math.min(1, scrollY / docHeight);
      setScrollProgress(progress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { top, bottom } = getGradientForProgress(scrollProgress);

  return (
    <>
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-0 transition-[background] duration-500 ease-out"
        style={{
          background: `linear-gradient(180deg, ${top} 0%, ${bottom} 100%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </>
  );
}
