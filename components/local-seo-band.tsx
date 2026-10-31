import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
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
      className="section-y"
    >
      <div className="container">
        <SectionHeader
          index="09"
          eyebrow="Services"
          id="hire-heading"
          title="Hire a penetration tester in Brașov"
          description={
            <>
              Looking for a{" "}
              <strong className="font-medium text-ink">pentester Brașov</strong>
              ,{" "}
              <strong className="font-medium text-ink">
                penetration tester Romania
              </strong>
              , or an ethical hacker nearby? Start on the page that matches your
              intent.
            </>
          }
          action={
            <Link
              href="/services/"
              className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent"
            >
              All services
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          }
        />

        <div className="grid gap-x-10 md:grid-cols-2">
          {links.map((link, i) => (
            <Reveal key={link.href} delay={0.04 * i}>
              <Link
                href={link.href}
                className="group flex items-start justify-between gap-5 border-t border-line py-6 transition-colors hover:border-accent"
              >
                <div>
                  <h3 className="font-serif text-2xl leading-tight text-ink transition-colors group-hover:text-accent">
                    {link.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-body">
                    {link.text}
                  </p>
                </div>
                <ArrowUpRight
                  className="mt-1 h-4 w-4 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            <Link
              href="/services/"
              className="transition-colors hover:text-ink"
            >
              All pentesting service pages
            </Link>
            <Link href="/for-ai/" className="transition-colors hover:text-ink">
              AI citation facts
            </Link>
            <Link href="/locations/" className="transition-colors hover:text-ink">
              Locations
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
