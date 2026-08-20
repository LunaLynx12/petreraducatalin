import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { experienceItems, educationItems } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="section-padding border-t border-border">
      <div className="container">
        <SectionHeading
          eyebrow="history"
          id="experience-heading"
          title="Experience"
          description="Enterprise penetration testing, bug bounty hunting, and a Master's in Cyber Security - a career built on finding real vulnerabilities and fixing them for good."
        />

        <div className="relative mx-auto max-w-3xl">
          <div aria-hidden="true" className="absolute left-[22px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-secondary/30 to-transparent md:left-[26px]" />

          <ol className="space-y-8">
            {experienceItems.map((item, i) => (
              <Reveal key={`${item.company}-${item.role}`} delay={0.05 * i}>
                <li className="relative flex gap-5">
                  <span className="relative z-10 mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-surface font-mono text-sm font-bold text-primary shadow-glow-sm">
                    {item.company
                      .split(" ")
                      .map((word) => word[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()}
                  </span>
                  <div className="flex-1 rounded-xl border border-border bg-surface/60 p-5 transition-colors hover:border-primary/30">
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-mono text-base font-semibold text-foreground">
                        {item.company}
                      </h3>
                      <Badge variant={item.type === "Enterprise" ? "default" : "secondary"}>
                        {item.type}
                      </Badge>
                    </div>
                    <p className="mb-1 text-sm font-medium text-primary">{item.role}</p>
                    <p className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted">
                      <span>{item.period}</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" aria-hidden="true" />
                        {item.location}
                      </span>
                    </p>
                    <ul className="space-y-1.5">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-muted">
                          <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-secondary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}

            <Reveal delay={0.1}>
              <li className="relative flex gap-5">
                <span className="relative z-10 mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-secondary/40 bg-surface text-secondary">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="flex-1 rounded-xl border border-border bg-surface/60 p-5">
                  <h3 className="font-mono text-base font-semibold text-foreground">
                    {educationItems[0].institution}
                  </h3>
                  <p className="mb-1 text-sm font-medium text-secondary">
                    {educationItems[0].degree}
                  </p>
                  <p className="mb-3 font-mono text-xs text-muted">
                    {educationItems[0].period}
                  </p>
                  <ul className="space-y-1.5">
                    {educationItems[0].details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-muted">
                        <Briefcase className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary" aria-hidden="true" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          </ol>
        </div>
      </div>
    </section>
  );
}