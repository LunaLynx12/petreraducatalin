"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealVariant = "up" | "mask" | "image";

interface RevealProps {
  children: ReactNode;
  /** Seconds, matching the previous framer-motion API. */
  delay?: number;
  className?: string;
  variant?: RevealVariant;
}

/**
 * Scroll reveal driven by a CSS transition plus one IntersectionObserver.
 *
 * Elements are only hidden once they are known to start below the fold, so
 * content is always visible without JS, while the bundle loads, or if the
 * observer never fires. See `.reveal` in globals.css.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already on screen or scrolled past: leave it visible, skip the animation.
    const { top } = node.getBoundingClientRect();
    if (top < (window.innerHeight || 0)) return;

    node.classList.add("reveal-armed");

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        node.classList.add("is-visible");
        observer.disconnect();
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-variant={variant === "up" ? undefined : variant}
      className={className ? `reveal ${className}` : "reveal"}
      style={
        delay > 0
          ? ({ "--reveal-delay": `${Math.round(delay * 1000)}ms` } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}
