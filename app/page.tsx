import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Hero } from "@/components/hero";
import { LocationTicker } from "@/components/location-ticker";
import { ProjectsSection } from "@/components/projects-section";
import { AboutSection } from "@/components/about-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { ExperienceSection } from "@/components/experience-section";
import { CredentialsSection } from "@/components/credentials-section";
import { ClientsLocationsSection } from "@/components/clients-locations-section";
import { TrustedCollaboratorsSection } from "@/components/trusted-collaborators";
import { BlogSection } from "@/components/blog-section";
import { LocalSeoBand } from "@/components/local-seo-band";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: { absolute: "Penetration Tester Brașov | Petre Radu Cătălin" },
  description: siteConfig.description,
  alternates: { canonical: `${siteConfig.url}/` },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
    images: [
      {
        url: `${siteConfig.url}/images/og.png?v=2`,
        width: 1200,
        height: 630,
        alt: "Petre Radu Cătălin - Penetration Tester based in Brașov, Romania",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <LocationTicker />
      <ProjectsSection />
      <AboutSection />
      <ExpertiseSection />
      <ExperienceSection />
      <CredentialsSection />
      <ClientsLocationsSection />
      <TrustedCollaboratorsSection />
      <BlogSection />
      <LocalSeoBand />
      <ContactSection />
    </>
  );
}
