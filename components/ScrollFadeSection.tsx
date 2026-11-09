"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollFadeSectionProps {
  children: ReactNode;
  className?: string;
  /** Fraction of element that must be visible to trigger (0–1). Default 0.12 */
  threshold?: number;
  /** Fade out again when scrolling past (e.g. leave viewport). Default true. */
  fadeOut?: boolean;
}

export function ScrollFadeSection({
  children,
  className = "",
  threshold = 0.12,
  fadeOut = true,
}: ScrollFadeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setVisible(entry.isIntersecting);
        }
      },
      { threshold, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const show = visible || !fadeOut;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}
