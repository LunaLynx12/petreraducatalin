export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  repo?: string;
  demo?: string;
  private?: boolean;
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "malwarepeek",
    title: "MalwarePeek",
    subtitle: "PE File Analyzer for Static Malware Analysis",
    description:
      "MalwarePeek is a Python-based portable executable analyzer built for malware analysts and reverse engineers. It parses PE headers, fingerprints packers, and scans samples against YARA rules - then generates clean HTML reports for triage.",
    tags: ["Python", "Malware Analysis", "Reverse Engineering"],
    repo: "https://github.com/LunaLynx12/MalwarePeek",
    highlights: [
      "Deep PE header parsing: DOS, NT, optional header, sections, imports & exports.",
      "Packer detection heuristics for UPX, Themida, ASPack and others.",
      "YARA rule scanning with embedded rule packs.",
      "Self-contained HTML report generation for distribution to analysts.",
    ],
  },
  {
    slug: "signature-stealer",
    title: "Signature Stealer",
    subtitle: "Educational PoC - Authenticode Signature Extraction",
    description:
      "A focused educational proof-of-concept that inspects authenticated code-signing metadata inside signed PE files. It demonstrates how signature blocks remain queryable and how tooling can surface embedded certificate chains for forensic review.",
    tags: ["Python", "Digital Forensics", "Reverse Engineering"],
    repo: "https://github.com/LunaLynx12",
    highlights: [
      "Extracts Authenticode signature metadata from signed binaries.",
      "Parses embedded certificate chains and signing timestamps.",
      "Purpose-built for education: shows why signature metadata is not trust.",
      "Small, dependency-light codebase, easy to audit.",
    ],
  },
  {
    slug: "pentest-automation-toolkit",
    title: "Custom Pentest Automation Toolkit",
    subtitle: "Recon & Vulnerability-Scanning Automation",
    description:
      "An internal toolkit of Python and Bash scripts that automate reconnaissance, endpoint enumeration and vulnerability scanning. Used to deliver faster, repeatable assessments and cut end-to-end testing time by roughly 30% at NTT DATA.",
    tags: ["Python", "Bash", "Automation", "Offensive Security"],
    private: true,
    highlights: [
      "Automated subdomain enumeration and service fingerprinting.",
      "Parallelized scanning orchestration across internal tooling.",
      "Structured, timestamped report output for client deliverables.",
      "Reproducible playbooks for repeat assessments.",
    ],
  },
];