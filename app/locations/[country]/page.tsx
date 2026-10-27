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
import { Breadcrumbs } from "@/components/breadcrumbs";
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
    <article className="section-padding">
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
      <div className="container max-w-4xl">
        <Reveal>
          <Breadcrumbs
            items={[
              { name: "Locations", href: "/locations/" },
              { name: country.name },
            ]}
          />
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
            {country.code} · satisfied clients · remote EU delivery
          </p>
          <h1 className="font-mono text-3xl font-bold leading-tight text-foreground sm:text-5xl">
            {country.h1}{" "}
            <span className="text-gradient-green">{country.h1Accent}</span>
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
            {country.intro}
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-12">
          <h2 className="font-mono text-xl font-semibold text-primary">
            Cities in {country.name}
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {country.cities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`${country.path}${city.slug}/`}
                  className="block rounded-xl border border-border bg-surface/60 p-4 transition-all hover:border-primary/40 hover:shadow-glow"
                >
                  <p className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
                    <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                    {city.nameLocal ?? city.name}
                  </p>
                  <p className="mt-2 text-xs text-muted">
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

        <Reveal delay={0.08} className="mt-12">
          <h2 className="font-mono text-xl font-semibold text-primary">
            What clients in {country.name} book
          </h2>
          <ul className="mt-5 space-y-3">
            {[
              "Web and API penetration testing",
              "Network and Active Directory offensive assessments",
              "Cloud security testing (AWS, Azure, GCP)",
              "Ethical hacking and red team style engagements",
              "Clear remediation reporting in English",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-foreground/85">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <h2 className="font-mono text-xl font-semibold text-primary">
            Satisfied clients in {country.name}
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {mentions.map((m) => (
              <figure
                key={`${m.city}-${m.role}`}
                className="rounded-xl border border-border bg-surface/50 p-5"
              >
                <blockquote className="text-sm leading-relaxed text-foreground/85">
                  “{m.quote}”
                </blockquote>
                <figcaption className="mt-3 font-mono text-xs text-muted">
                  {m.role}
                  <span className="mt-1 block text-primary">
                    {m.city}, {m.country}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mt-12">
          <h2 className="font-mono text-xl font-semibold text-primary">FAQ</h2>
          <div className="mt-5 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-xl border border-border bg-surface/50 p-5"
              >
                <summary className="cursor-pointer font-mono text-sm font-semibold text-foreground">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14} className="mt-12 text-center">
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
            <h2 className="font-mono text-2xl font-bold text-foreground">
              Book testing for {country.name}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
              Tell me about your apps or infrastructure. I reply with a scoped
              penetration testing plan for teams in {country.name}.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-6 py-3 font-mono text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Contact Petre Radu
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.16} className="mt-10">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            Other countries
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {servedCountries
              .filter((c) => c.slug !== country.slug)
              .map((c) => (
                <li key={c.slug}>
                  <Link
                    href={c.path}
                    className="inline-flex rounded-md border border-border px-3 py-1.5 font-mono text-xs text-muted hover:border-primary/40 hover:text-primary"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            <li>
              <Link
                href="/pentester-brasov/"
                className="inline-flex rounded-md border border-border px-3 py-1.5 font-mono text-xs text-muted hover:border-primary/40 hover:text-primary"
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
