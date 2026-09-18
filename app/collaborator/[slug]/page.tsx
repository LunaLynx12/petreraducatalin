import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { collaborators } from "@/data/collaborators";
import { JsonLd } from "@/components/seo";
import { Badge } from "@/components/ui/badge";

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
    <article className="section-padding">
      <JsonLd data={personJsonLd} />
      <div className="container max-w-4xl">
        <Link
          href="/#trusted-collaborators"
          className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          back_to_collaborators
        </Link>

        <header className="mb-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <Image
              src={collab.image}
              alt={`${collab.name} - ${collab.headline}`}
              width={400}
              height={500}
              priority
              className="aspect-[4/5] w-40 shrink-0 rounded-2xl border border-border object-cover sm:w-48"
            />
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge className="font-mono text-[10px]">{collab.company}</Badge>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                  Partner
                </span>
              </div>
              <h1 className="font-mono text-3xl font-bold text-foreground sm:text-5xl">
                {collab.name}
              </h1>
              <p className="mt-3 font-mono text-base text-primary sm:text-lg">
                {collab.headline}
              </p>
            </div>
          </div>
        </header>

        <div className="space-y-6">
          {collab.bio.map((paragraph, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-foreground/85"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-surface/70 p-6 md:p-8">
          <h2 className="mb-3 font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Specialty
          </h2>
          <div className="flex flex-wrap gap-2">
            {specialties.map((item) => (
              <Badge key={item} variant="outline" className="font-mono text-[10px]">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          {collab.linkedin ? (
            <a
              href={collab.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-6 py-3 font-mono text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
            >
              Connect on LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-mono text-sm text-muted">
              <Mail className="h-4 w-4" aria-hidden="true" />
              {collab.contactLabel}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}