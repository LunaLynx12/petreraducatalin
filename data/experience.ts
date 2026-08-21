export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  details: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    company: "NTT DATA, Inc.",
    role: "Senior Penetration Tester",
    period: "Nov 2025 - Present",
    location: "Romania · Remote",
    type: "Enterprise",
    details: [
      "Lead enterprise penetration tests across production web applications, APIs, and Active Directory estates - identifying RCE, SQL injection, and broken access control at scale.",
      "Deliver full-chain attack simulations from unauthenticated foothold to domain compromise, mapping every gap to MITRE ATT&CK.",
      "Design and execute Red Team engagements combining cloud lateral movement (AWS, Azure, GCP) with on-premise AD exploitation.",
      "Build custom automation tooling that cut assessment turnaround by 30%.",
    ],
  },
  {
    company: "Self-Employed",
    role: "Penetration Tester (B2B2C)",
    period: "Nov 2023 - Nov 2025",
    location: "Romania · Remote",
    type: "Freelance",
    details: [
      "Delivered penetration tests for enterprise clients through agency partnerships - full-stack assessments covering web applications, APIs, and network infrastructure.",
      "Performed cloud security assessments on AWS and Azure environments, identifying IAM misconfigurations, exposed storage, and privilege escalation paths.",
      "Led Active Directory security audits for mid-market and enterprise clients, mapping attack chains from initial access to domain admin.",
      "Produced executive-ready reports with prioritized remediation guidance, building repeat business through actionable findings.",
    ],
  },
  {
    company: "Self-Employed",
    role: "Penetration Tester (B2C)",
    period: "Nov 2023 - Nov 2025",
    location: "Remote",
    type: "Freelance",
    details: [
      "Provided direct penetration testing services to businesses - web application security assessments, API testing, and infrastructure reviews.",
      "Discovered and responsibly disclosed XSS, IDOR, CSRF, and broken access control vulnerabilities across production SaaS platforms.",
      "Focused on business-logic abuse and access-control flaws that automated scanners miss.",
      "Partnered with vendors to validate and remediate findings end-to-end, building a track record of responsible disclosure.",
    ],
  },
  {
    company: "Intigriti",
    role: "Bug Bounty Hunter",
    period: "May 2026 - Present",
    location: "Remote",
    type: "Freelance",
    details: [
      "Vulnerability discovery on production systems through coordinated bug bounty programs.",
      "Focused on business-logic abuse, access-control flaws, and privilege escalation in SaaS platforms.",
      "Reported and triaged security findings with clear, actionable remediation guidance.",
    ],
  },
  {
    company: "HackerOne",
    role: "Vulnerability Researcher",
    period: "May 2025 - Sep 2025",
    location: "Remote",
    type: "Freelance",
    details: [
      "Discovered and responsibly disclosed XSS, IDOR, CSRF, and access control vulnerabilities.",
      "Prioritized impact and exploitability over severity-score theater.",
      "Partnered with vendors to validate and remediate findings end-to-end.",
    ],
  },
];

export const educationItems: EducationItem[] = [
  {
    institution: "Universitatea Transilvania din Brașov",
    degree: "Master's, Cyber Security",
    period: "2024 - 2026",
    details: [
      "Advanced cyber defense, red/blue team operations, and security auditing curriculum.",
      "CTF participation and applied security research projects.",
      "Google.org Cybersecurity Seminars (Mar 2025 - Jul 2025).",
    ],
  },
];

export const stats = [
  { value: "100+", label: "Certifications" },
  { value: "98+", label: "Skills" },
  { value: "4+", label: "Years Experience" },
  { value: "1000+", label: "LinkedIn Followers" },
] as const;