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

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: { canonical: `${siteConfig.url}/` },
  openGraph: {
    type: "profile",
    url: siteConfig.url,
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
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