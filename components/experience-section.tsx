import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { experienceItems, educationItems } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-y bg-surface/40"
    >
      <div className="container">
        <SectionHeader
          index="04"
          eyebrow="History"
          id="experience-heading"
          title="Experience"
          description="Penetration testing, bug bounty research, and hands-on security work shaped by real findings and practical remediation."
        />

        <Reveal>
          <div className="mb-10 border border-line bg-surface p-5 text-sm leading-relaxed text-body">
            <strong className="font-medium text-ink">Engagement model:</strong>{" "}
            for broader scopes, I coordinate complementary work with trusted
            specialists in cloud, compliance, and incident response. I remain
            the primary point of contact and lead the assessment from scoping
            through reporting and remediation validation.
          </div>
        </Reveal>

        <div className="border-t border-line">
          {experienceItems.map((item, i) => (
            <Reveal key={`${item.company}-${item.role}`} delay={0.04 * i}>
              <article className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <div className="md:col-span-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {item.period}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {item.location}
                  </p>
                </div>

                <div className="md:col-span-9">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-serif text-2xl leading-tight text-ink md:text-3xl">
                      {item.company}
                    </h3>
                    <span className="rounded-full border border-line px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                      {item.type}
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-medium text-accent">
                    {item.role}
                  </p>

                  <ul className="mt-4 grid gap-x-8 gap-y-2 md:grid-cols-2">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-body"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-px w-3 shrink-0 bg-accent"
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            Education
          </h3>

          <div className="mt-5 border-t border-line">
            {educationItems.map((item, i) => (
              <div
                key={`${item.institution}-${item.degree}`}
                className="grid gap-3 border-b border-line py-6 md:grid-cols-12 md:gap-8"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted md:col-span-3">
                  {item.period}
                </p>
                <div className="md:col-span-9">
                  <h4 className="font-serif text-xl text-ink">
                    {item.degree}
                  </h4>
                  <p className="mt-1 text-sm text-accent">{item.institution}</p>
                  {i === 0 ? (
                    <ul className="mt-3 grid gap-x-8 gap-y-1.5 md:grid-cols-2">
                      {item.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-body"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-px w-3 shrink-0 bg-line-strong"
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
