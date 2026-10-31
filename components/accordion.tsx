"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  title: string;
  description: string;
  points: string[];
  icon?: LucideIcon;
}

interface AccordionProps {
  items: AccordionItemData[];
  idPrefix?: string;
}

export function Accordion({ items, idPrefix = "accordion" }: AccordionProps) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const open = active === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const buttonId = `${idPrefix}-button-${i}`;
        const Icon = item.icon;

        return (
          <div key={item.title} className="border-b border-line">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setActive(open ? null : i)}
                className="group grid w-full grid-cols-[2rem_1fr_2rem] items-start gap-4 py-6 text-left md:grid-cols-[3rem_1fr_2.5rem] md:gap-6 md:py-8"
              >
                <span className="pt-2 font-mono text-[11px] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="block">
                  <span className="flex items-center gap-3">
                    {Icon ? (
                      <Icon
                        className="h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                    ) : null}
                    <span className="font-serif text-2xl leading-tight text-ink transition-colors duration-300 group-hover:text-accent md:text-3xl">
                      {item.title}
                    </span>
                  </span>
                  <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-body">
                    {item.description}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-1 flex h-8 w-8 items-center justify-center justify-self-end rounded-full border transition-colors duration-300",
                    open
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-line-strong text-muted group-hover:border-accent group-hover:text-accent"
                  )}
                >
                  {open ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-all duration-300 ease-out",
                open
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <ul className="grid gap-x-8 gap-y-2.5 pb-7 pl-12 md:grid-cols-2 md:pb-9 md:pl-[4.5rem]">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-body"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-px w-3 shrink-0 bg-accent"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
