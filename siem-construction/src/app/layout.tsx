import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siem Construction | Integrated Project Delivery Since 1993",
  description:
    "Siem Construction delivers integrated, technology-driven construction solutions. From BIM-enabled design-build to sustainable engineering — re-born for 2026.",
  keywords:
    "Siem Construction, Sri Lanka construction, design-build, BIM, integrated project delivery, Nugegoda",
  openGraph: {
    title: "Siem Construction | Integrated Project Delivery Since 1993",
    description:
      "33 years of Sri Lankan construction mastery, re-born with global design-build standards.",
    url: "https://siem.lk",
    siteName: "Siem Construction",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
