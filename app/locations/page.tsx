import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { clientMentions, servedCountries } from "@/data/locations";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd, buildProfessionalServiceJsonLd } from "@/components/seo";

export const metadata: Metadata = {
  title: {
    absolute:
      "Locations | Romania Netherlands Austria Finland | Petre Radu Cătălin",
  },
  description:
    "Penetration testing locations: Romania (București, Brașov, Cluj, Timișoara), Netherlands (Amsterdam, Rotterdam, The Hague), Austria (Vienna, Graz, Linz), Finland (Helsinki, Espoo, Tampere).",
  alternates: { canonical: `${siteConfig.url}/locations/` },
  keywords: [
    "Penetration Tester Romania",
    "Penetration Tester Netherlands",
    "Penetration Tester Austria",
    "Penetration Tester Finland",
    "Pentester Amsterdam",
    "Pentester Vienna",
    "Pentester Helsinki",
    "Pentester Bucharest",
  ],
};

export default function LocationsHubPage() {
  return (
    <article>
      <JsonLd data={buildProfessionalServiceJsonLd()} />
      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ name: "Locations" }]} />}
        eyebrow="Locations · countries · cities"
        title={
          <>
            Where clients <em className="italic text-clay">work with me</em>
          </>
        }
        description="Petre Radu Cătălin delivers penetration testing and offensive security for satisfied clients in Romania, the Netherlands, Austria, and Finland. Home base: Brașov. Delivery: remote across the EU, with on-site options in Romania when useful."
        meta={
          <>
            <span>{servedCountries.length} countries</span>
            <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
            <span>13 cities</span>
            <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
            <span>Remote-first, EU-friendly</span>
          </>
        }
      />

      <div className="container max-w-5xl pb-20 md:pb-28">
        <div className="border-t border-line">
          {servedCountries.map((country, i) => (
            <Reveal key={country.slug} delay={0.04 * i}>
              <Link
                href={country.path}
                className="group grid gap-6 border-b border-line py-8 md:grid-cols-12 md:gap-10 md:py-10"
              >
                <div className="md:col-span-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    {String(i + 1).padStart(2, "0")} · {country.code} ·{" "}
                    {country.nameLocal ?? country.name}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.02em] text-ink transition-colors group-hover:text-accent md:text-4xl">
                    {country.name}
                  </h2>
                </div>

                <div className="md:col-span-7">
                  <p className="max-w-[64ch] text-pretty text-sm leading-relaxed text-body md:text-base">
                    {country.intro}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {country.cities.map((city) => (
                      <li
                        key={city.slug}
                        className="inline-flex items-center gap-1.5 border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted"
                      >
                        <MapPin className="h-3 w-3 text-accent" aria-hidden="true" />
                        {city.nameLocal ?? city.name}
                        {city.isCapital ? " · capital" : ""}
                      </li>
                    ))}
                  </ul>
                </div>

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

        <Reveal delay={0.2} className="mt-16 md:mt-20">
          <h2 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-ink md:text-3xl">
            Snapshot from satisfied clients
          </h2>
          <ul className="mt-6 border-t border-line">
            {clientMentions.map((c) => (
              <li
                key={`${c.city}-${c.role}`}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-3 text-sm"
              >
                <span className="text-ink">{c.role}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                  {c.city}, {c.country}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </article>
  );
}
