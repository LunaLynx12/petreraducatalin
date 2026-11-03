import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Rss } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog - Insights from Petre Radu Cătălin",
  description: `Technical blog by Petre Radu Cătălin (Petre Radu) - penetration testing write-ups, cloud security findings, AI security evaluations, and CTF writeups.`,
  alternates: { canonical: `${siteConfig.url}/blog/` },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <article>
      <PageHero
        eyebrow="Writing"
        title={
          <>
            Insights from{" "}
            <em className="italic text-clay">Petre Radu Cătălin</em>
          </>
        }
        description="Technical write-ups on offensive security, cloud threats, and AI security — lessons from real engagements, published for the community."
        meta={
          <>
            <span>{posts.length} articles</span>
            <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
            <a
              href="/rss.xml"
              className="inline-flex items-center gap-1.5 text-accent transition-colors hover:text-ink"
            >
              <Rss className="h-3.5 w-3.5" aria-hidden="true" />
              RSS feed
            </a>
          </>
        }
      />

      <div className="container max-w-5xl pb-20 md:pb-28">
        <Reveal className="mt-12 md:mt-16">
          <div
            className="flex flex-wrap gap-2"
            aria-label="Article categories"
          >
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="font-mono text-[10px]"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 border-t border-line">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={0.04 * i}>
              <article className="group grid gap-6 border-b border-line py-8 sm:grid-cols-[220px_1fr] sm:gap-8 md:py-10">
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative aspect-[1200/630] self-start overflow-hidden border border-line bg-surface-2"
                >
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 220px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </Link>

                <div>
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden="true" className="h-px w-4 bg-line-strong" />
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="mt-2 font-serif text-2xl leading-tight tracking-[-0.02em] text-ink transition-colors group-hover:text-accent md:text-3xl">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="mt-3 max-w-[62ch] text-pretty text-sm leading-relaxed text-body md:text-base">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="ghost"
                          className="font-mono text-[10px]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group/link inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent"
                    >
                      Read article
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
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
    </article>
  );
}
