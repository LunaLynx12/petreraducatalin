import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Target } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About Petre Radu Cătălin",
  description: `Full biography of Petre Radu Cătălin (Petre Radu) - Penetration Tester at NTT DATA, offensive security professional based in Brașov, Romania.`,
  alternates: { canonical: `${siteConfig.url}/about/` },
};

const extendedBio = [
  {
    heading: "Foundations",
    paragraph:
      "Petre Radu Cătălin - known to clients and colleagues simply as Petre Radu - is an offensive security professional from Brașov, Romania, currently working as a Penetration Tester at NTT DATA. His security journey began with a relentless curiosity about how systems actually break: not in theory, not in slideware, but under real attack. That curiosity took him through a Master's degree in Cyber Security at Universitatea Transilvania din Brașov, where he studied advanced cyber defense, red and blue team operations, and the auditing discipline that underpins every serious security career.",
  },
  {
    heading: "The Master's years",
    paragraph:
      "Between 2024 and 2026, the Master's programme at Universitatea Transilvania din Brașov became the laboratory where Petre Radu converted academic knowledge into operator skill. The curriculum covered advanced cyber defense techniques, adversarial operations, and security auditing - but the real growth came from the applied work: CTF competitions, hands-on security audits, and the Google.org Cybersecurity Seminars he completed between March and July 2025. The seminars gave him a direct line into the practical, defensive-minded thinking that shapes how he runs offensive engagements today.",
  },
  {
    heading: "Enterprise penetration testing",
    paragraph:
      "At NTT DATA he leads penetration tests against production environments - critical web applications, APIs, and Active Directory estates. His work regularly surfaces remote code execution, SQL injection, and broken access control issues, and he delivers findings alongside remediation guidance that security teams can act on immediately. Beyond individual vulnerabilities, Petre designs full-chain Active Directory attack simulations, walking the path from unauthenticated foothold to domain compromise so that defenders can see their estate the way an adversary does.",
  },
  {
    heading: "The bug bounty grind",
    paragraph:
      "Alongside enterprise work, Petre Radu hunts vulnerabilities as a Bug Bounty Hunter on Intigriti and as a Vulnerability Researcher on HackerOne. Responsible disclosure is more than a professional obligation for him - it is a training environment that no lab can reproduce. Production systems do not care about intended configurations or documented behavior; they care about edge cases, business logic, and the gap between design and reality. That freelance body of work has sharpened his ability to triage impact quickly and communicate with vendors precisely.",
  },
  {
    heading: "The AI security frontier",
    paragraph:
      "The fastest-growing part of his practice is AI security. Petre tests LLM applications for prompt injection - both direct and indirect through retrieved content - as well as data exfiltration through output channels and excessive agency in tool-calling systems. He treats AI evaluation with the same rigor as web application testing: a threat model, a methodology, and a remediation plan. It is a field he believes every penetration tester must learn, and he writes about it regularly on this site.",
  },
  {
    heading: "Compliance and governance",
    paragraph:
      "Security does not exist in a vacuum, so Petre's scope includes the regulatory layer: GDPR assessments, NIS2 implementation support, security policy review, and technical risk assessment. His conviction is that compliance frameworks only earn their cost when they translate into real, measurable security posture - which means his compliance work always starts with what the attacker can actually do, not with what the checkbox says.",
  },
  {
    heading: "Continuous learning",
    paragraph:
      "With more than 100 certifications - from TryHackMe's Junior Penetration Tester path and OpenAI's Cyber Practitioner programme to Microsoft's AI Skills Fest and AZ-700 - Petre treats certification not as decoration but as a structured way to force himself into unfamiliar territory. When he is not testing or studying, he competes in CTF competitions, where results like a team rank of 6 out of 20,220 in TryHackMe's Industrial Intrusion CTF keep him honest.",
  },
  {
    heading: "What I stand for",
    paragraph:
      "At the core of everything is a single conviction: real risk over noise. Organizations drown in vulnerability scans and compliance reports; what they need is someone who can say clearly what will actually hurt them, prove it safely, and show them exactly how to fix it. That is the professional Petre Radu Cătălin tries to be every single day - for enterprise clients, for the companies whose programs he hunts on, and for the wider security community he writes for.",
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
            Full biography of Petre Radu Cătălin (Petre Radu) - Penetration
            Tester at NTT DATA and offensive security professional based in
            Brașov, Romania.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="neon-border overflow-hidden rounded-2xl bg-surface">
            <Image
              src="/images/photo-placeholder.svg"
              alt="Petre Radu Cătălin - professional photo, Penetration Tester based in Brașov, Romania"
              width={1024}
              height={640}
              className="aspect-[16/7] w-full object-cover"
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