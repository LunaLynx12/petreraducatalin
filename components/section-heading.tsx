import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  id?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 max-w-2xl ${className}`} id={id}>
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-secondary">
        {`// ${eyebrow}`}
      </p>
      <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}