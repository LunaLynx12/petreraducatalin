export interface Certification {
  name: string;
  issuer: string;
  icon: string;
}

export interface CtfAchievement {
  event: string;
  result: string;
  highlight: boolean;
}

export const certifications: Certification[] = [
  {
    name: "eLearnSecurity Certified Penetration Tester (eCPPT)",
    issuer: "INE / eLearnSecurity",
    icon: "ine",
  },
  {
    name: "OpenAI Cyber Practitioner",
    issuer: "OpenAI · PartnerU",
    icon: "openai",
  },
  {
    name: "Microsoft AI Skills Fest 2026",
    issuer: "Microsoft",
    icon: "msft",
  },
  {
    name: "AZ-700: Azure Networking Solutions",
    issuer: "Microsoft Certified",
    icon: "azure",
  },
  {
    name: "Teaching the AI Fluency Framework",
    issuer: "Anthropic",
    icon: "anthropic",
  },
  {
    name: "Puppet Environment Lab",
    issuer: "Skillsoft",
    icon: "puppet",
  },
  {
    name: "Google.org Cybersecurity Seminars",
    issuer: "Google.org",
    icon: "google",
  },
];

export const ctfAchievements: CtfAchievement[] = [
  {
    event: "HackTheBox Season 9",
    result: "Participation",
    highlight: true,
  },
  {
    event: "TryHackMe Industrial Intrusion CTF",
    result: "Participation",
    highlight: false,
  },
  {
    event: "TryHackMe Honeynet Collapse CTF",
    result: "Participation",
    highlight: false,
  },
];