"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollFadeSectionProps {
  children: ReactNode;
  className?: string;
}

/**
 * Subtle fade-up as a section scrolls into view — progressive enhancement only.
 *
 * Content renders fully visible (server HTML has no hidden state). After mount
 * we opt the element into the hidden state only when ALL of these hold:
 *   - IntersectionObserver is available
 *   - the user hasn't requested reduced motion
 *   - the element starts below the fold (so nothing on screen ever blinks out)
 * It reveals as soon as any pixel enters the viewport (threshold 0), runs once,
 * and a fallback timer reveals it if the observer never reports back.
 */
export function ScrollFadeSection({ children, className = "" }: ScrollFadeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    let reported = false;
    const reveal = () => {
      el.dataset.reveal = "shown";
    };

    el.dataset.reveal = "hidden";

    const observer = new IntersectionObserver(
      (entries) => {
        reported = true;
        if (entries.some((entry) => entry.isIntersecting)) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px 80px 0px" }
    );
    observer.observe(el);

    // Observers fire an initial callback right away; if that never happens, bail out.
    const fallback = window.setTimeout(() => {
      if (!reported) {
        reveal();
        observer.disconnect();
      }
    }, 1500);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
      reveal();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
