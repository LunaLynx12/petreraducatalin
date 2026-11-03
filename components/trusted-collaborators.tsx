import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { collaborators } from "@/data/collaborators";

export function TrustedCollaboratorsSection() {
  return (
    <section
      id="trusted-collaborators"
      aria-labelledby="trusted-collaborators-heading"
      className="section-y"
    >
      <div className="container">
        <SectionHeader
          index="07"
          eyebrow="Partners"
          id="trusted-collaborators-heading"
          title="Trusted Collaborators"
          description="For larger scopes, I bring in a small network of vetted specialists — and stay accountable as the main point of contact."
        />

        <div className="border-t border-line">
          {collaborators.map((collab, index) => (
            <Reveal key={collab.name} delay={0.05 * index}>
              <article className="grid gap-8 border-b border-line py-10 md:grid-cols-12 md:gap-10 md:py-12">
                <div className="md:col-span-4">
                  <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden border border-line bg-surface-2">
                    <Image
                      src={collab.image}
                      alt={`${collab.name} - ${collab.title}`}
                      fill
                      sizes="(max-width: 768px) 80vw, 280px"
                      className="object-cover grayscale-[0.15]"
                    />
                  </div>
                </div>

                <div className="md:col-span-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    {collab.company}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl leading-tight text-ink md:text-4xl">
                    {collab.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-body">
                    {collab.title}
                  </p>

                  <dl className="mt-7 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                        Specialty
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-body">
                        {collab.specialty}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                        Role
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-body">
                        {collab.description}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-7 flex flex-wrap items-center gap-6">
                    <Link
                      href={`/collaborator/${collab.slug}`}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-accent"
                    >
                      View full profile
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>

                    {collab.linkedin ? (
                      <a
                        href={collab.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-sm text-muted transition-colors hover:text-ink"
                      >
                        LinkedIn
                      </a>
                    ) : (
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                        Contact available on request
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
