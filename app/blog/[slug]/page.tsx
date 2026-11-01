import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
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
    <article>
      <JsonLd data={articleJsonLd} />
      <div className="container max-w-3xl pb-20 pt-32 md:pb-28 md:pt-40">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          All articles
        </Link>

        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true" className="h-px w-4 bg-line-strong" />
            <span>{post.readTime}</span>
          </div>

          <h1 className="mt-4 max-w-[26ch] text-balance font-serif text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.03] tracking-[-0.03em] text-ink">
            {post.title}
          </h1>

          <p className="mt-5 max-w-[60ch] text-pretty text-lg leading-relaxed text-body">
            {post.excerpt}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              By <span className="text-accent">Petre Radu Cătălin</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="font-mono text-[10px]"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </header>

        <div
          className="prose prose-sm mt-12 max-w-none sm:prose-base prose-headings:font-serif prose-headings:font-normal prose-headings:tracking-[-0.01em] prose-headings:text-ink prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-ink prose-code:text-ink prose-code:before:content-none prose-code:after:content-none prose-pre:border prose-pre:border-line prose-pre:bg-night prose-pre:text-night-text prose-img:border prose-img:border-line"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="mt-14 border-t border-line-strong pt-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            About the author
          </p>
          <p className="mt-3 max-w-[68ch] text-sm leading-relaxed text-body">
            <strong className="font-medium text-ink">
              Petre Radu Cătălin
            </strong>{" "}
            is a penetration tester in Brașov, Romania, and a Penetration Tester
            at NTT DATA. He specializes in web and Active Directory assessments,
            cloud security, and AI security evaluations.{" "}
            <Link
              href="/#contact"
              className="link-underline text-accent"
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
