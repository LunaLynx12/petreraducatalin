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
    role: "Penetration Tester",
    period: "Nov 2025 - Present",
    location: "Romania · Remote",
    type: "Enterprise",
    details: [
      "Lead enterprise penetration tests, identifying RCE, SQL injection and broken access control issues across production applications.",
      "Deliver full-chain Active Directory attack simulations from unauthenticated foothold to domain compromise.",
      "Build custom automation scripts that cut assessment turnaround by 30%.",
    ],
  },
  {
    company: "Intigriti",
    role: "Bug Bounty Hunter",
    period: "May 2026 - Present",
    location: "Remote",
    type: "Freelance",
    details: [
      "Freelance vulnerability discovery on production systems through coordinated programs.",
      "Reported and triaged security flaws with clear, actionable remediation guidance.",
      "Focused on business-logic abuse and access-control flaws in SaaS platforms.",
    ],
  },
  {
    company: "HackerOne",
    role: "Vulnerability Researcher",
    period: "May 2025 - Sep 2025",
    location: "Remote",
    type: "Freelance",
    details: [
      "Discovered and responsibly disclosed XSS, IDOR, CSRF and access control vulnerabilities.",
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
  { value: "2+", label: "Years Experience" },
  { value: "1000+", label: "LinkedIn Followers" },
] as const;