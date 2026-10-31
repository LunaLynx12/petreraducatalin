import {
  ArrowUpRight,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/data/site";

const contactChannels = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/petreradu",
    href: siteConfig.social.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "LunaLynx12",
    href: siteConfig.social.github,
  },
  {
    icon: Globe,
    label: "Website",
    value: "petreraducatalin.com",
    href: siteConfig.social.site,
  },
  {
    icon: Globe,
    label: "Company",
    value: "kiwidefence.com",
    href: siteConfig.social.kiwi,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-night text-night-text"
    >
      <div className="container py-[clamp(80px,10vw,144px)]">
        <SectionHeader
          index="10"
          eyebrow="Contact"
          id="contact-heading"
          tone="dark"
          title="Work with Petre Radu Cătălin"
          description="Available for remote EU engagements and on-site work in Romania. Based in Brașov, with clients across Romania, the Netherlands, Austria, and Finland."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-night-muted">
                Direct line
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 block break-all font-serif text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight text-night-text transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>
            </Reveal>

            <Reveal delay={0.08} className="mt-10">
              <div className="border-t border-night-line">
                {contactChannels.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={href}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center justify-between gap-4 border-b border-night-line py-4"
                  >
                    <span className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-night-muted">
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {label}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-right text-sm text-night-text transition-colors group-hover:text-white">
                      {value}
                      <ArrowUpRight
                        className="h-3.5 w-3.5 text-night-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12} className="mt-8">
              <p className="flex items-start gap-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-night-muted">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                Brașov, Romania · CET (UTC+2) · RO / NL / AT / FI
              </p>
              <p className="mt-6 border border-night-line p-4 text-sm leading-relaxed text-night-muted">
                <span className="font-medium text-night-text">
                  Engagement type:
                </span>{" "}
                solo or team-led assessment. I can lead the engagement directly
                or coordinate with trusted specialists for broader coverage.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="bg-canvas p-6 text-ink md:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
