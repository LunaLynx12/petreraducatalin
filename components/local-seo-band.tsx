import Link from "next/link";
import { ArrowRight, MapPin, Shield } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const links = [
  {
    href: "/pentester-brasov/",
    title: "Pentester Brașov",
    text: "Named expert for Brașov companies that need a real penetration test.",
  },
  {
    href: "/red-team-brasov/",
    title: "Red Team Brașov",
    text: "Adversary-style offensive assessments aligned to MITRE ATT&CK.",
  },
  {
    href: "/offensive-security-brasov/",
    title: "Offensive Security Brașov",
    text: "Ethical hacking, security testing, and penetration testing from Brașov.",
  },
  {
    href: "/ro/testare-securitate-brasov/",
    title: "Testare de securitate Brașov",
    text: "Pagină în română pentru testare ofensivă și test de penetrare local.",
  },
];

export function LocalSeoBand() {
  return (
    <section
      id="hire"
      aria-labelledby="hire-heading"
      className="section-padding border-t border-border"
    >
      <div className="container">
        <SectionHeading
          eyebrow="hire_me"
          id="hire-heading"
          title="Hire a penetration tester in Brașov"
          description={
            <>
              Searching for a <strong className="text-foreground">pentester Brașov</strong>,{" "}
              <strong className="text-foreground">penetration tester Romania</strong>, or
              ethical hacker nearby? Start on the exact page that matches your intent.
            </>
          }
        />

        <div className="grid gap-4 md:grid-cols-2">
          {links.map((link, i) => (
            <Reveal key={link.href} delay={0.04 * i}>
              <Link
                href={link.href}
                className="group flex h-full flex-col rounded-xl border border-border bg-surface/60 p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow"
              >
                <div className="mb-3 flex items-center gap-2 text-primary">
                  {i < 2 ? (
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Shield className="h-4 w-4" aria-hidden="true" />
                  )}
                  <span className="font-mono text-xs uppercase tracking-widest">
                    local seo
                  </span>
                </div>
                <h3 className="font-mono text-lg font-semibold text-foreground group-hover:text-primary">
                  {link.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {link.text}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-sm text-primary">
                  Open page <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8 text-center">
          <p className="text-sm text-muted">
            Full list:{" "}
            <Link href="/services/" className="text-secondary underline underline-offset-2">
              all pentesting service pages
            </Link>
            {" · "}
            <Link href="/for-ai/" className="text-secondary underline underline-offset-2">
              AI citation facts
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
