import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { clientMentions, servedCountries } from "@/data/locations";
import { Reveal } from "@/components/reveal";
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
    <article className="section-padding">
      <JsonLd data={buildProfessionalServiceJsonLd()} />
      <div className="container max-w-4xl">
        <Reveal>
          <Breadcrumbs items={[{ name: "Locations" }]} />
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
            locations · countries · cities
          </p>
          <h1 className="font-mono text-3xl font-bold text-foreground sm:text-5xl">
            Where clients{" "}
            <span className="text-gradient-green">work with me</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
            Petre Radu Cătălin delivers penetration testing and offensive
            security for satisfied clients in Romania, the Netherlands, Austria,
            and Finland. Home base: Brașov. Delivery: remote across the EU, with
            on-site options in Romania when useful.
          </p>
        </Reveal>

        <div className="mt-12 space-y-6">
          {servedCountries.map((country, i) => (
            <Reveal key={country.slug} delay={0.04 * i}>
              <Link
                href={country.path}
                className="group block rounded-xl border border-border bg-surface/60 p-6 transition-all hover:border-primary/40 hover:shadow-glow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-primary">
                      {country.code} · {country.nameLocal ?? country.name}
                    </p>
                    <h2 className="mt-2 font-mono text-xl font-semibold text-foreground group-hover:text-primary">
                      {country.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {country.intro}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {country.cities.map((city) => (
                        <li
                          key={city.slug}
                          className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1 font-mono text-xs text-muted"
                        >
                          <MapPin className="h-3 w-3 text-primary" aria-hidden="true" />
                          {city.nameLocal ?? city.name}
                          {city.isCapital ? " · capital" : ""}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14">
          <h2 className="font-mono text-xl font-semibold text-primary">
            Snapshot from satisfied clients
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-muted">
            {clientMentions.map((c) => (
              <li key={`${c.city}-${c.role}`}>
                <span className="text-foreground/85">{c.role}</span>
                {" · "}
                <span className="text-primary">
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
