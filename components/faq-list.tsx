import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqListProps {
  faqs: { question: string; answer: string }[];
  className?: string;
}

/**
 * Editorial FAQ list built on native <details>, so it needs no JavaScript and
 * stays readable when the accordion is never hydrated.
 */
export function FaqList({ faqs, className }: FaqListProps) {
  return (
    <div className={cn("border-t border-line", className)}>
      {faqs.map((faq) => (
        <details key={faq.question} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="font-serif text-lg leading-snug text-ink transition-colors group-hover:text-accent md:text-xl">
              {faq.question}
            </span>
            <Plus
              className="mt-1 h-4 w-4 shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <p className="max-w-[68ch] pb-6 text-sm leading-relaxed text-body">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
