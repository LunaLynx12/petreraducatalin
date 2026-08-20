import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Clock, ArrowRight, Rss } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { Reveal } from "@/components/reveal";
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
    <article className="section-padding">
      <div className="container max-w-5xl">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="font-mono text-3xl font-bold text-foreground sm:text-5xl">
                Insights from <span className="text-gradient-green">Petre Radu Cătălin</span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
                Technical write-ups on offensive security, cloud threats, and AI
                security.
              </p>
            </div>
            <a
              href="/rss.xml"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Rss className="h-4 w-4" aria-hidden="true" />
              RSS Feed
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mb-12 flex flex-wrap gap-2" aria-label="Article categories">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="font-mono text-[10px]">
                {tag}
              </Badge>
            ))}
          </div>
        </Reveal>

        <div className="space-y-6">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={0.04 * i}>
              <article className="group rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow md:p-8">
                <div className="mb-3 flex flex-wrap items-center gap-4 font-mono text-xs text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="font-mono text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-primary md:text-2xl">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="ghost" className="font-mono text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-sm text-primary transition-opacity hover:opacity-80"
                  >
                    Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}