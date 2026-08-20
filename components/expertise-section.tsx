import { Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { expertiseItems } from "@/data/expertise";

export function ExpertiseSection() {
  return (
    <section id="expertise" aria-labelledby="expertise-heading" className="section-padding border-t border-border">
      <div className="container">
        <SectionHeading
          eyebrow="capabilities"
          id="expertise-heading"
          title="Expertise"
          description={
            <>
              Four interlocking disciplines. My offensive work is grounded in an
              understanding of defense - every assessment I run, from web
              penetration testing to cloud security review, is built to produce
              actionable defense.
            </>
          }
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {expertiseItems.map((item, i) => (
            <Reveal key={item.title} delay={0.05 * i} className="h-full">
              <article className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-mono text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <ul className="mt-auto space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-foreground/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}