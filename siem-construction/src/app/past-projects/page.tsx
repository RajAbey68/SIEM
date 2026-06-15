import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
	title: "Past Projects | SIEM",
	description:
		"A selection of past construction projects by SIEM (Pvt) Ltd across Sri Lanka.",
};

interface ProjectItem {
	img: string;
	title: string;
	type: string;
	location: string;
	note: string;
	placeholder?: boolean;
}

const projects: ProjectItem[] = [
	{
		img: "/images/projects/house-digana.jpg",
		title: "House, Digana",
		type: "Residential",
		location: "Digana",
		note: "Construction of a three-level private house on sloping land, featuring concrete and rubble retaining walls. Designed by MICD Associates.",
	},
	{
		img: "/images/projects/hayleys-house.jpg",
		title: "Hayley’s House",
		type: "Heritage Residential",
		location: "Galle Fort",
		note: "Restoration and extensions to Hayley's House, Galle Fort. Designed by Taru IE.",
	},
	{
		img: "/images/projects/cinnamon-lakeside-7th.jpg",
		title: "7th Floor, Cinnamon Lakeside",
		type: "Hospitality Fit-Out",
		location: "Colombo",
		note: "Additions and refurbishment of the 7th Floor (Executive Floor) and the 7 Degrees Terrace Bar & Restaurants. Designed by Taru IE.",
	},
	{
		img: "/images/projects/prima-apartments.jpg",
		title: "Prima Apartments",
		type: "Residential Fit-Out",
		location: "Colombo 03",
		note: "Refurbishment of two floors at Liberty Plaza / Prima Apartments for Prima Ceylon Ltd. Designed by Mr. Jayantha Perera.",
	},
	{
		img: "/images/projects/cinnamon-lakeside.jpg",
		title: "Cinnamon Lakeside",
		type: "Hospitality Fit-Out",
		location: "Colombo",
		note: "Renovation of 7 Degrees Terrace Bar and Restaurants at Cinnamon Lakeside Hotel. Designed by Taru IE.",
	},
	{
		img: "/images/projects/south-point-villa.jpg",
		title: "South Point Villa",
		type: "Boutique Villa",
		location: "Kathaluwa",
		note: "Construction of a beachfront boutique villa in Kathaluwa. Designed by Mr. C. Anjalendran.",
	},
	{
		img: "/images/projects/bagatalle-road.jpg",
		title: "Building, Bagatalle Road",
		type: "Residential / Commercial",
		location: "Colombo 03",
		note: "Multi-story building construction at Bagatalle Road.",
	},
	{
		img: "/images/projects/mirihana-house.jpg",
		title: "House in Mirihana",
		type: "Residential",
		location: "Mirihana",
		note: "Construction of a private house in Mirihana. Designed by Mr. Indika Samarasinghe.",
	},
	{
		img: "/images/projects/amarasekara-house.jpg",
		title: "Amarasekara House",
		type: "Residential",
		location: "Wadduwa",
		note: "Construction of the Amarasekara House and residential houses in Wadduwa. Designed by 1:2:4 Design.",
	},
	{
		img: "/images/projects/state-bank.jpg",
		title: "State Bank of India Building",
		type: "Commercial Heritage",
		location: "Colombo 01",
		note: "Complete restoration and interior/exterior renovation of the historic State Bank of India building. Designed by Design Consortium Ltd.",
	},
	{
		img: "/images/projects/braganza-villa.jpg",
		title: "Braganza Villa",
		type: "Tropical Villa",
		location: "Talpe",
		note: "Construction of Braganza Villa in Talpe. Designed by E & A Interiors Singapore / Chloe Elkerton.",
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
							...(p.placeholder
								? { borderStyle: "dashed", borderColor: "var(--brand-teal)" }
								: {}),
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
							{p.placeholder && (
								<div
									style={{
										position: "absolute",
										inset: 0,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										background: "rgba(84,159,151,0.15)",
									}}
								>
									<span
										style={{
											fontFamily: "var(--font-ui)",
											fontSize: "0.72rem",
											color: "var(--brand-teal)",
											fontWeight: 700,
											background: "rgba(255,255,255,0.9)",
											padding: "4px 10px",
											borderRadius: "2px",
										}}
									>
										MVP PLACEHOLDER
									</span>
								</div>
							)}
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
