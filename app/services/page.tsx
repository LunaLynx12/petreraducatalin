import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig, SERVICE_LINKS } from "@/data/site";
import { keywordLandings } from "@/data/seo-pages";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: { absolute: "Penetration Testing Services | Petre Radu Cătălin" },
  description:
    "Penetration testing services by Petre Radu Cătălin: pentester Brașov, penetration tester Romania, ethical hacking, and Romanian-language security assessments.",
  alternates: { canonical: `${siteConfig.url}/services/` },
};

const hubs = [
  ...SERVICE_LINKS.map((l) => ({
    href: l.href,
    title: l.label,
    text: "Service landing optimized for local hiring intent.",
  })),
  ...keywordLandings.map((p) => ({
    href: p.path,
    title: p.title,
    text: p.metaDescription,
  })),
];

const uniqueHubs = Array.from(
  new Map(hubs.map((h) => [h.href, h])).values()
);

export default function ServicesHubPage() {
  return (
    <article className="section-padding">
      <div className="container max-w-4xl">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
            services hub
          </p>
          <h1 className="font-mono text-3xl font-bold text-foreground sm:text-5xl">
            Penetration testing{" "}
            <span className="text-gradient-green">services</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
            Canonical service and keyword pages for Petre Radu Cătălin, the
            penetration tester based in Brașov, Romania. Use these pages when
            you need a named expert. For company platform services, see{" "}
            <a
              href="https://kiwidefence.com"
              className="text-secondary underline underline-offset-2"
              rel="noopener noreferrer"
            >
              Kiwi Defence
            </a>
            .
          </p>
        </Reveal>

        <div className="mt-12 space-y-4">
          {uniqueHubs.map((item, i) => (
            <Reveal key={item.href} delay={0.03 * i}>
              <Link
                href={item.href}
                className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-surface/60 p-5 transition-all hover:border-primary/40 hover:shadow-glow"
              >
                <div>
                  <h2 className="font-mono text-base font-semibold text-foreground group-hover:text-primary">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
                <ArrowRight
                  className="mt-1 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}
