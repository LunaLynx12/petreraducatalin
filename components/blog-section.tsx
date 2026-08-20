import Link from "next/link";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export function BlogSection() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="blog" aria-labelledby="blog-heading" className="section-padding border-t border-border">
      <div className="container">
        <SectionHeading
          eyebrow="write_ups"
          id="blog-heading"
          title="Insights from Petre Radu Cătălin"
          description="Technical write-ups on offensive security, cloud threats, and AI security - the lessons from real engagements, published to help the community."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={0.06 * i} className="h-full">
              <article className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                <div className="mb-3 flex items-center gap-4 font-mono text-xs text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-mono text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="ghost" className="font-mono text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 border-t border-border pt-4 font-mono text-sm text-primary transition-opacity hover:opacity-80"
                >
                  Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-6 py-3 font-mono text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
          >
            View All Articles <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}