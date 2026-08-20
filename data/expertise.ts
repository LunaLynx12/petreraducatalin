import type { LucideIcon } from "lucide-react";
import {
  Crosshair,
  CloudCog,
  ShieldCheck,
  Radar,
} from "lucide-react";

export interface ExpertiseItem {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
}

export const expertiseItems: ExpertiseItem[] = [
  {
    icon: Crosshair,
    title: "Offensive Security",
    description:
      "Hands-on exploitation across the full attack surface - from web apps to the domain.",
    points: [
      "Web & API penetration testing (OWASP Top 10)",
      "Active Directory exploitation & privilege escalation",
      "Network security audits",
      "Red Team emulation aligned to MITRE ATT&CK",
      "Automated recon & exploit development (Python, Bash)",
    ],
  },
  {
    icon: CloudCog,
    title: "Cloud & AI Security",
    description:
      "Breaking and hardening modern, ephemeral attack surfaces before attackers do.",
    points: [
      "Multi-cloud assessments (AWS, Azure, GCP)",
      "IAM & identity misconfiguration exploitation",
      "AI/ML security evaluations",
      "Cloud incident response",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Governance",
    description:
      "Turning regulatory requirements into measurable, defensible security posture.",
    points: [
      "GDPR assessments & data protection reviews",
      "NIS2 implementation support",
      "Security policy review",
      "Technical risk assessment",
    ],
  },
  {
    icon: Radar,
    title: "Defensive Foundation",
    description:
      "Knowing the defender's playbook sharpens every offensive engagement.",
    points: [
      "SIEM / SOAR engineering (Splunk)",
      "Threat hunting & detection engineering",
      "Secure code review",
      "Purple-team collaboration",
    ],
  },
];