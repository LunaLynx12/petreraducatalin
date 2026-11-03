import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Trophy,
  BrainCircuit,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const badges = [
  { icon: ShieldCheck, label: "eCPPT · Penetration Tester" },
  { icon: Trophy, label: "Bug Bounty · Intigriti / HackerOne" },
  { icon: BrainCircuit, label: "MSc Cyber Security · UniTBv" },
];

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative overflow-hidden pt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-40"
      />

      <div className="container relative z-10 grid items-center gap-14 pb-16 pt-14 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-24">
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            <span className="inline-flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent ring-4 ring-accent/10"
              />
              Available for engagements
            </span>
            <span
              aria-hidden="true"
              className="hidden h-3 w-px bg-line-strong sm:block"
            />
            <span>{siteConfig.location.label}</span>
          </div>

          <h1 className="mt-8 font-serif text-[clamp(3.5rem,8.5vw,7rem)] leading-[0.9] tracking-[-0.04em] text-ink">
            <span className="block">Petre Radu</span>
            <span className="block italic text-clay">Cătălin</span>
          </h1>

          <p className="mt-8 max-w-[22ch] text-pretty font-serif text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.08] text-ink-soft">
            I find what attackers would — and help you close it.
          </p>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-body">
            Penetration testing for web, API, cloud, and identity-heavy
            environments. Based in Brașov, working with teams across Romania and
            the EU.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link href="/#contact">
                Start a project
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#projects">
                View selected work
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <ul
            aria-label="Credentials and achievements"
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-5"
          >
            {badges.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted"
              >
                <Icon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto w-full max-w-[420px] lg:ml-auto">
            <div
              aria-hidden="true"
              className="absolute -inset-3 border border-line-strong/60"
            />

            <figure className="relative overflow-hidden bg-surface-2 shadow-portrait">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/Profile.webp"
                  alt="Petre Radu Cătălin - Penetration Tester based in Brașov, Romania"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover object-top grayscale-[0.55] sepia-[0.06] contrast-[1.03]"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent p-5">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-canvas/70">
                    Penetration Tester
                  </p>
                  <p className="mt-1 font-serif text-xl leading-none text-canvas">
                    Brașov, Romania
                  </p>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-canvas/70">
                  eCPPT
                </span>
              </figcaption>
            </figure>

            <div className="absolute -bottom-6 -left-6 hidden border border-line bg-surface px-4 py-3 shadow-glow-sm sm:block">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                Currently
              </p>
              <p className="mt-1 text-sm font-medium text-ink">
                Penetration Tester @ NTT DATA
              </p>
            </div>

            <p className="absolute -right-9 top-1/2 hidden -translate-y-1/2 rotate-90 font-mono text-[9px] uppercase tracking-[0.24em] text-muted lg:block">
              Est. 2025 · EU
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
