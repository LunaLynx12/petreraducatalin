import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Inter_Tight } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { Analytics } from "@/components/seo";
import { buildRootJsonLdGraph } from "@/components/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
  preload: true,
});

const interTight = Inter_Tight({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
  preload: true,
});

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
    images: [
      {
        url: `${siteConfig.url}/images/og.png?v=2`,
        width: 1200,
        height: 630,
        alt: "Petre Radu Cătălin - Penetration Tester Brașov, Romania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
    images: [`${siteConfig.url}/images/og.png?v=2`],
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
    <html
      lang="en"
      className={cn(
        instrumentSerif.variable,
        interTight.variable,
        plexMono.variable,
        "scroll-smooth"
      )}
    >
      <head>
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
        <Analytics />
      </body>
    </html>
  );
}
