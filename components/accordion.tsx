import { Minus, Plus } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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

/**
 * Disclosure list built on native `<details>/<summary>`.
 *
 * Native elements mean the content is server-rendered, keyboard accessible and
 * works without JavaScript, and nothing has to hydrate: this was previously the
 * largest client component on the home page. The `name` attribute gives
 * browsers that support it the previous one-open-at-a-time behaviour, while
 * others simply allow several panels open at once.
 *
 * The open/close icon is driven by `group-open:` variants, so there is no state
 * to track. See `.accordion-panel` in globals.css for the entrance animation.
 */
export function Accordion({ items, idPrefix = "accordion" }: AccordionProps) {
  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const Icon = item.icon;

        return (
          <details
            key={item.title}
            name={idPrefix}
            open={i === 0}
            className="group border-b border-line"
          >
            <summary className="grid cursor-pointer list-none grid-cols-[2rem_1fr_2rem] items-start gap-4 py-6 marker:hidden md:grid-cols-[3rem_1fr_2.5rem] md:gap-6 md:py-8 [&::-webkit-details-marker]:hidden">
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
                className="mt-1 flex h-8 w-8 items-center justify-center justify-self-end rounded-full border border-line-strong text-muted transition-colors duration-300 group-hover:border-accent group-hover:text-accent group-open:border-accent group-open:bg-accent group-open:text-accent-foreground"
              >
                <Plus className="h-4 w-4 group-open:hidden" />
                <Minus className="hidden h-4 w-4 group-open:block" />
              </span>
            </summary>

            <div className="accordion-panel pl-12 md:pl-[4.5rem]">
              <ul className="grid gap-x-8 gap-y-2.5 pb-7 md:grid-cols-2 md:pb-9">
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
          </details>
        );
      })}
    </div>
  );
}
