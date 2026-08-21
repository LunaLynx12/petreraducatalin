import { Award, Medal } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { certifications, ctfAchievements } from "@/data/certifications";

export function CertificationsSection() {
  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="section-padding border-t border-border overflow-hidden">
      <div className="container">
        <SectionHeading
          eyebrow="credentials"
          id="certifications-heading"
          title="Certifications & Achievements"
          description="100+ certifications earned across security, cloud, and AI disciplines - backed by 4+ years of real-world penetration testing and Red Team experience."
        />

        <Reveal>
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <span className="rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-sm font-bold text-primary shadow-glow-sm">
              100+ Certifications Earned
            </span>
            <p className="text-sm text-muted">
              Curated highlights below - full list available on request.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div
          className="relative mb-12 overflow-hidden border-y border-border bg-surface/40 py-4"
          aria-label="Certification highlights"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused] group-hover:[animation-play-state:paused]">
            {[...certifications, ...certifications].map((cert, i) => (
              <div
                key={`${cert.name}-${i}`}
                aria-hidden={i >= certifications.length}
                className="flex min-w-[280px] items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3"
              >
                <Award className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-foreground">{cert.name}</p>
                  <p className="text-xs text-muted">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="container">
        <Reveal>
          <div className="neon-border rounded-2xl bg-surface/70 p-6 md:p-8">
            <h3 className="mb-1 flex items-center gap-2 font-mono text-lg font-semibold text-primary">
              <Medal className="h-5 w-5" aria-hidden="true" />
              CTF Achievements
            </h3>
            <p className="mb-6 text-sm text-muted">
              Offensive security is a competitive sport. These results are how I train between engagements.
            </p>
            <ul className="grid gap-4 md:grid-cols-3">
              {ctfAchievements.map((achievement) => (
                <li
                  key={achievement.event}
                  className="rounded-lg border border-border bg-surface p-4 transition-colors hover:border-secondary/40"
                >
                  <p className="font-mono text-sm font-semibold text-secondary">
                    {achievement.event}
                  </p>
                  <p className="mt-1 text-sm text-foreground">{achievement.result}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}