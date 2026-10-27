import Script from "next/script";
import { siteConfig } from "@/data/site";
import type { ServiceFaq } from "@/data/services";
import { buildAreaServedSchema } from "@/data/locations";

const PERSON_ID = `${siteConfig.url}/#person`;
const SERVICE_ID = `${siteConfig.url}/#professional-service`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

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
    "@type": "Person",
    "@id": PERSON_ID,
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.company,
    },
    founderOf: {
      "@type": "Organization",
      name: siteConfig.foundedCompany.name,
      url: siteConfig.foundedCompany.url,
    },
    url: siteConfig.url,
    mainEntityOfPage: WEBSITE_ID,
    email: siteConfig.email,
    image: `${siteConfig.url}/images/Profile.webp`,
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "eLearnSecurity Certified Penetration Tester (eCPPT)",
        credentialCategory: "Professional Certification",
        recognizedBy: {
          "@type": "Organization",
          name: "INE / eLearnSecurity",
        },
      },
    ],
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
      url: "https://www.unitbv.ro",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brașov",
        addressCountry: "RO",
      },
    },
    knowsAbout: [
      "Penetration Testing",
      "OWASP",
      "OWASP Top 10",
      "PTES",
      "MITRE ATT&CK",
      "Active Directory Security",
      "Cloud Security",
      "AWS Security",
      "Azure Security",
      "API Security",
      "Web Application Security",
      "AI Security",
      "Red Team Operations",
      "Bug Bounty",
      "NIS2 readiness",
      "Test de penetrare",
      "Testare de securitate",
      "Pret test de penetrare",
      "Ethical Hacking",
    ],
    knowsLanguage: ["ro", "en"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brașov",
      addressRegion: "Brașov",
      addressCountry: "RO",
    },
    homeLocation: {
      "@type": "Place",
      name: "Brașov, Romania",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 45.6427,
        longitude: 25.5887,
      },
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
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": SERVICE_ID,
    name: "Petre Radu Cătălin - Offensive Security Professional",
    alternateName: [
      "Pentester Brașov",
      "Penetration Tester Brașov",
      "Pentester Romania",
      "Test de penetrare Brașov",
      "Testare de securitate Brașov",
      "Ethical Hacking Brașov",
      "Firme pentesting România",
      "Pret test de penetrare",
    ],
    description:
      "Servicii profesionale de penetration testing, testare de securitate, ethical hacking și Red Teaming în Brașov și România. Web, API, magazin online, rețea internă, Active Directory și cloud. Petre Radu Cătălin, Penetration Tester la NTT DATA, alumni Universitatea Transilvania din Brașov.",
    url: siteConfig.url,
    email: siteConfig.email,
    image: `${siteConfig.url}/images/og.png`,
    logo: `${siteConfig.url}/images/Profile.webp`,
    priceRange: "$$$",
    currenciesAccepted: "EUR, RON",
    paymentAccepted: "Invoice",
    provider: { "@id": PERSON_ID },
    founder: { "@id": PERSON_ID },
    employee: { "@id": PERSON_ID },
    areaServed: buildAreaServedSchema(),
    serviceType: [
      "Penetration Testing",
      "Web Application Penetration Testing",
      "API Penetration Testing",
      "E-commerce Penetration Testing",
      "Internal Network Penetration Testing",
      "Active Directory Security Assessment",
      "Cloud Security Testing",
      "Red Team Assessment",
      "Ethical Hacking",
      "Security Testing",
      "NIS2 readiness security testing",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Penetration testing services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web & API penetration testing",
            url: `${siteConfig.url}/ro/testare-securitate-aplicatie-web/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-commerce / magazin online pentest",
            url: `${siteConfig.url}/ro/pentest-magazin-online/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "API vulnerability verification",
            url: `${siteConfig.url}/ro/verificare-vulnerabilitati-api/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Internal network security testing",
            url: `${siteConfig.url}/ro/testare-securitate-retea-interna/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "NIS2 readiness security testing Brașov",
            url: `${siteConfig.url}/ro/nis2-testare-securitate-brasov/`,
          },
        },
      ],
    },
    knowsAbout: [
      "OWASP Top 10",
      "OWASP ASVS",
      "OWASP WSTG",
      "PTES",
      "MITRE ATT&CK",
      "NIS2 readiness themes",
      "Shopify security testing",
      "WooCommerce security testing",
      "API security",
      "Pret test de penetrare",
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
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.github,
      siteConfig.social.site,
      siteConfig.social.kiwi,
    ],
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: ["en", "ro"],
    publisher: { "@id": PERSON_ID },
    about: { "@id": SERVICE_ID },
  };
}

/** Root graph: Person + ProfessionalService + WebSite interlinked for E-E-A-T. */
export function buildRootJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildPersonJsonLd(),
      buildProfessionalServiceJsonLd(),
      buildWebsiteJsonLd(),
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
    provider: { "@id": PERSON_ID },
    areaServed: {
      "@type": opts.areaType ?? "City",
      name: opts.areaName,
    },
    isRelatedTo: { "@id": SERVICE_ID },
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
