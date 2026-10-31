import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
  speed?: string;
  tone?: "light" | "dark";
  label?: string;
}

export function Marquee({
  items,
  className,
  speed = "80s",
  tone = "light",
  label,
}: MarqueeProps) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "group relative overflow-hidden border-y [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]",
        dark ? "border-night-line" : "border-line",
        className
      )}
      aria-label={label}
    >
      <div
        className="flex w-max animate-marquee items-center py-4"
        style={{ animationDuration: speed }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className={cn(
              "flex items-center whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em]",
              dark ? "text-night-muted" : "text-muted"
            )}
          >
            {item}
            <span
              aria-hidden="true"
              className={cn(
                "mx-8 inline-block h-1 w-1 rounded-full",
                dark ? "bg-night-muted/50" : "bg-accent/45"
              )}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
