import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Petre Radu Cătălin",
  description:
    "Biography of Petre Radu Cătălin (Petre Radu), penetration tester in Brașov, Romania. Pentesting, bug bounty work, and practical security evaluation for teams across Romania.",
  alternates: { canonical: `${siteConfig.url}/about/` },
};

const extendedBio = [
  {
    heading: "Foundations",
    paragraph:
      "Petre Radu Cătălin is a penetration tester based in Brașov, Romania, currently working as a Penetration Tester at NTT DATA and founder of Kiwi Defence. His work focuses on practical assessment of web applications, infrastructure, and security controls, with attention to how real weaknesses can be exploited and remediated. For named expert engagements use petreraducatalin.com. For company platform services see kiwidefence.com.",
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
    <article>
      <PageHero
        eyebrow="Profile"
        title={
          <>
            About{" "}
            <em className="italic text-clay">Petre Radu Cătălin</em>
          </>
        }
        description="Full biography of Petre Radu Cătălin (Petre Radu) — offensive security professional focused on penetration testing, research, and practical security evaluation. Based in Brașov, Romania."
        meta={
          <>
            <span>Brașov, Romania</span>
            <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
            <span>Penetration Tester @ NTT DATA</span>
            <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
            <span>Founder, Kiwi Defence</span>
          </>
        }
      />

      <div className="container max-w-5xl pb-20 md:pb-28">
        <Reveal className="mt-14 md:mt-20">
          <figure className="overflow-hidden border border-line bg-surface-2">
            <Image
              src="/images/Stage.webp"
              alt="Petre Radu Cătălin presenting on stage at a cybersecurity conference"
              width={1672}
              height={941}
              className="aspect-[16/8] w-full object-cover object-right grayscale-[0.35] sepia-[0.05]"
              priority
            />
            <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              <span>On stage — cybersecurity conference</span>
              <span className="text-accent">Brașov, Romania</span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-16 md:mt-20">
          {extendedBio.map((section, i) => (
            <Reveal key={section.heading} delay={0.04 * i}>
              <section className="grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <div className="md:col-span-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl leading-tight tracking-[-0.01em] text-ink md:text-3xl">
                    {section.heading}
                  </h2>
                </div>
                <p className="max-w-[68ch] text-pretty text-base leading-relaxed text-body md:col-span-8">
                  {section.paragraph}
                </p>
              </section>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 md:mt-20">
          <section className="grid gap-6 border-t border-line-strong pt-8 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                Personal mission
              </p>
              <h2 className="mt-3 max-w-[16ch] text-balance font-serif text-3xl leading-[1.05] tracking-[-0.02em] text-ink md:text-4xl">
                Find what matters. Prove it. Fix it.
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="max-w-[68ch] text-pretty text-base leading-relaxed text-body">
                To identify critical vulnerabilities and deliver actionable
                defense — helping organizations understand their real exposure
                before attackers do, and to raise the bar for security practice
                in Romania and beyond.
              </p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <li key={skill}>
                    <Badge variant="outline" className="font-mono text-[10px]">
                      {skill}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>

        <Reveal className="mt-16 border-t border-line pt-8 md:mt-20">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button asChild size="lg">
              <Link href="/#contact">
                Work with me
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
            <Link
              href="/#projects"
              className="link-underline font-mono text-[10px] uppercase tracking-[0.16em] text-accent"
            >
              Selected work
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="link-underline font-mono text-[10px] uppercase tracking-[0.16em] text-muted"
            >
              {siteConfig.email}
            </a>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
