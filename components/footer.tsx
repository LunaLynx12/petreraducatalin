"use client";

import Link from "next/link";
import { ArrowUp, Github, Linkedin, Globe } from "lucide-react";
import { NAV_LINKS, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { label: "LinkedIn - Petre Radu Cătălin", href: siteConfig.social.linkedin, icon: Linkedin },
  { label: "GitHub - LunaLynx12", href: siteConfig.social.github, icon: Github },
  { label: "kiwidefence.com", href: siteConfig.social.site, icon: Globe },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <p className="font-mono text-lg font-semibold">
              <span className="text-primary">Petre Radu Cătălin</span>{" "}
              <span className="text-muted">- Senior Offensive Security Professional</span>
            </p>
            <p className="max-w-xs text-sm text-muted">
              Penetration testing, Red Team operations, and Cloud &amp; AI
              security. 4+ years across enterprise, B2B2C, and B2C engagements. Based in Brașov, Romania.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="mb-4 font-mono text-sm uppercase tracking-widest text-primary">
              Navigate
            </h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-sm text-muted transition-colors hover:text-primary">
                  Blog Posts
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted transition-colors hover:text-primary">
                  Case Studies
                </Link>
              </li>
              <li>
                <a href="/rss.xml" className="text-sm text-muted transition-colors hover:text-primary">
                  RSS Feed
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 font-mono text-sm uppercase tracking-widest text-primary">
              Connect
            </h2>
            <ul className="space-y-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
            Back to top
          </Button>
        </div>
      </div>
    </footer>
  );
}