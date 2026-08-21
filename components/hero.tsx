import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Trophy, BrainCircuit } from "lucide-react";
import { Particles } from "@/components/particles";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const badges = [
  { icon: ShieldCheck, label: "OSCP-Level PT Experience" },
  { icon: Trophy, label: "HackTheBox Holo Tier" },
  { icon: BrainCircuit, label: "OpenAI Cyber Practitioner" },
];

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <Particles />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-60"
      />

      <div className="container relative z-10 grid items-center gap-12 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:py-24">
        <div>
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Available for engagements - {siteConfig.location.label}
            </p>
          </Reveal>

          <h1 className="font-mono text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <Reveal delay={0.05}>
              <span className="text-gradient-green glow-text">Petre Radu</span>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="text-foreground"> Cătălin</span>
            </Reveal>
          </h1>

          <Reveal delay={0.15}>
            <p className="mt-4 font-mono text-sm text-secondary sm:text-base">
              Senior Penetration Tester @ NTT DATA
              <span
                aria-hidden="true"
                className="ml-1.5 inline-block h-4 w-2 translate-y-0.5 bg-primary animate-blink"
              >
                &nbsp;
              </span>
            </p>
            <p className="mt-3 text-lg text-foreground/90 sm:text-xl">
              Offensive Security · Red Team · Cloud &amp; AI Security
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              I&apos;m <strong className="font-semibold text-foreground">Petre Radu Cătălin</strong>, a Senior Penetration
              Tester with 4+ years of offensive security experience spanning
              enterprise, B2B2C, and B2C environments. I break Active Directory
              forests, cloud estates, and complex web applications - then
              deliver the remediation plan that closes the gap.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="font-mono">
                <Link href="#projects">
                  View My Work <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-10 flex flex-wrap items-center gap-3" aria-label="Credentials and achievements">
              {badges.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/70 px-3 py-2 text-xs text-muted transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mx-auto w-full max-w-sm">
          <figure className="neon-border relative overflow-hidden rounded-2xl bg-surface">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/photo-placeholder.webp"
                alt="Petre Radu Cătălin - Penetration Tester based in Brașov, Romania"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 384px"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/85 to-transparent px-4 py-3 font-mono text-xs">
              <span className="text-primary">● ONLINE</span>
              <span className="text-muted">situated: BRASOV, RO</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}