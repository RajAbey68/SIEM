import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
	title: "Past Projects | SIEM",
	description:
		"A selection of past construction projects by SIEM (Pvt) Ltd across Sri Lanka.",
};

// Verified real past projects from SIEM company profile
const projects = [
	{
		img: "/images/projects/sbi-after.jpg",
		title: "State Bank of India Renovation",
		type: "Refurbishment & Interiors",
		location: "Colombo 01",
		note: "Complete structural restoration, interior fit-out, and modernization of the historic State Bank of India building.",
	},
	{
		img: "/images/projects/sbi-hall.jpg",
		title: "SBI Banking Hall Fit-Out",
		type: "Refurbishment & Interiors",
		location: "Colombo 01",
		note: "Premium interior architecture, joinery, and MEP installations for the main banking hall.",
	},
	{
		img: "/images/projects/site-01.jpg",
		title: "Colombo Courtyard Boutique Hotel",
		type: "Hotels & Villas",
		location: "Colombo",
		note: "Construction of the award-winning premium urban boutique hotel featuring high-quality finishes and architectural elegance.",
	},
	{
		img: "/images/projects/site-02.jpg",
		title: "Anilana Pasikudah Luxury Resort",
		type: "Hotels & Villas",
		location: "Pasikudah",
		note: "Major hotel construction project comprising 49 luxury guest rooms, extensive staff quarters, and service buildings.",
	},
	{
		img: "/images/projects/site-03.jpg",
		title: "Orion City Data Centre",
		type: "Commercial & Industrial",
		location: "Colombo 09",
		note: "Structural and specialized mechanical, electrical, and plumbing (MEP) work for a state-of-the-art three-story data centre.",
	},
	{
		img: "/images/projects/lobby-area.jpg",
		title: "Victoria Golf & Country Resort",
		type: "Hotels & Villas",
		location: "Digana",
		note: "High-end construction of central dining facilities and club restaurant pavilions overlooking the championship course.",
	},
	{
		img: "/images/projects/site-04.jpg",
		title: "Rosemead Place Residence",
		type: "Residential",
		location: "Colombo 07",
		note: "Design-led three-story private luxury residence constructed with premium finishes and advanced structural design.",
	},
	{
		img: "/images/projects/site-05.jpg",
		title: "European Union Office Complex",
		type: "Commercial & Industrial",
		location: "Colombo",
		note: "Highly specialized reinforced concrete construction and security features built to strict EU bomb-proof specifications.",
	},
	{
		img: "/images/projects/site-06.jpg",
		title: "Hillside House at Digana",
		type: "Residential",
		location: "Digana",
		note: "Complex multi-level custom holiday home built on steep sloping terrain, supported by heavy concrete and rubble retaining walls.",
	},
];

export default function PastProjects() {
	return (
		<PageLayout
			title="Past Projects"
			breadcrumbs={[{ label: "Home", href: "/" }, { label: "Past Projects" }]}
		>
			<h2
				style={{
					fontFamily: "var(--font-display)",
					fontSize: "1.4rem",
					color: "#333",
					marginBottom: "0.75rem",
				}}
			>
				Our Portfolio
			</h2>
			<div
				style={{
					width: "40px",
					height: "3px",
					background: "var(--brand-teal)",
					marginBottom: "1.5rem",
				}}
			/>
			<p
				style={{
					color: "var(--brand-body)",
					lineHeight: 1.9,
					fontSize: "0.9rem",
					marginBottom: "2rem",
				}}
			>
				A selection of our completed projects across Sri Lanka. We are in the
				process of preparing detailed case studies — please{" "}
				<a
					href="/contact-us"
					style={{ color: "var(--brand-teal)", textDecoration: "none" }}
				>
					contact us
				</a>{" "}
				for specific project references.
			</p>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(3,1fr)",
					gap: "1rem",
				}}
				className="projects-grid"
			>
				{projects.map((p) => (
					<div
						key={p.title}
						style={{
							border: "1px solid #e5e5e5",
							borderRadius: "2px",
							overflow: "hidden",
						}}
					>
						<div style={{ position: "relative", height: "160px" }}>
							<Image
								src={p.img}
								alt={p.title}
								fill
								sizes="(max-width: 768px) 100vw, 33vw"
								style={{ objectFit: "cover" }}
							/>
						</div>
						<div
							style={{
								padding: "0.875rem",
								borderTop: "2px solid var(--brand-teal)",
							}}
						>
							<p
								style={{
									fontFamily: "var(--font-display)",
									fontSize: "0.85rem",
									color: "#333",
									margin: "0 0 0.25rem",
									fontWeight: 600,
								}}
							>
								{p.title}
							</p>
							<p
								style={{
									fontFamily: "var(--font-ui)",
									fontSize: "0.72rem",
									color: "var(--brand-teal)",
									margin: "0 0 0.4rem",
								}}
							>
								{p.type} · {p.location}
							</p>
							<p
								style={{
									fontFamily: "var(--font-ui)",
									fontSize: "0.75rem",
									color: "#666",
									margin: 0,
									lineHeight: 1.6,
								}}
							>
								{p.note}
							</p>
						</div>
					</div>
				))}
			</div>
			<style>{`@media (max-width: 768px) { .projects-grid { grid-template-columns: 1fr !important; } }`}</style>
		</PageLayout>
	);
}
