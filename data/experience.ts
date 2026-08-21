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
    company: "Intigriti",
    role: "Bug Bounty Hunter",
    period: "May 2026 - Present",
    location: "Remote",
    type: "Freelance",
    details: [
      "Discovered 14 high-impact vulnerabilities across production SaaS platforms - including 3 critical IDOR chains leading to cross-tenant data exposure.",
      "Triaged findings by real-world exploitability rather than CVSS score, prioritizing business-logic flaws and privilege escalation paths that scanners miss.",
      "Coordinated disclosure with vendor security teams across 8 programs, achieving 100% confirmation rate on reported criticals.",
      "Mapped attack surfaces across authentication, authorization, and API layers using Burp Suite Pro, ffuf, and custom fuzzing wordlists.",
    ],
  },
  {
    company: "NTT DATA, Inc.",
    role: "Senior Penetration Tester",
    period: "Nov 2025 - Present",
    location: "Romania · Remote",
    type: "Enterprise",
    details: [
      "Led 12 enterprise penetration tests across production web applications, APIs, and Active Directory estates - identifying 47 critical and high-severity findings including RCE, SQLi, and broken access control.",
      "Architected full-chain attack simulations from unauthenticated foothold to domain compromise, mapping every technique to MITRE ATT&CK and delivering remediation playbooks to SOC teams.",
      "Designed cross-cloud lateral movement paths chaining AWS IAM misconfigs with on-premise AD exploitation - reducing client attack surface by 60% within 90 days of remediation.",
      "Built Python and Bash automation toolkit that cut assessment turnaround by 30% - automated subdomain enumeration, credential harvesting, and report generation across concurrent engagements.",
    ],
  },
  {
    company: "HackerOne",
    role: "Vulnerability Researcher",
    period: "May 2025 - Sep 2025",
    location: "Remote",
    type: "Freelance",
    details: [
      "Discovered and disclosed 9 vulnerabilities across production applications - XSS, IDOR, CSRF, and access control flaws - triaged by impact over severity-score theater.",
      "Chained low-severity findings into high-impact attack paths, escalating 4 reports from informational to critical after demonstrating real-world exploitability.",
      "Partnered with vendor security teams to validate remediation within SLA, building a 100% disclosure compliance record across all submitted reports.",
    ],
  },
  {
    company: "Self-Employed",
    role: "Penetration Tester (B2B2C)",
    period: "Jun 2024 - Oct 2025",
    location: "Romania · Remote",
    type: "Freelance",
    details: [
      "Delivered 18 penetration tests for enterprise clients through tier-one security consultancy partnerships - full-stack assessments covering web applications, APIs, and network infrastructure.",
      "Performed cloud security assessments on AWS and Azure environments, identifying IAM privilege escalation paths, exposed S3 buckets, and over-permissive role assumptions.",
      "Led Active Directory security audits for mid-market and enterprise clients, mapping attack chains from initial foothold to domain admin using BloodHound, Impacket, and Kerberos exploitation.",
      "Produced executive-ready reports with prioritized remediation guidance, driving an 85% repeat business rate across 6 agency partnerships.",
    ],
  },
  {
    company: "Self-Employed",
    role: "Penetration Tester (B2C)",
    period: "Nov 2023 - May 2024",
    location: "Remote",
    type: "Freelance",
    details: [
      "Delivered 12 penetration tests directly to businesses - web application security assessments, API testing, and infrastructure reviews across fintech, e-commerce, and SaaS verticals.",
      "Identified business-logic flaws and access-control vulnerabilities that automated scanners miss - including 3 critical broken access control issues leading to privilege escalation.",
      "Established responsible disclosure workflows with 9 vendors, achieving 100% remediation confirmation on reported findings and building a track record of trusted partnerships.",
    ],
  },
];

export const educationItems: EducationItem[] = [
  {
    institution: "Universitatea Transilvania din Brașov",
    degree: "Master's, Cyber Security",
    period: "2024 - 2026",
    details: [
      "Completed advanced offensive curriculum: red team operations, network exploitation, security auditing, and adversarial simulation under Dr. ing. Radu-Emil Precup.",
      "Achieved team rank 6 out of 20,220 teams in TryHackMe Industrial Intrusion CTF - top 0.03% field placement.",
      "Selected for Google.org Cybersecurity Seminars (Mar 2025 - Jul 2025) - competitive programme focused on applied defensive thinking and threat analysis.",
    ],
  },
];

export const stats = [
  { value: "100+", label: "Certifications" },
  { value: "98+", label: "Skills" },
  { value: "4+", label: "Years Experience" },
  { value: "1000+", label: "LinkedIn Followers" },
] as const;
