import Image from "next/image";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { Stat } from "@/components/stat";
import { bioParagraphs } from "@/data/bio";
import { stats } from "@/data/experience";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-y bg-surface/40"
    >
      <div className="container">
        <SectionHeader
          index="02"
          eyebrow="Profile"
          id="about-heading"
          title="About Petre Radu Cătălin"
          description={
            <>
              Offensive security professional and penetration tester based in
              Brașov, Romania. Known as{" "}
              <strong className="font-medium text-ink">Petre Radu</strong> to
              clients, peers, and the security community.
            </>
          }
        />

        <Reveal variant="image" className="mb-12">
          <figure>
            <div className="relative aspect-[16/8] w-full overflow-hidden border border-line bg-surface-2 md:aspect-[16/7]">
              <Image
                src="/images/Stage.webp"
                alt="Petre Radu Cătălin presenting on stage at a cybersecurity conference"
                fill
                sizes="100vw"
                className="object-cover object-right grayscale-[0.15]"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              <span>On stage · cybersecurity conference</span>
              <span>Brașov, Romania</span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <blockquote className="border-l-2 border-accent pl-6 font-serif text-2xl leading-snug tracking-[-0.01em] text-ink md:text-3xl">
                “The goal is not just to find flaws, but to explain the real
                risk and support the fix.”
              </blockquote>
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8">
                {stats.map((stat) => (
                  <Stat
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                  />
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-6">
              {bioParagraphs.map((paragraph, i) => (
                <Reveal
                  key={paragraph.heading}
                  delay={0.04 * i}
                  className="border-t border-line pt-5 first:border-t-0 first:pt-0"
                >
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    {paragraph.heading}
                  </h3>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-body">
                    {paragraph.text}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1} className="mt-8 border-t border-line pt-5">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                How I work with others
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-body">
                For larger scopes, I collaborate with a small network of vetted
                professionals across offensive security, cloud, compliance, and
                incident response. I remain the main point of contact, while
                bringing in specialists when the assessment requires deeper
                coverage.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
