import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, SERVICE_LINKS } from "@/data/site";
import { keywordLandings } from "@/data/seo-pages";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: { absolute: "Penetration Testing Services | Petre Radu Cătălin" },
  description:
    "Penetration testing services by Petre Radu Cătălin: pentester Brașov, penetration tester Romania, ethical hacking, and Romanian-language security assessments.",
  alternates: { canonical: `${siteConfig.url}/services/` },
};

const extraDescriptions: Record<string, string> = {
  "/ro/pentesting-brasov/":
    "Testare de penetrare pentru firme din Brașov: web, API, rețea internă și Active Directory, cu raport în română și engleză.",
  "/locations/":
    "Where clients work with me: Romania, the Netherlands, Austria, and Finland. Remote-first across the EU, on-site in Romania.",
  "/locations/netherlands/":
    "Penetration testing for teams in Amsterdam, Rotterdam, and The Hague. Remote-first from Brașov, EU-friendly collaboration.",
  "/locations/austria/":
    "Penetration testing for teams in Vienna, Graz, and Linz. Remote-first from Brașov, EU-friendly collaboration.",
  "/locations/finland/":
    "Penetration testing for teams in Helsinki, Espoo, and Tampere. Remote-first from Brașov, EU-friendly collaboration.",
};

const hubs = [
  ...SERVICE_LINKS.map((l) => ({
    href: l.href,
    title: l.label,
    text: extraDescriptions[l.href] ?? l.label,
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
    <article>
      <PageHero
        eyebrow="Services hub"
        title={
          <>
            Penetration testing{" "}
            <em className="italic text-clay">services</em>
          </>
        }
        description={
          <>
            Canonical service and keyword pages for Petre Radu Cătălin, the
            penetration tester based in Brașov, Romania. Use these pages when
            you need a named expert. For company platform services, see{" "}
            <a
              href="https://kiwidefence.com"
              className="link-underline text-accent"
              rel="noopener noreferrer"
            >
              Kiwi Defence
            </a>
            .
          </>
        }
        meta={
          <>
            <span>{uniqueHubs.length} pages</span>
            <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
            <span>Web · API · Cloud · Identity · Red team</span>
          </>
        }
      />

      <div className="container max-w-5xl pb-20 md:pb-28">
        <div className="border-t border-line">
          {uniqueHubs.map((item, i) => (
            <Reveal key={item.href} delay={0.02 * i}>
              <Link
                href={item.href}
                className="group grid gap-3 border-b border-line py-6 md:grid-cols-12 md:gap-8 md:py-7"
              >
                <div className="flex items-baseline gap-3 md:col-span-5">
                  <span className="font-mono text-[10px] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-serif text-xl leading-snug text-ink transition-colors group-hover:text-accent md:text-2xl">
                    {item.title}
                  </h2>
                </div>
                <p className="max-w-[62ch] text-sm leading-relaxed text-body md:col-span-6">
                  {item.text}
                </p>
                <div className="flex items-start justify-end md:col-span-1">
                  <ArrowUpRight
                    className="h-4 w-4 text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}
