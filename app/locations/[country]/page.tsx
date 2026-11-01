import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import {
  clientMentions,
  getCountryBySlug,
  servedCountries,
} from "@/data/locations";
import { Reveal } from "@/components/reveal";
import { ogImages } from "@/lib/metadata";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqList } from "@/components/faq-list";
import {
  JsonLd,
  buildFaqJsonLd,
  buildProfessionalServiceJsonLd,
  buildServiceJsonLd,
} from "@/components/seo";

interface PageProps {
  params: Promise<{ country: string }>;
}

export function generateStaticParams() {
  return servedCountries.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country: slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return {};
  return {
    title: { absolute: country.metaTitle },
    description: country.metaDescription,
    keywords: country.keywords,
    alternates: { canonical: `${siteConfig.url}${country.path}` },
    openGraph: {
      type: "website",
      url: `${siteConfig.url}${country.path}`,
      title: country.metaTitle,
      description: country.metaDescription,
      images: ogImages,
    },
  };
}

export default async function CountryLocationPage({ params }: PageProps) {
  const { country: slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) notFound();

  const mentions = clientMentions.filter((m) => m.country === country.name);
  const faqs = [
    {
      question: `Do you offer penetration testing in ${country.name}?`,
      answer: `Yes. Petre Radu Cătălin provides penetration testing and offensive security for teams in ${country.name}, including ${country.cities.map((c) => c.name).join(", ")}. Delivery is remote-first from Brașov, Romania, with EU-friendly collaboration.`,
    },
    {
      question: `Which cities in ${country.name} do you support?`,
      answer: `Satisfied clients and engagements cover ${country.cities.map((c) => (c.nameLocal ? `${c.name} (${c.nameLocal})` : c.name)).join(", ")}.`,
    },
    {
      question: `How do I hire a pentester for ${country.name}?`,
      answer: `Email hello@petreraducatalin.com with your assets and timeline, or use the contact form on petreraducatalin.com.`,
    },
  ];

  return (
    <article>
      <JsonLd
        data={[
          buildProfessionalServiceJsonLd(),
          buildServiceJsonLd({
            name: `Penetration Testing ${country.name}`,
            description: country.metaDescription,
            url: `${siteConfig.url}${country.path}`,
            serviceType: "Penetration Testing",
            areaName: country.name,
            areaType: "Country",
          }),
          buildFaqJsonLd(faqs),
        ]}
      />
      <PageHero
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Locations", href: "/locations/" },
              { name: country.name },
            ]}
          />
        }
        eyebrow={`${country.code} · satisfied clients · remote EU delivery`}
        title={
          <>
            {country.h1}{" "}
            <em className="italic text-clay">{country.h1Accent}</em>
          </>
        }
        description={country.intro}
        meta={
          <>
            <span>{country.cities.length} cities</span>
            <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
            <span>Remote-first delivery</span>
            <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
            <span>Reports in English</span>
          </>
        }
      />

      <div className="container max-w-5xl pb-20 md:pb-28">
        <Reveal className="mt-14 md:mt-20">
          <h2 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-ink md:text-3xl">
            Cities in {country.name}
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {country.cities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`${country.path}${city.slug}/`}
                  className="group flex h-full flex-col border border-line bg-surface/60 p-5 transition-colors hover:border-line-strong hover:bg-surface"
                >
                  <p className="flex items-center gap-2 font-serif text-xl leading-none text-ink">
                    <MapPin
                      className="h-4 w-4 text-accent"
                      aria-hidden="true"
                    />
                    {city.nameLocal ?? city.name}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    {city.isCapital
                      ? `Capital of ${country.name}`
                      : `Major city in ${country.name}`}
                    {city.nameLocal && city.nameLocal !== city.name
                      ? ` · ${city.name}`
                      : ""}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-14 md:mt-20">
          <h2 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-ink md:text-3xl">
            What clients in {country.name} book
          </h2>
          <ul className="mt-6 space-y-3">
            {[
              "Web and API penetration testing",
              "Network and Active Directory offensive assessments",
              "Cloud security testing (AWS, Azure, GCP)",
              "Ethical hacking and red team style engagements",
              "Clear remediation reporting in English",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 text-base leading-relaxed text-body"
              >
                <CheckCircle2
                  className="mt-1 h-5 w-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        {mentions.length > 0 ? (
          <Reveal className="mt-14 md:mt-20">
            <h2 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-ink md:text-3xl">
              Satisfied clients in {country.name}
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {mentions.map((m) => (
                <figure
                  key={`${m.city}-${m.role}`}
                  className="border border-line bg-surface/60 p-6"
                >
                  <blockquote className="text-pretty text-base leading-relaxed text-body">
                    “{m.quote}”
                  </blockquote>
                  <figcaption className="mt-4 border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {m.role}
                    <span className="mt-1 block text-accent">
                      {m.city}, {m.country}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        ) : null}

        <Reveal className="mt-14 md:mt-20">
          <h2 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-ink md:text-3xl">
            FAQ
          </h2>
          <FaqList faqs={faqs} className="mt-6" />
        </Reveal>

        <Reveal className="mt-16 md:mt-20">
          <div className="bg-night p-8 text-night-text md:p-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-light">
              Next step
            </p>
            <h2 className="mt-4 max-w-[22ch] text-balance font-serif text-3xl leading-[1.05] tracking-[-0.02em] md:text-4xl">
              Book testing for {country.name}
            </h2>
            <p className="mt-4 max-w-[56ch] text-pretty text-sm leading-relaxed text-night-muted md:text-base">
              Tell me about your apps or infrastructure. I reply with a scoped
              penetration testing plan for teams in {country.name}.
            </p>
            <Link
              href="/#contact"
              className="mt-7 inline-flex items-center gap-2 bg-night-text px-6 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-night transition-colors hover:bg-clay hover:text-canvas"
            >
              Contact Petre Radu
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <Reveal className="mt-12 md:mt-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            Other countries
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {servedCountries
              .filter((c) => c.slug !== country.slug)
              .map((c) => (
                <li key={c.slug}>
                  <Link
                    href={c.path}
                    className="inline-flex border border-line px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors hover:border-line-strong hover:text-accent"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            <li>
              <Link
                href="/pentester-brasov/"
                className="inline-flex border border-line px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors hover:border-line-strong hover:text-accent"
              >
                Pentester Brașov
              </Link>
            </li>
          </ul>
        </Reveal>
      </div>
    </article>
  );
}
