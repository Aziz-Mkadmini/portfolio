import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/app/json-ld";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090b",
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
  openGraph: {
    type: "website",
    locale: "en_US",
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
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <JsonLd />
        <Navbar />
        <main className="relative min-h-dvh overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
