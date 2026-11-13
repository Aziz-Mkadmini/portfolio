import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { site } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/app/json-ld";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// "block" (not "swap"): the hero title re-wraps when the fallback font is swapped out, which
// shifted the layout. The file is preloaded, so the invisible window is short.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "block",
});

export const viewport: Viewport = {
  themeColor: "#0b0a09",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  applicationName: site.name,
  keywords: [
    "développeur full-stack freelance",
    "automatisation n8n",
    "agent IA",
    "création de site web",
    "développement SaaS",
    site.titleEn,
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    siteName: site.name,
    title: `${site.name} — ${site.title}`,
    description: site.tagline,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: site.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sans.variable} ${display.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Without JavaScript the reveal animations never run: show everything instead. */}
        <noscript>
          <style>{`.js-reveal{opacity:1!important;transform:none!important}.rw>span{transform:none!important}.fade-up{opacity:1!important;animation:none!important}`}</style>
        </noscript>
      </head>
      <body className="font-sans">
        <LocaleProvider>
          <JsonLd />
          <SmoothScroll>
            <Navbar />
            <main className="relative min-h-dvh overflow-x-clip">{children}</main>
            <Footer />
          </SmoothScroll>
          <StickyWhatsApp />
          <Cursor />
        </LocaleProvider>
      </body>
    </html>
  );
}
