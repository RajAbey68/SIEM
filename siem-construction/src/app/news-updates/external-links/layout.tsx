import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "External Links | SIEM",
	description: "External links to Sri Lankan construction industry bodies, authorities and platforms.",
	alternates: { canonical: "/news-updates/external-links" },
};

export default function ExternalLinksLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
