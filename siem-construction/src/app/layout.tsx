import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
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
	metadataBase: new URL("https://siem.lk"),
	alternates: { canonical: "/" },
	title: "SIEM (Pvt) Ltd | Sri Lanka",
	description:
		"SIEM is one of Sri Lanka's premier civil engineering firms. Established 1993, committed to delivering quality solutions on time. Based in Colombo.",
	keywords: "SIEM, Sri Lanka, civil engineering, renovation, Colombo",
	openGraph: {
		title: "SIEM (Pvt) Ltd | Sri Lanka",
		description:
			"Established 1993. One of Sri Lanka's premier civil engineering firms — committed to delivering quality solutions on time.",
		url: "https://siem.lk",
		siteName: "SIEM",
		locale: "en_LK",
		type: "website",
		images: [
			{
				url: "/images/New-SIEM-LoGo-Enhanced.png",
				width: 1600,
				height: 1280,
				alt: "SIEM (Pvt) Ltd — civil engineering, Sri Lanka",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "SIEM (Pvt) Ltd | Sri Lanka",
		description:
			"Established 1993. One of Sri Lanka's premier civil engineering firms.",
		images: ["/images/New-SIEM-LoGo-Enhanced.png"],
	},
};

/* ── JSON-LD structured data ────────────────────────────────── */
const jsonLd = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: "SIEM (Pvt) Ltd",
	url: "https://siem.lk",
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
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			opens: "08:00",
			closes: "17:00",
		},
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Saturday"],
			opens: "08:00",
			closes: "13:00",
		},
	],
	foundingDate: "1993",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${playfair.variable} ${inter.variable} ${outfit.variable}`}
		>
			<head>
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is safe
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
