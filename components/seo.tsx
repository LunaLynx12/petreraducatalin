import Script from "next/script";
import { siteConfig } from "@/data/site";
import type { ServiceFaq } from "@/data/services";
import { buildAreaServedSchema } from "@/data/locations";

export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    worksFor: [
      {
        "@type": "Organization",
        name: siteConfig.company,
      },
    ],
    founderOf: {
      "@type": "Organization",
      name: siteConfig.foundedCompany.name,
      url: siteConfig.foundedCompany.url,
    },
    url: siteConfig.url,
    email: siteConfig.email,
    image: `${siteConfig.url}/images/Profile.webp`,
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.github,
      siteConfig.social.x,
      siteConfig.social.devto,
      siteConfig.social.reddit,
      siteConfig.social.youtube,
      siteConfig.social.site,
      siteConfig.social.kiwi,
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universitatea Transilvania din Brașov",
    },
    knowsAbout: [
      "Penetration Testing",
      "Pentester Brașov",
      "Penetration Tester Brașov",
      "Pentesting Brașov",
      "Pentester Romania",
      "Penetration Tester Romania",
      "Ethical Hacker Brașov",
      "Ethical Hacking Romania",
      "Red Team Brașov",
      "Red Team Romania",
      "Offensive Security Brașov",
      "Security Testing Brașov",
      "Test de penetrare Brașov",
      "Testare de securitate Brașov",
      "Red Team Operations",
      "Active Directory Security",
      "Cloud Security",
      "AI Security",
      "MITRE ATT&CK Framework",
      "Vulnerability Assessment",
      "Bug Bounty",
      "GDPR Compliance",
      "NIS2 Directive",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brașov",
      addressRegion: "Brașov",
      addressCountry: "RO",
    },
    homeLocation: {
      "@type": "Place",
      name: "Brașov, Romania",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brașov",
        addressCountry: "RO",
      },
    },
    nationality: {
      "@type": "Country",
      name: "Romania",
    },
  };
}

export function buildProfessionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Petre Radu Cătălin - Penetration Testing",
    alternateName: [
      "Pentester Brașov",
      "Penetration Tester Brașov",
      "Pentester Romania",
      "Penetration Tester Netherlands",
      "Penetration Tester Austria",
      "Penetration Tester Finland",
      "Pentester Amsterdam",
      "Pentester Vienna",
      "Pentester Helsinki",
      "Test de penetrare Brașov",
    ],
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    image: `${siteConfig.url}/images/og.png`,
    priceRange: "$$",
    founder: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: buildAreaServedSchema(),
    serviceType: [
      "Penetration Testing",
      "Web Application Penetration Testing",
      "Active Directory Security Assessment",
      "Cloud Security Assessment",
      "Red Team Assessment",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brașov",
      addressRegion: "Brașov",
      addressCountry: "RO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.6427,
      longitude: 25.5887,
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.github,
      siteConfig.social.site,
    ],
  };
}

export function buildFaqJsonLd(faqs: ServiceFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildServiceJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaName: string;
  areaType?: "City" | "Country";
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    serviceType: opts.serviceType,
    provider: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
      jobTitle: siteConfig.jobTitle,
    },
    areaServed: {
      "@type": opts.areaType ?? "City",
      name: opts.areaName,
    },
  };
}

export function PersonJsonLd() {
  return <JsonLd data={buildPersonJsonLd()} />;
}

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
