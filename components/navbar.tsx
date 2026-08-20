"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";
import { NAV_LINKS } from "@/data/site";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-border" : "bg-transparent"
      )}
    >
      <nav
        aria-label="Main navigation"
        className="container flex h-16 items-center justify-between"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/40 bg-primary/10 font-mono text-lg font-bold text-primary shadow-glow-sm transition-shadow group-hover:shadow-glow"
          >
            P
          </span>
          <span className="hidden font-mono text-sm font-semibold tracking-wide text-foreground sm:block">
            <span className="text-primary">petre</span>radu<span className="text-primary">_</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-md border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
          >
            Get in Touch
          </Link>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-primary/50 hover:text-primary lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </DialogTrigger>
          <DialogContent
            aria-describedby={undefined}
            className="top-[4rem] max-w-[calc(100vw-2rem)] translate-y-0 border-border bg-surface/95 backdrop-blur-xl"
          >
            <DialogHeader>
              <DialogTitle className="font-mono">/navigation</DialogTitle>
              <DialogDescription className="sr-only">
                Site navigation menu
              </DialogDescription>
            </DialogHeader>
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <DialogClose key={link.href} asChild>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 rounded-md px-3 py-3 text-sm text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    <Terminal className="h-4 w-4 text-primary" aria-hidden="true" />
                    {link.label}
                  </Link>
                </DialogClose>
              ))}
              <DialogClose asChild>
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Get in Touch
                </Link>
              </DialogClose>
            </nav>
          </DialogContent>
        </Dialog>
      </nav>
    </header>
  );
}