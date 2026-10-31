"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const links = [
  { label: "Profile", href: "/#about", id: "about" },
  { label: "Work", href: "/#projects", id: "projects" },
  { label: "Capabilities", href: "/#expertise", id: "expertise" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Writing", href: "/#blog", id: "blog" },
  { label: "Services", href: "/services/", id: null },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const ids = links
      .map((link) => link.id)
      .filter((id): id is string => Boolean(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-line bg-canvas/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        aria-label="Main navigation"
        className="container flex h-20 items-center justify-between"
      >
        <Link
          href="/"
          className="group flex flex-col leading-none focus-visible:outline-none"
        >
          <span className="font-serif text-xl tracking-tight text-ink">
            Petre Radu
          </span>
          <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
            Cătălin · Offensive Security
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "link-underline font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-300",
                active === link.href
                  ? "text-ink"
                  : "text-muted hover:text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-accent ring-4 ring-accent/10"
            />
            Available
          </span>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-canvas transition-colors duration-300 hover:bg-accent"
          >
            Start a project
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:border-accent hover:text-accent lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </DialogTrigger>

          <DialogContent
            aria-describedby={undefined}
            className="inset-0 left-0 top-0 h-[100dvh] w-full max-w-none translate-x-0 translate-y-0 rounded-none border-0 bg-canvas p-0"
          >
            <DialogTitle className="sr-only">Site navigation</DialogTitle>
            <DialogDescription className="sr-only">
              Links to the main sections of the site.
            </DialogDescription>

            <div className="flex h-full flex-col">
              <div className="flex h-20 items-center border-b border-line px-5">
                <span className="font-serif text-xl text-ink">
                  Petre Radu
                </span>
              </div>

              <nav
                aria-label="Mobile navigation"
                className="flex flex-1 flex-col justify-center px-5"
              >
                {links.map((link, i) => (
                  <DialogClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4 border-b border-line py-5"
                    >
                      <span className="font-mono text-[10px] text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-4xl leading-none text-ink transition-colors group-hover:text-accent">
                        {link.label}
                      </span>
                    </Link>
                  </DialogClose>
                ))}
              </nav>

              <div className="border-t border-line p-5">
                <DialogClose asChild>
                  <Link
                    href="/#contact"
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center justify-between rounded-full bg-ink px-6 py-4 text-sm font-medium text-canvas transition-colors hover:bg-accent"
                  >
                    Start a project
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </DialogClose>
                <div className="mt-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  <span>{siteConfig.location.label}</span>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-ink">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </nav>
    </header>
  );
}
