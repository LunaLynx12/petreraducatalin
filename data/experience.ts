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
      "Conduct vulnerability research and bug bounty testing on public programs.",
      "Focus on web application and API security, business logic flaws, and responsible disclosure.",
      "Use Burp Suite and related tooling to validate findings and communicate impact clearly.",
    ],
  },
  {
    company: "NTT DATA, Inc.",
    role: "Penetration Tester",
    period: "Nov 2025 - Present",
    location: "Romania · Remote",
    type: "Full-time",
    details: [
      "Perform penetration tests on enterprise web applications and infrastructure.",
      "Assess production environments to identify security weaknesses and validate risk.",
      "Provide actionable findings and remediation guidance to engineering and security teams.",
    ],
  },
  {
    company: "HackerOne",
    role: "Vulnerability Researcher",
    period: "May 2025 - Sep 2025",
    location: "Remote",
    type: "Freelance",
    details: [
      "Performed independent vulnerability research through bug bounty programs.",
      "Identified and reported issues such as XSS, IDOR, CSRF, and access control flaws.",
      "Worked through responsible disclosure and collaborated with program owners on remediation.",
    ],
  },
];

export const educationItems: EducationItem[] = [
  {
    institution: "Universitatea Transilvania din Brașov",
    degree: "Master's degree, Cyber Security",
    period: "2024 - 2026",
    details: [
      "Studied advanced topics in cyber defense, ethical hacking, cryptography, and secure software development.",
      "Worked with tools such as Wireshark, Burp Suite, Splunk, Wazuh, and Suricata.",
      "Participated in cybersecurity labs, practical simulations, and CTF-style exercises.",
    ],
  },
  {
    institution: "Universitatea Transilvania din Brașov",
    degree: "Bachelor of Engineering, Renewable Energy Systems",
    period: "2020 - 2024",
    details: [
      "Completed a bachelor's program in renewable energy systems.",
      "Worked on applied engineering projects involving system analysis and energy efficiency.",
    ],
  },
  {
    institution: "Google.org",
    degree: "Cybersecurity Seminars",
    period: "Mar 2025 - Jul 2025",
    details: [
      "Completed a cybersecurity training program focused on threat awareness, network protection, and practical SOC concepts.",
      "Covered topics including phishing, malware, IDS/IPS, cryptography, and vulnerability detection.",
    ],
  },
];

export const stats = [
  { value: "3", label: "Current roles" },
  { value: "2", label: "Degrees" },
  { value: "2+", label: "Years of work" },
  { value: "CTF", label: "Practice" },
] as const;
