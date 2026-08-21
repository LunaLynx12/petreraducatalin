import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink, Check, Lock, TerminalSquare } from "lucide-react";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description: `Projects and case studies by Petre Radu Cătălin - MalwarePeek static malware analysis, Authenticode signature research, and pentest automation tooling for NTT DATA engagements.`,
  alternates: { canonical: `${siteConfig.url}/projects/` },
};

const projectJsonLd = projects.map((project) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode" as const,
  name: project.title,
  description: project.description,
  author: {
    "@type": "Person",
    name: "Petre Radu Cătălin",
    alternateName: "Petre Radu",
    url: siteConfig.url,
  },
  codeRepository: project.repo,
  programmingLanguage: ["Python", "Bash"],
  keywords: project.tags.join(", "),
  url: `${siteConfig.url}/projects/#${project.slug}`,
  datePublished: "2026",
}));

export default function ProjectsPage() {
  return (
    <article className="section-padding">
      <JsonLd data={projectJsonLd} />
      <div className="container max-w-5xl">
        <Reveal>
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            back_to_home
          </Link>
          <h1 className="font-mono text-3xl font-bold text-foreground sm:text-5xl">
            Projects &amp; <span className="text-gradient-green">Case Studies</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Deep-dives into the projects of Petre Radu Cătălin - tools for
            malware analysis, forensic research, and the automation that makes
            penetration testing at NTT DATA faster and more repeatable.
          </p>
        </Reveal>

        <div className="mt-14 space-y-14">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={0.05 * i}>
              <section
                id={project.slug}
                aria-labelledby={`${project.slug}-title`}
                className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-surface"
              >
                <div className="relative aspect-[16/8] border-b border-border bg-black/20">
                  <Image
                    src={`/images/projects/${project.slug}.webp`}
                    alt={`${project.title} - ${project.subtitle} case study by Petre Radu Cătălin`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 896px"
                    className="object-cover"
                  />
                  {project.private ? (
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-md border border-accent/40 bg-accent/15 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-accent">
                      <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                      Repo private - capabilities only
                    </span>
                  ) : null}
                </div>

                <div className="p-6 md:p-10">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h2
                        id={`${project.slug}-title`}
                        className="font-mono text-2xl font-bold text-foreground"
                      >
                        {project.title}
                      </h2>
                      <p className="mt-1 text-sm font-medium text-secondary">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} className="font-mono text-[10px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="mt-6 text-base leading-relaxed text-foreground/85">
                    {project.description}
                  </p>

                  <h3 className="mb-3 mt-8 flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-widest text-primary">
                    <TerminalSquare className="h-4 w-4" aria-hidden="true" />
                    Highlights
                  </h3>
                  <ul className="grid gap-3 md:grid-cols-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 rounded-lg border border-border bg-background/40 p-3.5 text-sm text-foreground/85"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    {project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-5 py-2.5 font-mono text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
                      >
                        <Github className="h-4 w-4" aria-hidden="true" />
                        View on GitHub
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm text-muted">
                        <Lock className="h-4 w-4" aria-hidden="true" />
                        Internal tooling
                      </span>
                    )}
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 font-mono text-sm text-secondary transition-opacity hover:opacity-80"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      Request a walkthrough
                    </Link>
                  </div>
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}