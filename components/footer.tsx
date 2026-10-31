import Link from "next/link";
import { ArrowUp, Github, Linkedin } from "lucide-react";
import { NAV_LINKS, SERVICE_LINKS, siteConfig } from "@/data/site";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function DevToIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.796 11.22l1.256-5.22H10.5v4.5h2.114c.39 0 .93-.07 1.182-.48.22-.36.176-.81-.002-1.12zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.8 6.6h3.9v1.5H9.3v1.8h2.1v1.5H9.3V13h2.4v1.5H7.8V6.6zm5.1 0h4.2v1.5h-2.7v1.5h2.5v1.5h-2.5v1.8h2.7V14.5h-4.2V6.6zm1.8 3.3v1.5h.9V9.9h-.9z" />
    </svg>
  );
}

function RedditIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const findMeOn = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin, handle: "petreradu" },
  { label: "GitHub", href: siteConfig.social.github, icon: Github, handle: "LunaLynx12" },
  { label: "X", href: siteConfig.social.x, icon: XIcon, handle: "@petreraducata" },
  { label: "Dev.to", href: siteConfig.social.devto, icon: DevToIcon, handle: "petreraducatalin" },
  { label: "Reddit", href: siteConfig.social.reddit, icon: RedditIcon, handle: "petreraducatalin" },
  { label: "YouTube", href: siteConfig.social.youtube, icon: YouTubeIcon, handle: "@PetreRaduCatalin" },
];

const footerServices = SERVICE_LINKS.slice(0, 8);

export function Footer() {
  return (
    <footer className="bg-night text-night-text">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-night-muted">
              Offensive security · Brașov, Romania
            </p>
            <p className="mt-6 font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] tracking-[-0.03em]">
              Petre Radu{" "}
              <span className="italic text-night-muted">Cătălin</span>
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-night-muted">
              Penetration testing for web, cloud, and identity-heavy
              environments. Working with teams across Romania, the Netherlands,
              Austria, and Finland.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-8 inline-flex border-b border-night-line pb-1 font-serif text-2xl text-night-text transition-colors hover:border-night-text"
            >
              {siteConfig.email}
            </a>
          </div>

          <nav aria-label="Footer navigation" className="lg:col-span-3">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-night-muted">
              Site index
            </h2>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-night-muted transition-colors hover:text-night-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-night-muted transition-colors hover:text-night-text"
                >
                  Case studies
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-night-muted transition-colors hover:text-night-text"
                >
                  Full biography
                </Link>
              </li>
              <li>
                <a
                  href="/rss.xml"
                  className="text-sm text-night-muted transition-colors hover:text-night-text"
                >
                  RSS feed
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Services" className="lg:col-span-2">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-night-muted">
              Services
            </h2>
            <ul className="mt-5 space-y-2.5">
              {footerServices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-night-muted transition-colors hover:text-night-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services/"
                  className="text-sm text-night-text transition-colors hover:text-white"
                >
                  All services →
                </Link>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-night-muted">
              Elsewhere
            </h2>
            <ul className="mt-5 space-y-2.5">
              {findMeOn.map(({ label, href, icon: Icon, handle }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="group inline-flex items-center gap-2 text-sm text-night-muted transition-colors hover:text-night-text"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{label}</span>
                    <span className="text-[10px] text-night-text/55 hidden xl:inline">
                      {handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-night-line pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-night-muted">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
          <a
            href="#main"
            className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-night-muted transition-colors hover:text-night-text"
          >
            Back to top
            <ArrowUp
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
