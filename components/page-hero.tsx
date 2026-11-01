import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  breadcrumbs?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  meta,
  breadcrumbs,
  children,
  className,
}: PageHeroProps) {
  return (
    <header className={cn("border-b border-line", className)}>
      <div className="container pb-16 pt-32 md:pb-20 md:pt-40">
        {breadcrumbs}
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-[20ch] text-balance font-serif text-[clamp(2.75rem,6vw,5rem)] leading-[0.98] tracking-[-0.03em] text-ink">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-[58ch] text-pretty text-lg leading-relaxed text-body">
            {description}
          </p>
        ) : null}
        {meta ? (
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            {meta}
          </div>
        ) : null}
        {children}
      </div>
    </header>
  );
}
