import Script from "next/script";
import { siteConfig } from "@/data/site";

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

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    jobTitle: siteConfig.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: "NTT DATA",
    },
    url: siteConfig.url,
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.github,
      siteConfig.social.site,
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universitatea Transilvania din Brașov",
    },
    knowsAbout: [
      "Penetration Testing",
      "Red Team Operations",
      "Active Directory Security",
      "Cloud Security",
      "AI Security",
      "MITRE ATT&CK Framework",
      "GDPR Compliance",
      "NIS2 Directive",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brașov",
      addressCountry: "RO",
    },
  };

  return <JsonLd data={data} />;
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