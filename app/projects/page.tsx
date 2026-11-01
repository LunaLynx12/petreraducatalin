import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Github, Lock } from "lucide-react";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    <article>
      <JsonLd data={projectJsonLd} />
      <PageHero
        eyebrow="Selected work"
        title={
          <>
            Projects &amp; <em className="italic text-clay">Case Studies</em>
          </>
        }
        description="Deep-dives into the projects of Petre Radu Cătălin — tools for malware analysis, forensic research, and the automation that makes penetration testing at NTT DATA faster and more repeatable."
        meta={
          <>
            <span>{projects.length} projects</span>
            <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
            <span>Open source &amp; private engagements</span>
          </>
        }
      />

      <div className="container max-w-6xl pb-20 md:pb-28">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={0.05 * i}>
            <section
              id={project.slug}
              aria-labelledby={`${project.slug}-title`}
              className="scroll-mt-28 border-b border-line py-12 first:border-t md:py-16"
            >
              <div className="grid items-start gap-8 md:grid-cols-12 md:gap-10">
                <div
                  className={cn(
                    "md:col-span-6",
                    i % 2 === 1 && "md:order-2"
                  )}
                >
                  <div className="overflow-hidden border border-line bg-surface-2">
                    <div className="relative aspect-[16/10] w-full">
                      {/* Static export, so next/image cannot generate a srcset.
                          The two hand-built variants are smaller than the
                          framework's default single file. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/images/projects/${project.slug}-800.webp`}
                        srcSet={`/images/projects/${project.slug}-800.webp 800w, /images/projects/${project.slug}.webp 1200w`}
                        sizes="(max-width: 1024px) 100vw, 640px"
                        alt={`${project.title} - ${project.subtitle} case study by Petre Radu Cătălin`}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={cn(
                    "md:col-span-6",
                    i % 2 === 1 && "md:order-1"
                  )}
                >
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    <span className="text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
                    <span className="inline-flex items-center gap-1.5">
                      {project.private ? (
                        <>
                          <Lock className="h-3 w-3" aria-hidden="true" />
                          Private engagement
                        </>
                      ) : (
                        "Open source"
                      )}
                    </span>
                  </div>

                  <h2
                    id={`${project.slug}-title`}
                    className="mt-4 font-serif text-3xl leading-tight tracking-[-0.02em] text-ink md:text-4xl"
                  >
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-accent">
                    {project.subtitle}
                  </p>

                  <p className="mt-5 max-w-[62ch] text-pretty text-base leading-relaxed text-body">
                    {project.description}
                  </p>

                  <h3 className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    Highlights
                  </h3>
                  <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm leading-relaxed text-body"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          aria-hidden="true"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
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

                  <div className="mt-7 flex flex-wrap items-center gap-6">
                    {project.repo ? (
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github aria-hidden="true" />
                          View on GitHub
                        </a>
                      </Button>
                    ) : (
                      <span className="inline-flex items-center gap-2 border border-line px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                        <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                        Internal tooling
                      </span>
                    )}
                    <Link
                      href="/#contact"
                      className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent"
                    >
                      Request a walkthrough
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>
        ))}
      </div>
    </article>
  );
}
