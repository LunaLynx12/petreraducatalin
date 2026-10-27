import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import {
  allServedCities,
  clientMentions,
  getCity,
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
  params: Promise<{ country: string; city: string }>;
}

export function generateStaticParams() {
  return allServedCities.map((city) => ({
    country: city.countrySlug,
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country: countrySlug, city: citySlug } = await params;
  const data = getCity(countrySlug, citySlug);
  if (!data) return {};

  const label = data.nameLocal ?? data.name;
  const title = `Pentester ${label} | Penetration Tester ${data.country.name} | Petre Radu`;
  const description = `Penetration tester for teams in ${label}, ${data.country.name}. Petre Radu Cătălin delivers remote web, API, AD, cloud, and red team style testing. Satisfied clients in ${label}.`;

  return {
    title: { absolute: title },
    description,
    keywords: [
      `Pentester ${label}`,
      `Penetration Tester ${label}`,
      `Penetration Tester ${data.name}`,
      `Pentester ${data.country.name}`,
      `Ethical Hacking ${label}`,
      "Petre Radu Cătălin",
    ],
    alternates: { canonical: `${siteConfig.url}${data.path}` },
    openGraph: {
      type: "website",
      url: `${siteConfig.url}${data.path}`,
      title,
      description,
    },
  };
}

export default async function CityLocationPage({ params }: PageProps) {
  const { country: countrySlug, city: citySlug } = await params;
  const data = getCity(countrySlug, citySlug);
  if (!data) notFound();

  const label = data.nameLocal ?? data.name;
  const mentions = clientMentions.filter((m) => {
    const cityMatch =
      m.city === label ||
      m.city === data.name ||
      m.city === data.nameLocal;
    return m.country === data.country.name && cityMatch;
  });

  const faqs = [
    {
      question: `Do you offer penetration testing in ${label}?`,
      answer: `Yes. Petre Radu Cătălin works with teams in ${label}, ${data.country.name}. Engagements are remote-first from Brașov, Romania, with clear reporting and remediation support.`,
    },
    {
      question: `Is ${label} covered as part of ${data.country.name} delivery?`,
      answer: `Yes. ${label}${data.isCapital ? ` is the capital of ${data.country.name} and` : ""} is explicitly listed among cities with satisfied clients for offensive security and penetration testing.`,
    },
    {
      question: `How do I start a pentest for a ${label} company?`,
      answer: `Email hello@petreraducatalin.com with assets and timeline, or use the contact form on petreraducatalin.com.`,
    },
  ];

  return (
    <article className="section-padding">
      <JsonLd
        data={[
          buildProfessionalServiceJsonLd(),
          buildServiceJsonLd({
            name: `Penetration Testing ${label}`,
            description: `Penetration testing and offensive security for teams in ${label}, ${data.country.name}.`,
            url: `${siteConfig.url}${data.path}`,
            serviceType: "Penetration Testing",
            areaName: data.name,
            areaType: "City",
          }),
          buildFaqJsonLd(faqs),
        ]}
      />
      <div className="container max-w-4xl">
        <Reveal>
          <Breadcrumbs
            items={[
              { name: "Locations", href: "/locations/" },
              { name: data.country.name, href: data.country.path },
              { name: label },
            ]}
          />
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
            {data.country.code} · {data.isCapital ? "capital city" : "major city"} · satisfied clients
          </p>
          <h1 className="font-mono text-3xl font-bold leading-tight text-foreground sm:text-5xl">
            Pentester{" "}
            <span className="text-gradient-green">{label}</span>
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
            Looking for a penetration tester for a team in {label},{" "}
            {data.country.name}? I am Petre Radu Cătălin, based in Brașov,
            Romania. I deliver remote offensive assessments for web, API,
            Active Directory, and cloud, with satisfied clients in {label}.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-10">
          <div className="rounded-xl border border-border bg-surface/60 p-5">
            <p className="flex items-center gap-2 font-mono text-sm text-foreground">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {label}
              {data.nameLocal && data.nameLocal !== data.name
                ? ` · ${data.name}`
                : ""}
              {data.isCapital ? ` · capital of ${data.country.name}` : ""}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <h2 className="font-mono text-xl font-semibold text-primary">
            What {label} teams usually book
          </h2>
          <ul className="mt-5 space-y-3">
            {[
              "Web and API penetration testing before releases or partner reviews",
              "Identity-focused Active Directory offensive assessments",
              "Cloud security testing on AWS, Azure, or GCP",
              "Ethical hacking / red team style scopes when chaining matters",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-foreground/85">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        {mentions.length > 0 ? (
          <Reveal delay={0.1} className="mt-12">
            <h2 className="font-mono text-xl font-semibold text-primary">
              Satisfied clients in {label}
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
        ) : null}

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
              Book testing for {label}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
              Share scope and timing. I will propose a penetration testing plan
              for your {label} team.
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
      </div>
    </article>
  );
}
