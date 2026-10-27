import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import type { KeywordLanding } from "@/data/seo-pages";
import { languagesForPath } from "@/data/hreflang";
import { ServiceLanding } from "@/components/service-landing";

export function keywordMetadata(page: KeywordLanding): Metadata {
  const languages = languagesForPath(page.path);

  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: {
      canonical: `${siteConfig.url}${page.path}`,
      languages: {
        en: languages.en,
        ro: languages.ro,
        "x-default": languages.en,
      },
    },
    openGraph: {
      type: "website",
      url: `${siteConfig.url}${page.path}`,
      title: page.metaTitle,
      description: page.metaDescription,
      locale: page.lang === "ro" ? "ro_RO" : "en_US",
      alternateLocale: page.lang === "ro" ? ["en_US"] : ["ro_RO"],
    },
  };
}

export function KeywordPage({ page }: { page: KeywordLanding }) {
  return (
    <ServiceLanding content={page} serviceSchema={page.serviceSchema} />
  );
}
