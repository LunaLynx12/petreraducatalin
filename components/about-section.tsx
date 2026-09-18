import Image from "next/image";
import { BadgeCheck, Cpu, Clock, Users } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { bioParagraphs } from "@/data/bio";
import { stats } from "@/data/experience";

const statIcons = [BadgeCheck, Cpu, Clock, Users];

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-padding border-t border-border">
      <div className="container">
        <SectionHeading
          eyebrow="whoami"
          id="about-heading"
          title="About Petre Radu Cătălin"
          description={
            <>
              Offensive security professional and penetration tester based in Brașov, Romania. Known as
              <strong className="text-foreground"> Petre Radu</strong> to clients, peers, and the security community.
            </>
          }
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr]">
          <Reveal className="order-2 lg:order-1">
            <div className="neon-border overflow-hidden rounded-2xl bg-surface">
              <Image
                src="/images/Stage.webp"
                alt="Petre Radu Cătălin presenting on stage at a cybersecurity conference"
                width={1672}
                height={941}
                className="h-full w-full object-cover object-right"
              />
            </div>
          </Reveal>

          <div className="order-1 space-y-6 lg:order-2">
            {bioParagraphs.map((p, i) => (
              <Reveal
                key={p.heading}
                delay={0.05 * i}
                className="rounded-xl border border-border bg-surface/60 p-5"
              >
                <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-widest text-primary">
                  {p.heading}
                </h3>
                <p className="text-sm leading-relaxed text-muted sm:text-base">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <div className="rounded-xl border border-border bg-surface/70 p-6">
            <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-widest text-primary">
              How I work with others
            </h3>
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              For larger scopes, I collaborate with a small network of vetted professionals across offensive security,
              cloud, compliance, and incident response. I remain the main point of contact, while bringing in specialists
              when the assessment requires deeper coverage.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 rounded-xl border border-border bg-surface/70 p-5 transition-colors hover:border-primary/40"
                >
                  <Icon className="h-8 w-8 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <dd className="font-mono text-2xl font-bold text-foreground">{stat.value}</dd>
                    <dt className="text-xs text-muted">{stat.label}</dt>
                  </div>
                </div>
              );
            })}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}