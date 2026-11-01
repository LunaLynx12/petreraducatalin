import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { ServicePageContent } from "@/data/services";
import { landingAngles } from "@/data/landing-angles";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqList } from "@/components/faq-list";
import {
  JsonLd,
  buildFaqJsonLd,
  buildProfessionalServiceJsonLd,
  buildServiceJsonLd,
} from "@/components/seo";
import { siteConfig } from "@/data/site";

export function ServiceLanding({
  content,
  serviceSchema,
}: {
  content: ServicePageContent;
  serviceSchema: {
    name: string;
    serviceType: string;
    areaName: string;
    areaType?: "City" | "Country";
  };
}) {
  const angle = landingAngles[content.slug];
  const methodologyHeading =
    content.methodologyHeading ??
    (content.lang === "ro"
      ? "Metodologie și standarde"
      : "Methodology and standards");
  const methodologyText =
    content.methodologyText ??
    (content.lang === "ro"
      ? "Testare manuală prioritară, validare de exploatare, raport cu dovezi. Aliniere OWASP pentru web/API și MITRE ATT&CK când apar căi pe identitate."
      : "Manual-first testing, exploit validation, evidence-backed reporting. OWASP-aligned for web/API and MITRE ATT&CK when identity paths matter.");
  const methodologyPoints =
    content.methodologyPoints ??
    (content.lang === "ro"
      ? [
          "OWASP Top 10 / WSTG",
          "Faze tip PTES",
          "Severitate legată de exploatare",
          "Re-test opțional după remediere",
        ]
      : [
          "OWASP Top 10 / WSTG",
          "PTES-style phases",
          "Severity tied to exploitability",
          "Optional re-test after remediation",
        ]);
  const jsonLd = [
    buildProfessionalServiceJsonLd(),
    buildServiceJsonLd({
      name: serviceSchema.name,
      description: content.metaDescription,
      url: `${siteConfig.url}${content.path}`,
      serviceType: serviceSchema.serviceType,
      areaName: serviceSchema.areaName,
      areaType: serviceSchema.areaType,
    }),
    buildFaqJsonLd(content.faqs),
  ];

  const crumbs = [
    { name: content.lang === "ro" ? "Servicii" : "Services", href: "/services/" },
    { name: content.title },
  ];

  return (
    <article lang={content.lang}>
      <JsonLd data={jsonLd} />
      <PageHero
        breadcrumbs={<Breadcrumbs items={crumbs} />}
        eyebrow={
          content.lang === "ro"
            ? "Servicii de testare ofensivă · Brașov, România"
            : "Offensive security services · Brașov, Romania"
        }
        title={
          <>
            {content.h1}{" "}
            <em className="italic text-clay">{content.h1Accent}</em>
          </>
        }
        description={content.intro}
        meta={
          <>
            <span>Remote across the EU</span>
            <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
            <span>On-site in Romania</span>
            <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
            <span>Reports in EN / RO</span>
          </>
        }
      />

      <div className="container max-w-5xl pb-20 md:pb-28">
        {angle ? (
          <Reveal className="mt-12 md:mt-16">
            <div className="border border-line bg-surface/70 p-6 md:p-8">
              <h2 className="max-w-[30ch] text-balance font-serif text-2xl leading-tight tracking-[-0.01em] text-ink md:text-3xl">
                {angle.heading}
              </h2>
              <p className="mt-4 max-w-[68ch] text-pretty text-base leading-relaxed text-body">
                {angle.text}
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {angle.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm leading-relaxed text-body"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}

        <Reveal className="mt-14 md:mt-20">
          <h2 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-ink md:text-3xl">
            {content.whoForHeading}
          </h2>
          <ul className="mt-6 space-y-3">
            {content.whoFor.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-base leading-relaxed text-body"
              >
                <CheckCircle2
                  className="mt-1 h-5 w-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span className="max-w-[68ch]">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-14 md:mt-20">
          <h2 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-ink md:text-3xl">
            {content.whatHeading}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {content.whatItems.map((item) => (
              <div
                key={item.title}
                className="border border-line bg-surface/60 p-5"
              >
                <h3 className="font-serif text-lg leading-snug text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-14 md:mt-20">
          <h2 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-ink md:text-3xl">
            {content.processHeading}
          </h2>
          <ol className="mt-6 border-t border-line">
            {content.processSteps.map((step, i) => (
              <li
                key={step.title}
                className="grid gap-3 border-b border-line py-5 md:grid-cols-12 md:gap-8"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent md:col-span-2">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-10">
                  <h3 className="font-serif text-xl leading-snug text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1 max-w-[68ch] text-sm leading-relaxed text-body">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-14 md:mt-20">
          <h2 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-ink md:text-3xl">
            {methodologyHeading}
          </h2>
          <p className="mt-4 max-w-[68ch] text-pretty text-base leading-relaxed text-body">
            {methodologyText}
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {methodologyPoints.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-relaxed text-body"
              >
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        {content.pricingHeading && content.pricingText ? (
          <Reveal className="mt-14 md:mt-20">
            <div className="border border-line bg-surface/70 p-6 md:p-8">
              <h2 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-ink md:text-3xl">
                {content.pricingHeading}
              </h2>
              <p className="mt-3 max-w-[68ch] text-base leading-relaxed text-body">
                {content.pricingText}
              </p>
            </div>
          </Reveal>
        ) : null}

        <Reveal className="mt-14 md:mt-20">
          <div className="border-l-2 border-clay/50 bg-surface/50 py-2 pl-6 md:pl-8">
            <h2 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-ink md:text-3xl">
              {content.localHeading}
            </h2>
            <p className="mt-3 max-w-[68ch] text-base leading-relaxed text-body">
              {content.localText}
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-14 md:mt-20">
          <h2 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-ink md:text-3xl">
            {content.faqHeading}
          </h2>
          <FaqList faqs={content.faqs} className="mt-6" />
        </Reveal>

        <Reveal className="mt-16 md:mt-20">
          <div className="bg-night p-8 text-night-text md:p-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-light">
              Next step
            </p>
            <h2 className="mt-4 max-w-[22ch] text-balance font-serif text-3xl leading-[1.05] tracking-[-0.02em] md:text-4xl">
              {content.ctaHeading}
            </h2>
            <p className="mt-4 max-w-[58ch] text-pretty text-sm leading-relaxed text-night-muted md:text-base">
              {content.ctaText}
            </p>
            <Link
              href="/#contact"
              className="mt-7 inline-flex items-center gap-2 bg-night-text px-6 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-night transition-colors hover:bg-clay hover:text-canvas"
            >
              {content.ctaLabel}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <Reveal className="mt-12 md:mt-16">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            {content.relatedLabel}
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {content.related.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex border border-line px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors hover:border-line-strong hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </article>
  );
}
