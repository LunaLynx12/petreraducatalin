import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, Lock, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-padding border-t border-border">
      <div className="container">
        <SectionHeading
          eyebrow="featured_work"
          id="projects-heading"
          title="Projects"
          description="Selected projects from research, development, and real engagements - static malware analysis, forensic tooling, and the automation that powers my assessments."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={0.06 * i} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
                  <Image
                    src={`/images/projects/${project.slug}.svg`}
                    alt={`${project.title} - ${project.subtitle} project by Petre Radu Cătălin`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {project.private ? (
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-md border border-accent/40 bg-accent/15 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                      <Lock className="h-3 w-3" aria-hidden="true" />
                      Private
                    </span>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-mono text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-secondary">{project.subtitle}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="font-mono text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
                    {project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-primary transition-opacity hover:opacity-80"
                      >
                        <Github className="h-4 w-4" aria-hidden="true" />
                        GitHub
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                        <Lock className="h-4 w-4" aria-hidden="true" />
                        Private repo
                      </span>
                    )}
                    <Link
                      href={`/projects#${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm text-secondary transition-opacity hover:opacity-80"
                    >
                      Case study <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md border border-secondary/40 bg-secondary/10 px-6 py-3 font-mono text-sm text-secondary transition-all hover:bg-secondary hover:text-secondary-foreground hover:shadow-glow-cyan"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Explore All Projects
          </Link>
        </Reveal>
      </div>
    </section>
  );
}