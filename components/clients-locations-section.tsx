import Link from "next/link";
import { MapPin, Quote } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import {
  clientMentions,
  servedCountries,
} from "@/data/locations";

export function ClientsLocationsSection() {
  return (
    <section
      id="clients"
      aria-labelledby="clients-heading"
      className="section-padding border-t border-border"
    >
      <div className="container">
        <SectionHeading
          eyebrow="clients"
          id="clients-heading"
          title="Satisfied clients across Romania and the EU"
          description={
            <>
              Penetration testing and offensive security for teams in{" "}
              <strong className="text-foreground">Romania</strong>,{" "}
              <strong className="text-foreground">Netherlands</strong>,{" "}
              <strong className="text-foreground">Austria</strong>, and{" "}
              <strong className="text-foreground">Finland</strong>
              {" "}(București, Brașov, Cluj-Napoca, Timișoara, Amsterdam, Rotterdam,
              The Hague, Vienna, Graz, Linz, Helsinki, Espoo, Tampere).
            </>
          }
        />

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {servedCountries.map((country, i) => (
            <Reveal key={country.code} delay={0.04 * i}>
              <div className="h-full rounded-xl border border-border bg-surface/60 p-5 transition-all hover:border-primary/40 hover:shadow-glow">
                <p className="font-mono text-xs uppercase tracking-widest text-primary">
                  {country.code}
                </p>
                <h3 className="mt-2 font-mono text-lg font-semibold text-foreground">
                  <Link href={country.path} className="hover:text-primary">
                    {country.name}
                  </Link>
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  {country.cities.map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={`${country.path}${city.slug}/`}
                        className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                      >
                        <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                        <span>
                          {city.nameLocal ?? city.name}
                          {city.isCapital ? " (capital)" : ""}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {clientMentions.map((item, i) => (
            <Reveal key={`${item.city}-${item.role}`} delay={0.03 * i}>
              <figure className="flex h-full flex-col rounded-xl border border-border bg-surface/50 p-5">
                <Quote className="mb-3 h-4 w-4 text-primary" aria-hidden="true" />
                <blockquote className="flex-1 text-sm leading-relaxed text-foreground/85">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-4 font-mono text-xs text-muted">
                  <span className="text-foreground/80">{item.role}</span>
                  <span className="mt-1 block text-primary">
                    {item.city}, {item.country}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <Link
            href="/locations/"
            className="inline-flex rounded-md border border-primary/40 bg-primary/10 px-5 py-2.5 font-mono text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            All locations and countries
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
