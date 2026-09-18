export interface Collaborator {
  slug: string;
  name: string;
  company: string;
  headline: string;
  title: string;
  specialty: string;
  image: string;
  description: string;
  bio: string[];
  contactLabel: string;
  linkedin?: string;
}

export const collaborators: Collaborator[] = [
  {
    slug: "marius-galmati",
    name: "Marius Galmati",
    company: "BITUP Technology",
    headline: "Founder, BITUP · Cybersecurity & Compliance Consultant",
    title: "IT & Cybersecurity Consultant",
    specialty: "IT governance, cyber risk management, ISO 27001 / NIS2 readiness, security controls",
    image: "/images/Marius.webp",
    description:
      "Ten+ years across systems, IT infrastructure, and ISO 27001 audit readiness; brings IT governance, cyber risk, and NIS2 compliance expertise to governance-heavy engagements.",
    bio: [
      "Marius Galmati has over ten years of experience in IT, built across local companies and a US Fortune 500 corporation. His professional path blends hands-on systems and IT infrastructure management with information security, governance, and compliance.",
      "He was part of the team that prepared the ISO 27001 audit, contributing to documentation and procedures, security controls implementation, and the development of business continuity plans. Direct involvement in infrastructure protection and internal process definition gave him an integrated perspective on the relationship between technology, risk, and organizational responsibility.",
      "He founded BITUP in 2020 to bring enterprise practices to Romanian companies, adapted to their size, resources, and objectives. His work emphasizes IT governance, cyber risk management, and supporting organizations in meeting the requirements of the NIS2 Directive.",
      "Through BITUP, he helps companies translate security and compliance requirements into clear policies, defined responsibilities, documented processes, and controls embedded in day-to-day operations. His approach is focused on protecting operations and building each organization's ability to demonstrate — to its clients, partners, and auditors — how it manages its security.",
    ],
    contactLabel: "Available on request",
    linkedin: "https://www.linkedin.com/in/nicolae-marius-galmati/",
  },
];