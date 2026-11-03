import type { CSSProperties, ReactNode } from "react";

type RevealVariant = "up" | "mask" | "image";

interface RevealProps {
  children: ReactNode;
  /** Seconds, matching the previous framer-motion API. */
  delay?: number;
  className?: string;
  variant?: RevealVariant;
}

/**
 * Marks a block for the shared scroll reveal.
 *
 * This is a server component on purpose: it emits plain markup and a data
 * attribute, and the single `<RevealObserver />` in the root layout does the
 * observing. Previously every Reveal was its own client component, which cost
 * one hydrated component and one IntersectionObserver per block.
 *
 * Nothing is hidden by default, so content stays visible without JS. See
 * `.reveal` in globals.css.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  variant = "up",
}: RevealProps) {
  return (
    <div
      data-reveal=""
      data-variant={variant === "up" ? undefined : variant}
      className={className ? `reveal ${className}` : "reveal"}
      style={
        delay > 0
          ? ({ "--reveal-delay": `${Math.round(delay * 1000)}ms` } as CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}
