import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";
import { certifications, ctfAchievements } from "@/data/certifications";
import { toolsArsenal } from "@/data/tools";

const credentialTicker = certifications.map(
  (cert) => `${cert.name} — ${cert.issuer}`
);

export function CredentialsSection() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="section-y"
    >
      <div className="container">
        <SectionHeader
          index="05"
          eyebrow="Credentials"
          id="certifications-heading"
          title="Certifications & Achievements"
          description="Focused training, hands-on practice, and competitive security exercises that keep the work grounded in current technique."
        />

        <Reveal className="mb-12">
          <Marquee
            items={credentialTicker}
            speed="110s"
            label="Certification highlights"
          />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              Selected certifications
            </h3>
            <ul className="mt-5 border-t border-line">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex flex-col gap-1 border-b border-line py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="font-serif text-xl leading-snug text-ink">
                    {cert.name}
                  </span>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-muted sm:text-right">
                    {cert.issuer}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              CTF achievements
            </h3>
            <ul className="mt-5 border-t border-line">
              {ctfAchievements.map((achievement) => (
                <li
                  key={achievement.event}
                  className="border-b border-line py-4"
                >
                  <p className="font-serif text-xl leading-snug text-ink">
                    {achievement.event}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                    {achievement.result}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Reveal className="mt-14">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              Daily stack
            </h3>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              Offensive · cloud · defensive
            </p>
          </div>

          <div className="mt-5 grid grid-cols-2 border-l border-t border-line sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {toolsArsenal.map((tool, i) => (
              <div
                key={tool}
                className="group border-b border-r border-line px-4 py-4 transition-colors hover:bg-surface-2"
              >
                <span className="font-mono text-[9px] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 font-mono text-xs text-ink transition-colors group-hover:text-accent">
                  {tool}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
