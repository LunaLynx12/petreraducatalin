import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  className?: string;
  tone?: "light" | "dark";
  action?: ReactNode;
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  id,
  className,
  tone = "light",
  action,
}: SectionHeaderProps) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "mb-12 border-t pt-6 md:mb-16",
        dark ? "border-night-line" : "border-line-strong",
        className
      )}
    >
      <div className="grid gap-6 md:grid-cols-12 md:gap-8">
        <div className="flex items-baseline gap-3 md:col-span-2 md:block">
          <span
            className={cn(
              "font-mono text-xs",
              dark ? "text-accent-light" : "text-accent"
            )}
          >
            {index}
          </span>
          <span
            className={cn(
              "font-mono text-[10px] uppercase tracking-[0.2em] md:mt-2 md:block",
              dark ? "text-night-muted" : "text-muted"
            )}
          >
            {eyebrow}
          </span>
        </div>

        <div className="md:col-span-7">
          <h2
            id={id}
            className={cn(
              "max-w-[20ch] text-balance font-serif text-[clamp(2.25rem,4.4vw,3.75rem)] leading-[1.02] tracking-[-0.02em]",
              dark ? "text-night-text" : "text-ink"
            )}
          >
            {title}
          </h2>
        </div>

        <div className="flex flex-col justify-end md:col-span-3">
          {description ? (
            <p
              className={cn(
                "max-w-[42ch] text-pretty text-sm leading-relaxed",
                dark ? "text-night-muted" : "text-body"
              )}
            >
              {description}
            </p>
          ) : null}
          {action ? <div className="mt-5">{action}</div> : null}
        </div>
      </div>
    </div>
  );
}
