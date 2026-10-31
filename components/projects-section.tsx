import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, Lock } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-y"
    >
      <div className="container">
        <SectionHeader
          index="01"
          eyebrow="Selected work"
          id="projects-heading"
          title="Projects"
          description="Research, tooling, and real engagement work — static malware analysis, forensic tooling, and the automation behind faster assessments."
          action={
            <Link
              href="/projects/"
              className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent"
            >
              All case studies
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          }
        />

        <div className="border-t border-line">
          {projects.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={0.05 * i}
              className="border-b border-line"
            >
              <article className="grid items-center gap-8 py-10 md:grid-cols-12 md:gap-10 md:py-14">
                <div
                  className={cn(
                    "md:col-span-7",
                    i % 2 === 1 && "md:order-2"
                  )}
                >
                  <Link
                    href={`/projects/#${project.slug}`}
                    className="group block overflow-hidden bg-surface-2"
                  >
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={`/images/projects/${project.slug}.webp`}
                        alt={`${project.title} - ${project.subtitle} project by Petre Radu Cătălin`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </Link>
                </div>

                <div
                  className={cn(
                    "md:col-span-5",
                    i % 2 === 1 && "md:order-1"
                  )}
                >
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    <span className="text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-px w-8 bg-line-strong"
                    />
                    <span>
                      {project.private ? "Private engagement" : "Open source"}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-3xl leading-tight tracking-[-0.02em] text-ink md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-accent">
                    {project.subtitle}
                  </p>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-body">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="font-mono text-[10px]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-5">
                    {project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline inline-flex items-center gap-2 text-sm font-medium text-ink"
                      >
                        <Github className="h-4 w-4" aria-hidden="true" />
                        GitHub
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm text-muted">
                        <Lock className="h-4 w-4" aria-hidden="true" />
                        Private repo
                      </span>
                    )}

                    <Link
                      href={`/projects/#${project.slug}`}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-accent"
                    >
                      Case study
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
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
