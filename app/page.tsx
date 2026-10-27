import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ToolsSection } from "@/components/tools-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { TrustedCollaboratorsSection } from "@/components/trusted-collaborators";
import { LocalSeoBand } from "@/components/local-seo-band";
import { ClientsLocationsSection } from "@/components/clients-locations-section";

export const metadata: Metadata = {
  title: { absolute: "Penetration Tester Brașov | Petre Radu Cătălin" },
  description: siteConfig.description,
  alternates: { canonical: `${siteConfig.url}/` },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <LocalSeoBand />
      <ClientsLocationsSection />
      <AboutSection />
      <TrustedCollaboratorsSection />
      <ExpertiseSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ToolsSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}