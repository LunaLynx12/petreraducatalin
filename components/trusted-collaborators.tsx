import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { collaborators } from "@/data/collaborators";

export function TrustedCollaboratorsSection() {
  return (
    <section id="trusted-collaborators" aria-labelledby="trusted-collaborators-heading" className="section-padding border-t border-border">
      <div className="container">
        <SectionHeading
          eyebrow="partners"
          id="trusted-collaborators-heading"
          title="Trusted Collaborators"
          description="For larger scopes, I work with a small network of vetted professionals to bring in deeper coverage when an engagement needs additional specialist support."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {collaborators.map((collab, index) => (
            <Reveal key={collab.name} delay={0.05 * index}>
              <article className="h-full rounded-xl border border-border bg-surface/70 p-5 transition-colors hover:border-primary/40">
                <div className="mb-3 flex items-center gap-3">
                  <Image
                    src={collab.image}
                    alt={`${collab.name} - ${collab.title}`}
                    width={200}
                    height={250}
                    className="aspect-[4/5] w-16 shrink-0 rounded-lg border border-border object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-mono text-base font-semibold text-foreground">{collab.name}</h3>
                        <p className="mt-1 truncate text-sm text-primary">{collab.company}</p>
                      </div>
                      <span className="shrink-0 rounded-full border border-primary/30 bg-primary/10 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                        Partner
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mb-3 text-sm text-muted">{collab.title}</p>

                <div className="space-y-3 text-sm text-muted">
                  <p>
                    <span className="font-medium text-foreground">Specialty:</span> {collab.specialty}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Role:</span> {collab.description}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Contact:</span> {collab.contactLabel}
                  </p>
                </div>

                {collab.linkedin ? (
                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/collaborator/${collab.slug}`}
                      className="inline-flex items-center gap-1.5 font-mono text-sm text-primary transition-opacity hover:opacity-80"
                    >
                      View Full Profile <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                    <a
                      href={collab.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-secondary"
                    >
                      LinkedIn <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                ) : (
                  <div className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-muted">
                    <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                    Available on request
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
