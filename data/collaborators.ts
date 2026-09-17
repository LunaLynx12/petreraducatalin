export interface Collaborator {
  name: string;
  company: string;
  title: string;
  specialty: string;
  description: string;
  contactLabel: string;
  linkedin?: string;
}

export const collaborators: Collaborator[] = [
  {
    name: "Nicolae Marius Galmati",
    company: "BITUP Technology",
    title: "IT & Cybersecurity Consultant",
    specialty: "Cloud, compliance, security architecture, ISO 27001 / NIS2 readiness",
    description:
      "Supports scoped reviews, governance-focused assessments, and remediation validation for cloud, infrastructure, and compliance-heavy environments.",
    contactLabel: "Available on request",
    linkedin: "https://www.linkedin.com/in/nicolae-marius-galmati/",
  },
];
