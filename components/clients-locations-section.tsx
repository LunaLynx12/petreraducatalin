import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { clientMentions, servedCountries } from "@/data/locations";

export function ClientsLocationsSection() {
  return (
    <section
      id="clients"
      aria-labelledby="clients-heading"
      className="section-y bg-surface/40"
    >
      <div className="container">
        <SectionHeader
          index="06"
          eyebrow="Clients"
          id="clients-heading"
          title="Satisfied clients across Romania and the EU"
          description={
            <>
              Penetration testing for teams in Romania, the Netherlands,
              Austria, and Finland — remote-first, with on-site work when it
              helps.
            </>
          }
        />

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {servedCountries.map((country, i) => (
            <Reveal key={country.code} delay={0.04 * i}>
              <div className="border-t border-line-strong pt-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {country.code}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-ink">
                  <Link
                    href={country.path}
                    className="transition-colors hover:text-accent"
                  >
                    {country.name}
                  </Link>
                </h3>
                <ul className="mt-4 space-y-1.5">
                  {country.cities.map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={`${country.path}${city.slug}/`}
                        className="group inline-flex items-center gap-2 text-sm text-body transition-colors hover:text-accent"
                      >
                        <span
                          aria-hidden="true"
                          className="h-px w-2 bg-line-strong transition-all duration-300 group-hover:w-4 group-hover:bg-accent"
                        />
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

        <div className="mt-16 grid gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          {clientMentions.slice(0, 6).map((item, i) => (
            <Reveal key={`${item.city}-${item.role}`} delay={0.03 * i}>
              <figure className="border-t border-line pt-5">
                <blockquote className="text-pretty font-serif text-xl leading-snug text-ink">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  <span className="block text-body">{item.role}</span>
                  <span className="mt-1 block text-accent">
                    {item.city}, {item.country}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12">
          <Link
            href="/locations/"
            className="group inline-flex items-center gap-2 border-b border-line-strong pb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink transition-colors hover:border-accent hover:text-accent"
          >
            All locations and countries
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
