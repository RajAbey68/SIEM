import type { Metadata } from "next";
import { Playfair_Display, Inter, Outfit } from "next/font/google";
import "./globals.css";

/* ── Self-hosted fonts via next/font (no external CDN request) ── */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ui",
  display: "swap",
});

/* ── SEO metadata — verified copy only ─────────────────────── */
export const metadata: Metadata = {
  title: "SIEM (Pvt) Ltd | Sri Lanka",
  description:
    "SIEM is one of Sri Lanka's premier civil engineering firms. Established 1993, committed to delivering quality solutions on time. Based in Colombo.",
  keywords:
    "SIEM, Sri Lanka, civil engineering, renovation, Colombo",
  openGraph: {
    title: "SIEM (Pvt) Ltd | Sri Lanka",
    description:
      "Established 1993. One of Sri Lanka's premier civil engineering firms — committed to delivering quality solutions on time.",
    url: "https://siem-construction.vercel.app",
    siteName: "SIEM",
    type: "website",
  },
};

/* ── JSON-LD structured data ────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SIEM (Pvt) Ltd",
  url: "https://siem-construction.vercel.app",
  telephone: "+94718419419",
  email: "info@siem.lk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "51/1, Gregory's Road",
    addressLocality: "Colombo 07",
    addressCountry: "LK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.8649,
    longitude: 79.8997,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "13:00" },
  ],
  foundingDate: "1993",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
