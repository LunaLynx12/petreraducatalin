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
    name: "TryHackMe Junior Penetration Tester (PT1)",
    issuer: "TryHackMe",
    icon: "thm",
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
    result: "Holo Tier",
    highlight: true,
  },
  {
    event: "TryHackMe Industrial Intrusion CTF",
    result: "Team Rank 6 / 20,220",
    highlight: false,
  },
  {
    event: "TryHackMe Honeynet Collapse CTF",
    result: "Solo Rank 66 / 960",
    highlight: false,
  },
];