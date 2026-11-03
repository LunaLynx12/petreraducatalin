"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

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

  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

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

  // While the menu is open: lock scrolling, handle Escape and trap Tab focus.
  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
    triggerRef.current?.focus();
  }

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

        <button
          ref={triggerRef}
          type="button"
          aria-label="Open menu"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:border-accent hover:text-accent lg:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>

        {open ? (
          <div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-0 z-[60] bg-canvas lg:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex h-20 items-center justify-between border-b border-line px-5">
                <span className="font-serif text-xl text-ink">
                  Petre Radu
                </span>
                <button
                  ref={closeRef}
                  type="button"
                  aria-label="Close menu"
                  onClick={closeMenu}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <nav
                aria-label="Mobile navigation"
                className="flex flex-1 flex-col justify-center px-5"
              >
                {links.map((link, i) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex items-baseline gap-4 border-b border-line py-5"
                  >
                    <span className="font-mono text-[10px] text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-4xl leading-none text-ink transition-colors group-hover:text-accent">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </nav>

              <div className="border-t border-line p-5">
                <Link
                  href="/#contact"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-between rounded-full bg-ink px-6 py-4 text-sm font-medium text-canvas transition-colors hover:bg-accent"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <div className="mt-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  <span>{siteConfig.location.label}</span>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-ink">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
