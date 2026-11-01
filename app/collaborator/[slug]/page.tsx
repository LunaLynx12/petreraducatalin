import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { collaborators } from "@/data/collaborators";
import { ogImages } from "@/lib/metadata";
import { JsonLd } from "@/components/seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CollaboratorPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return collaborators.map((collab) => ({ slug: collab.slug }));
}

export async function generateMetadata({
  params,
}: CollaboratorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collab = collaborators.find((c) => c.slug === slug);
  if (!collab) return {};

  return {
    title: `${collab.name} - ${collab.headline}`,
    description: collab.description,
    alternates: {
      canonical: `${siteConfig.url}/collaborator/${collab.slug}/`,
    },
    openGraph: {
      type: "profile",
      url: `${siteConfig.url}/collaborator/${collab.slug}/`,
      title: `${collab.name} - ${collab.headline}`,
      description: collab.description,
      siteName: siteConfig.name,
      images: ogImages,
    },
    twitter: {
      card: "summary",
      title: `${collab.name} - ${collab.headline}`,
      description: collab.description,
    },
  };
}

export default async function CollaboratorPage({
  params,
}: CollaboratorPageProps) {
  const { slug } = await params;
  const collab = collaborators.find((c) => c.slug === slug);
  if (!collab) notFound();

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: collab.name,
    jobTitle: collab.title,
    worksFor: { "@type": "Organization", name: collab.company },
    url: `${siteConfig.url}/collaborator/${collab.slug}/`,
    sameAs: collab.linkedin ? [collab.linkedin] : undefined,
    mainEntityOfPage: `${siteConfig.url}/collaborator/${collab.slug}/`,
    knowsAbout: collab.specialty.split(", "),
  };

  const specialties = collab.specialty.split(", ");

  return (
    <article>
      <JsonLd data={personJsonLd} />
      <div className="container max-w-4xl pb-20 pt-32 md:pb-28 md:pt-40">
        <Link
          href="/#trusted-collaborators"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back to collaborators
        </Link>

        <header className="mt-10 grid gap-8 border-b border-line pb-10 sm:grid-cols-[180px_1fr] sm:items-start sm:gap-10">
          <Image
            src={collab.image}
            alt={`${collab.name} - ${collab.headline}`}
            width={400}
            height={500}
            priority
            className="aspect-[4/5] w-40 shrink-0 border border-line object-cover grayscale-[0.3] sepia-[0.05] sm:w-full"
          />
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="font-mono text-[10px]">
                {collab.company}
              </Badge>
              <span className="border border-accent/25 bg-accent-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                Partner
              </span>
            </div>
            <h1 className="mt-5 font-serif text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.02] tracking-[-0.03em] text-ink">
              {collab.name}
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-accent">
              {collab.headline}
            </p>
          </div>
        </header>

        <div className="mt-10 space-y-5">
          {collab.bio.map((paragraph, i) => (
            <p
              key={i}
              className="max-w-[68ch] text-pretty text-base leading-relaxed text-body"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 border border-line bg-surface/70 p-6 md:p-8">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            Specialty
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {specialties.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="font-mono text-[10px]"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          {collab.linkedin ? (
            <Button asChild variant="outline">
              <a
                href={collab.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          ) : (
            <span className="inline-flex items-center gap-2 border border-line px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              {collab.contactLabel}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
