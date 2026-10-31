import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

/**
 * The social card shared by every page.
 *
 * Next.js does not deep-merge metadata: a page that declares `openGraph`
 * replaces the layout's block outright, so the image has to be attached at
 * each call site. Import this instead of repeating the object.
 */
export const ogImage = {
  url: `${siteConfig.url}/images/og.png?v=2`,
  width: 1200,
  height: 630,
  alt: "Petre Radu Cătălin - Penetration Tester based in Brașov, Romania",
};

/** The `images` array for a page-level `openGraph` block. */
export const ogImages: NonNullable<
  NonNullable<Metadata["openGraph"]>["images"]
> = [ogImage];
