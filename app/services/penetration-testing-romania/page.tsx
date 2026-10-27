import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { romaniaService } from "@/data/services";
import { languagesForPath } from "@/data/hreflang";
import { ServiceLanding } from "@/components/service-landing";

const languages = languagesForPath(romaniaService.path);

export const metadata: Metadata = {
  title: { absolute: romaniaService.metaTitle },
  description: romaniaService.metaDescription,
  keywords: [
    "pentester Romania",
    "penetration tester Romania",
    "penetration testing Romania",
    "ethical hacker Romania",
    "pentesting Romania",
    "Petre Radu Cătălin",
  ],
  alternates: {
    canonical: `${siteConfig.url}${romaniaService.path}`,
    languages: {
      en: languages.en,
      ro: languages.ro,
      "x-default": languages.en,
    },
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}${romaniaService.path}`,
    title: romaniaService.metaTitle,
    description: romaniaService.metaDescription,
    locale: "en_US",
    alternateLocale: ["ro_RO"],
  },
};

export default function PenetrationTestingRomaniaPage() {
  return (
    <ServiceLanding
      content={romaniaService}
      serviceSchema={{
        name: "Penetration Testing in Romania",
        serviceType: "Penetration Testing",
        areaName: "Romania",
        areaType: "Country",
      }}
    />
  );
}
