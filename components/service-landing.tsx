import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { ServicePageContent } from "@/data/services";
import { landingAngles } from "@/data/landing-angles";
import { Reveal } from "@/components/reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";
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
    <article className="section-padding" lang={content.lang}>
      <JsonLd data={jsonLd} />
      <div className="container max-w-4xl">
        <Reveal>
          <Breadcrumbs items={crumbs} />
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
            {content.lang === "ro"
              ? "Servicii de testare ofensivă · Brașov, România"
              : "Offensive security services · Brașov, Romania"}
          </p>
          <h1 className="font-mono text-3xl font-bold leading-tight text-foreground sm:text-5xl">
            {content.h1}{" "}
            <span className="text-gradient-green">{content.h1Accent}</span>
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
            {content.intro}
          </p>
        </Reveal>

        {angle ? (
          <Reveal delay={0.04} className="mt-12">
            <div className="rounded-2xl border border-primary/25 bg-primary/5 p-6 md:p-8">
              <h2 className="font-mono text-xl font-semibold text-primary">
                {angle.heading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-foreground/85">
                {angle.text}
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {angle.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm text-foreground/85"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}

        <Reveal delay={0.05} className="mt-12">
          <h2 className="font-mono text-xl font-semibold text-primary sm:text-2xl">
            {content.whoForHeading}
          </h2>
          <ul className="mt-5 space-y-3">
            {content.whoFor.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-base leading-relaxed text-foreground/85"
              >
                <CheckCircle2
                  className="mt-1 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08} className="mt-14">
          <h2 className="font-mono text-xl font-semibold text-primary sm:text-2xl">
            {content.whatHeading}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {content.whatItems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-surface/70 p-5"
              >
                <h3 className="font-mono text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <h2 className="font-mono text-xl font-semibold text-primary sm:text-2xl">
            {content.processHeading}
          </h2>
          <ol className="mt-6 space-y-5">
            {content.processSteps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="font-mono text-sm font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-mono text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.11} className="mt-14">
          <h2 className="font-mono text-xl font-semibold text-primary sm:text-2xl">
            {methodologyHeading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/85">
            {methodologyText}
          </p>
          <ul className="mt-5 space-y-3">
            {methodologyPoints.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-relaxed text-foreground/85"
              >
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        {content.pricingHeading && content.pricingText ? (
          <Reveal delay={0.115} className="mt-14">
            <div className="rounded-2xl border border-border bg-surface/70 p-6 md:p-8">
              <h2 className="font-mono text-xl font-semibold text-primary">
                {content.pricingHeading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-foreground/85">
                {content.pricingText}
              </p>
            </div>
          </Reveal>
        ) : null}

        <Reveal delay={0.12} className="mt-14">
          <div className="neon-border rounded-2xl bg-surface/70 p-6 md:p-8">
            <h2 className="font-mono text-xl font-semibold text-primary">
              {content.localHeading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/85">
              {content.localText}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.14} className="mt-14">
          <h2 className="font-mono text-xl font-semibold text-primary sm:text-2xl">
            {content.faqHeading}
          </h2>
          <div className="mt-6 space-y-4">
            {content.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-border bg-surface/50 p-5 open:border-primary/30"
              >
                <summary className="cursor-pointer list-none font-mono text-sm font-semibold text-foreground marker:content-none">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16} className="mt-14">
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center md:p-10">
            <h2 className="font-mono text-2xl font-bold text-foreground">
              {content.ctaHeading}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              {content.ctaText}
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-6 py-3 font-mono text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
            >
              {content.ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.18} className="mt-12">
          <h2 className="mb-4 font-mono text-sm uppercase tracking-widest text-primary">
            {content.relatedLabel}
          </h2>
          <ul className="flex flex-wrap gap-3">
            {content.related.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex rounded-md border border-border px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-primary/40 hover:text-primary"
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
