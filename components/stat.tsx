import { cn } from "@/lib/utils";

interface StatProps {
  value: string;
  label: string;
  className?: string;
}

export function Stat({ value, label, className }: StatProps) {
  return (
    <div className={cn("flex flex-col-reverse", className)}>
      <dt className="mt-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        {label}
      </dt>
      <dd className="block font-serif text-4xl leading-none tracking-tight text-ink md:text-5xl">
        {value}
      </dd>
    </div>
  );
}
