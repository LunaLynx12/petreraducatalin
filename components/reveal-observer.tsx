"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * One IntersectionObserver for every `[data-reveal]` block on the page.
 *
 * Mounted once in the root layout. Elements are only armed once they are known
 * to start below the fold, so anything already on screen never flickers and
 * content remains visible if JS never runs. Re-runs on navigation because the
 * layout persists between routes.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (nodes.length === 0) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const viewport = window.innerHeight || 0;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.01 }
    );

    // Batch reads before writes: interleaving getBoundingClientRect with
    // class changes forces a style/layout recalculation per element.
    const belowFold: HTMLElement[] = [];
    for (const node of nodes) {
      if (node.classList.contains("reveal-armed")) continue;
      if (node.getBoundingClientRect().top < viewport) continue;
      belowFold.push(node);
    }

    for (const node of belowFold) {
      node.classList.add("reveal-armed");
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
