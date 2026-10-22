import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Gallery | SIEM",
	description: "Project gallery of SIEM (Pvt) Ltd — construction and renovation projects across Sri Lanka.",
	alternates: { canonical: "/gallery" },
};

export default function GalleryLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
