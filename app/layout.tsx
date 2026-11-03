import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { ogImages, ogImage } from "@/lib/metadata";
import { Analytics } from "@/components/seo";
import { buildRootJsonLdGraph } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RevealObserver } from "@/components/reveal-observer";

/**
 * Fonts are self-hosted and subsetted (see scripts/generate-fonts.mjs), then
 * declared in globals.css. Preloading is explicit so it behaves identically on
 * every platform; Next's local-font preload manifest is unreliable on Windows.
 */
const fontPreloads = [
  "/fonts/inter-tight.woff2",
  "/fonts/instrument-serif.woff2",
  "/fonts/instrument-serif-italic.woff2",
  "/fonts/plex-mono-400.woff2",
];

const rootJsonLd = buildRootJsonLdGraph();

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Penetration Tester Brașov | Petre Radu Cătălin",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: {
    canonical: `${siteConfig.url}/`,
    types: {
      "application/rss+xml": `${siteConfig.url}/rss.xml`,
    },
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
    locale: "en_US",
    images: ogImages,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "32x32" }],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {fontPreloads.map((href) => (
          <link
            key={href}
            rel="preload"
            href={href}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootJsonLd) }}
        />
      </head>
      <body className="grain">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:text-canvas"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
        <Analytics />
      </body>
    </html>
  );
}
