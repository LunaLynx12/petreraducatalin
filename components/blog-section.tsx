import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export function BlogSection() {
  const posts = getAllPosts().slice(0, 3);
  const [featured, ...rest] = posts;

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="section-y bg-surface/40"
    >
      <div className="container">
        <SectionHeader
          index="08"
          eyebrow="Writing"
          id="blog-heading"
          title="Insights from Petre Radu Cătălin"
          description="Technical write-ups on offensive security, cloud threats, and AI security — lessons from real engagements, published for the community."
          action={
            <Link
              href="/blog/"
              className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent"
            >
              All articles
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          }
        />

        {featured ? (
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-7">
              <article className="group">
                <Link
                  href={`/blog/${featured.slug}`}
                  className="block overflow-hidden bg-surface-2"
                >
                  <div className="relative aspect-[1200/630] w-full">
                    <Image
                      src={featured.cover}
                      alt={featured.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>

                <div className="mt-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  <time dateTime={featured.date}>
                    {formatDate(featured.date)}
                  </time>
                  <span aria-hidden="true" className="h-px w-4 bg-line-strong" />
                  <span>{featured.readTime}</span>
                </div>

                <h3 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.02em] text-ink md:text-4xl">
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="transition-colors hover:text-accent"
                  >
                    {featured.title}
                  </Link>
                </h3>
                <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-body">
                  {featured.excerpt}
                </p>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group/link mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent"
                >
                  Read article
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </article>
            </Reveal>

            <div className="lg:col-span-5">
              <div className="border-t border-line">
                {rest.map((post, i) => (
                  <Reveal key={post.slug} delay={0.05 * i}>
                    <article className="group grid grid-cols-[120px_1fr] gap-4 border-b border-line py-5 sm:grid-cols-[150px_1fr]">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="relative aspect-[1200/630] self-start overflow-hidden border border-line bg-canvas"
                      >
                        <Image
                          src={post.cover}
                          alt={post.title}
                          fill
                          sizes="150px"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                      </Link>

                      <div>
                        <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                          {formatDate(post.date)} · {post.readTime}
                        </div>
                        <h3 className="mt-1.5 font-serif text-xl leading-snug text-ink">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="transition-colors hover:text-accent"
                          >
                            {post.title}
                          </Link>
                        </h3>
                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-body">
                          {post.excerpt}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
