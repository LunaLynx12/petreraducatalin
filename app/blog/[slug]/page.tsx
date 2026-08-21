import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getAllPosts, getPost } from "@/lib/posts";
import { JsonLd } from "@/components/seo";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}/`,
    },
    openGraph: {
      type: "article",
      url: `${siteConfig.url}/blog/${post.slug}/`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      tags: post.tags,
      authors: [siteConfig.name],
      images: [
        {
          url: `${siteConfig.url}${post.cover}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Petre Radu Cătălin",
      alternateName: "Petre Radu",
      url: siteConfig.url,
      jobTitle: "Penetration Tester",
      worksFor: { "@type": "Organization", name: "NTT DATA" },
    },
    publisher: {
      "@type": "Organization",
      name: "Petre Radu Cătălin",
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/favicon.png` },
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}/`,
    image: `${siteConfig.url}${post.cover}`,
    keywords: post.tags.join(", "),
  };

  return (
    <article className="section-padding">
      <JsonLd data={articleJsonLd} />
      <div className="container max-w-3xl">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          all_articles
        </Link>

        <header className="mb-10">
          <h1 className="font-mono text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 font-mono text-xs text-muted">
            <span>
              by <span className="text-primary">Petre Radu Cătălin</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {post.readTime}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} className="font-mono text-[10px]">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div
          className="prose prose-invert prose-sm sm:prose-base max-w-none prose-headings:font-mono prose-headings:text-primary prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:text-primary prose-pre:border prose-pre:border-border prose-pre:bg-[#0d0d14]"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="mt-12 rounded-xl border border-border bg-surface/70 p-6">
          <p className="font-mono text-sm font-semibold text-primary">
            About the author
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            <strong className="text-foreground">Petre Radu Cătălin</strong> is a
            Penetration Tester at NTT DATA and offensive security professional
            based in Brașov, Romania. He specializes in Active Directory
            exploitation, cloud security, and AI security evaluations.{" "}
            <Link
              href="/#contact"
              className="text-secondary underline underline-offset-2"
            >
              Work with him
            </Link>
            .
          </p>
        </div>
      </div>
    </article>
  );
}