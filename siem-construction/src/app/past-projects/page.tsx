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
		img: "/images/projects/site-07.jpg",
		title: "Boutique Hotel, Ravana Gardens",
		type: "Boutique Hospitality",
		location: "Ussangoda",
		note: "A premier tropical eco-boutique hotel built on the coastal bluffs of Ussangoda, designed for sustainable luxury.",
	},
	{
		img: "/images/projects/lobby-area.jpg",
		title: "Colombo Swimming Club",
		type: "Leisure & Hospitality",
		location: "Colombo 3",
		note: "Major interior refurbishment and construction of the new changing room and fine-dining restaurant at the historic club.",
	},
	{
		img: "/images/projects/site-05.jpg",
		title: "Hayley’s House",
		type: "Heritage Residential",
		location: "Galle Fort",
		note: "Sensitive restoration and structural extensions of a historic manor house in the UNESCO-listed Galle Fort.",
	},
	{
		img: "/images/projects/sbi-hall.jpg",
		title: "7th Floor, Cinnamon Lakeside",
		type: "Hospitality Fit-Out",
		location: "Colombo",
		note: "Additions and complete luxury refurbishment of the Executive Floor and the 7 Degrees Terrace Bar & Restaurants.",
	},
	{
		img: "/images/projects/site-02.jpg",
		title: "Prima Apartments",
		type: "Residential Fit-Out",
		location: "Colombo",
		note: "High-end residential refurbishment of two floors at Liberty Plaza / Prima Apartments.",
	},
	{
		img: "/images/projects/site-01.jpg",
		title: "Wrey House",
		type: "Tropical Villa",
		location: "Pokulukanda",
		note: "Custom tropical modern residence designed by Sunela Jayawardena, integrating steel, stone, and wood on a hillside site.",
	},
	{
		img: "/images/projects/site-06.jpg",
		title: "South Point Villa",
		type: "Boutique Villa",
		location: "Kathaluwa",
		note: "Beachfront boutique villa in Kathaluwa, built with traditional courtyard features and structural openness.",
	},
	{
		img: "/images/projects/site-03.jpg",
		title: "Building, Bagatalle Road",
		type: "Residential / Commercial",
		location: "Colombo 3",
		note: "Multi-storey residential and commercial building construction on a sand fill foundation.",
	},
	{
		img: "/images/projects/site-04.jpg",
		title: "Houses in Mirihana & Wadduwa",
		type: "Residential",
		location: "Mirihana / Wadduwa",
		note: "Elegant private residential houses built on sloping terrain requiring reinforced retaining structures.",
	},
	{
		img: "/images/projects/project-1.jpg",
		title: "Amarasekara House",
		type: "Residential",
		location: "Sri Lanka",
		note: "Construction of a premium private residential house focusing on tropical modernism.",
	},
	{
		img: "/images/projects/sbi-after.jpg",
		title: "State Bank of India Building",
		type: "Commercial Heritage",
		location: "Colombo 1",
		note: "Complete structural restoration and interior retrofit of the historic heritage colonial banking building in Colombo Fort.",
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
