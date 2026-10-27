import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { brasovService } from "@/data/services";
import { languagesForPath } from "@/data/hreflang";
import { ServiceLanding } from "@/components/service-landing";

const languages = languagesForPath(brasovService.path);

export const metadata: Metadata = {
  title: { absolute: brasovService.metaTitle },
  description: brasovService.metaDescription,
  keywords: [
    "penetration tester Brașov",
    "penetration tester Brasov",
    "pentester Brașov",
    "pentester Brasov",
    "pentesting Brașov",
    "pentesting Brasov",
    "ethical hacker Brașov",
    "Petre Radu Cătălin",
  ],
  alternates: {
    canonical: `${siteConfig.url}${brasovService.path}`,
    languages: {
      en: languages.en,
      ro: languages.ro,
      "x-default": languages.en,
    },
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}${brasovService.path}`,
    title: brasovService.metaTitle,
    description: brasovService.metaDescription,
    locale: "en_US",
    alternateLocale: ["ro_RO"],
  },
};

export default function PenetrationTestingBrasovPage() {
  return (
    <ServiceLanding
      content={brasovService}
      serviceSchema={{
        name: "Penetration Testing in Brașov",
        serviceType: "Penetration Testing",
        areaName: "Brașov",
        areaType: "City",
      }}
    />
  );
}
