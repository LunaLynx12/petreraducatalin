import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Target } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About Petre Radu Cătălin",
  description: "Full biography of Petre Radu Cătălin (Petre Radu) - offensive security professional focused on penetration testing, bug bounty work, and practical security evaluation. Based in Brașov, Romania.",
  alternates: { canonical: `${siteConfig.url}/about/` },
};

const extendedBio = [
  {
    heading: "Foundations",
    paragraph:
      "Petre Radu Cătălin is an offensive security professional based in Brașov, Romania, currently working as a Penetration Tester at NTT DATA. His work focuses on practical assessment of web applications, infrastructure, and security controls, with attention to how real weaknesses can be exploited and remediated.",
  },
  {
    heading: "Education",
    paragraph:
      "He is currently pursuing a Master's degree in Cyber Security at Universitatea Transilvania din Brașov (2024-2026), building on a Bachelor's in Renewable Energy Systems completed there between 2020 and 2024. His studies include cyber defense, ethical hacking, cryptography, secure software development, and applied security analysis.",
  },
  {
    heading: "Training and research",
    paragraph:
      "Petre has participated in Google.org Cybersecurity Seminars, worked through security labs and CTF-style exercises, and developed hands-on practice with tools such as Wireshark, Burp Suite, Splunk, Wazuh, and Suricata. That mix of academic study and practical training shapes how he approaches testing and reporting today.",
  },
  {
    heading: "Current work",
    paragraph:
      "At NTT DATA, he performs penetration testing on production systems and provides findings in a way that connects technical risk with actionable remediation. Outside of that role, he also continues security research through bug bounty work on Intigriti and HackerOne, focusing on real-world exploitability and responsible disclosure.",
  },
  {
    heading: "What I stand for",
    paragraph:
      "His approach is practical and evidence-based: identify the issues that matter, explain the risk clearly, and help teams move from vulnerable to defended with a realistic remediation path. That mindset is at the center of his offensive security work.",
  },
];

const coreSkills = [
  "Penetration Testing",
  "Red Team Operations",
  "Active Directory Security",
  "Cloud Security (AWS, Azure, GCP)",
  "AI Security Evaluations",
  "MITRE ATT&CK",
  "Malware Analysis",
  "GDPR & NIS2",
];

export default function AboutPage() {
  return (
    <article className="section-padding">
      <div className="container max-w-4xl">
        <Reveal>
          <Link
            href="/#about"
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            back_to_home
          </Link>
          <h1 className="font-mono text-3xl font-bold text-foreground sm:text-5xl">
            About <span className="text-gradient-green">Petre Radu Cătălin</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Full biography of Petre Radu Cătălin (Petre Radu) - offensive
            security professional focused on penetration testing, research, and
            practical security evaluation. Based in Brașov, Romania.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="neon-border overflow-hidden rounded-2xl bg-surface">
            <Image
              src="/images/Stage.webp"
              alt="Petre Radu Cătălin presenting on stage at a cybersecurity conference"
              width={1672}
              height={941}
              className="aspect-[16/7] w-full object-cover object-right"
              priority
            />
          </div>
        </Reveal>

        <div className="mt-12 space-y-10">
          {extendedBio.map((section, i) => (
            <Reveal key={section.heading} delay={0.04 * i}>
              <section>
                <h2 className="mb-3 font-mono text-xl font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}. {section.heading}
                </h2>
                <p className="text-base leading-relaxed text-foreground/85">
                  {section.paragraph}
                </p>
              </section>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14">
          <div className="neon-border rounded-2xl bg-surface/70 p-6 md:p-8">
            <h2 className="mb-2 flex items-center gap-2 font-mono text-xl font-semibold text-primary">
              <Target className="h-5 w-5" aria-hidden="true" />
              Personal Mission
            </h2>
            <p className="text-base leading-relaxed text-foreground/85">
              To identify critical vulnerabilities and deliver actionable
              defense - helping organizations understand their real exposure
              before attackers do, and to raise the bar for security practice in
              Romania and beyond.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {coreSkills.map((skill) => (
                <Badge key={skill} className="font-mono">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-6 py-3 font-mono text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
          >
            Work with me
          </Link>
        </Reveal>
      </div>
    </article>
  );
}