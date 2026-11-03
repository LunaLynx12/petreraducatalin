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
      images: ogImages,
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
    <article>
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
      <PageHero
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Locations", href: "/locations/" },
              { name: data.country.name, href: data.country.path },
              { name: label },
            ]}
          />
        }
        eyebrow={`${data.country.code} · ${data.isCapital ? "capital city" : "major city"} · satisfied clients`}
        title={
          <>
            Pentester <em className="italic text-clay">{label}</em>
          </>
        }
        description={`Looking for a penetration tester for a team in ${label}, ${data.country.name}? I am Petre Radu Cătălin, based in Brașov, Romania. I deliver remote offensive assessments for web, API, Active Directory, and cloud, with satisfied clients in ${label}.`}
        meta={
          <>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              {label}
              {data.nameLocal && data.nameLocal !== data.name
                ? ` · ${data.name}`
                : ""}
            </span>
            <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
            <span>
              {data.isCapital
                ? `Capital of ${data.country.name}`
                : data.country.name}
            </span>
            <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
            <span>Remote-first delivery</span>
          </>
        }
      />

      <div className="container max-w-5xl pb-20 md:pb-28">
        <Reveal className="mt-14 md:mt-20">
          <h2 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-ink md:text-3xl">
            What {label} teams usually book
          </h2>
          <ul className="mt-6 space-y-3">
            {[
              "Web and API penetration testing before releases or partner reviews",
              "Identity-focused Active Directory offensive assessments",
              "Cloud security testing on AWS, Azure, or GCP",
              "Ethical hacking / red team style scopes when chaining matters",
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
              Satisfied clients in {label}
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
              Book testing for {label}
            </h2>
            <p className="mt-4 max-w-[56ch] text-pretty text-sm leading-relaxed text-night-muted md:text-base">
              Share scope and timing. I will propose a penetration testing plan
              for your {label} team.
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
      </div>
    </article>
  );
}
