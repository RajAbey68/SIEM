import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
	alternates: { canonical: "/past-projects" },
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
		img: "/images/projects/anilana-pasikudah.jpg",
		title: "Anilana, Pasikudah",
		type: "Hospitality",
		location: "Pasikudah",
		note: "Construction of a 49-room luxury beachfront hotel, including staff facilities and service buildings. Designed by Mano Ponniah Associates.",
	},
	{
		img: "/images/projects/ravana-gardens.jpg",
		title: "Boutique Hotel, Ravana Gardens",
		type: "Boutique Hospitality",
		location: "Ussangoda",
		note: "Sustainable luxury eco-boutique hotel construction on the coastal cliffs of Ussangoda. Designed by Ms. Sunela Jayewardene.",
	},
	{
		img: "/images/projects/house-digana.jpg",
		title: "House, Digana",
		type: "Residential",
		location: "Digana",
		note: "Construction of a three-level private house on sloping land, featuring concrete and rubble retaining walls. Designed by MICD Associates.",
	},
	{
		img: "/images/projects/colombo-courtyard.jpg",
		title: "Colombo Courtyard",
		type: "Boutique Hospitality",
		location: "Colombo 03",
		note: "Construction of a unique urban boutique hotel featuring recycled materials and industrial aesthetics. Designed by Ms. Sunela Jayewardene.",
	},
	{
		img: "/images/projects/swimming-club.jpg",
		title: "Colombo Swimming Club",
		type: "Leisure & Hospitality",
		location: "Colombo 03",
		note: "Construction of a new changing room and fine-dining restaurant at the historic Colombo Swimming Club. Designed by Ms. Ruchi Jeyanathan.",
	},
	{
		img: "/images/projects/hayleys-house.jpg",
		title: "Hayley's House",
		type: "Heritage Residential",
		location: "Galle Fort",
		note: "Restoration and structural extensions to Hayley's House in the UNESCO-listed Galle Fort. Designed by Taru IE.",
	},
	{
		img: "/images/projects/cinnamon-lakeside-7th.jpg",
		title: "7th Floor, Cinnamon Lakeside",
		type: "Hospitality Fit-Out",
		location: "Colombo",
		note: "Additions and complete luxury refurbishment of the Executive Floor lounge and suites. Designed by Taru IE.",
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
		note: "Renovation of the 7 Degrees Terrace Bar and Restaurants at the Cinnamon Lakeside Hotel. Designed by Taru IE.",
	},
	{
		img: "/images/projects/victoria-golf.jpg",
		title: "Victoria Golf Course",
		type: "Leisure & Hospitality",
		location: "Digana",
		note: "Refurbishment and additions to the clubhouse and premium villas at the Victoria Golf Course.",
	},
	{
		img: "/images/projects/wrey-house.jpg",
		title: "Wrey House",
		type: "Tropical Villa",
		location: "Pokulukanda",
		note: "Custom tropical modern residence designed by Sunela Jayawardena, integrating steel, stone, and timber on a hillside site.",
	},
	{
		img: "/images/projects/south-point-villa.jpg",
		title: "South Point Villa",
		type: "Boutique Villa",
		location: "Kathaluwa",
		note: "Construction of a beachfront boutique villa featuring traditional courtyard layouts. Designed by Mr. C. Anjalendran.",
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
		note: "Construction of a private house on a sloping site. Designed by Mr. Indika Samarasinghe.",
	},
	{
		img: "/images/projects/amarasekara-house.jpg",
		title: "Amarasekara House",
		type: "Residential",
		location: "Wadduwa",
		note: "Construction of a residential house focusing on tropical modernism. Designed by 1:2:4 Design.",
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
	// New projects from June 30 update
	{
		img: "/images/projects/ani-art-academies.jpg",
		title: "Luxury House for Ani Art Academies",
		type: "Luxury Residential",
		location: "Dickwella",
		note: "A 4,200 sqft luxury villa for Ani Art Academies, Dickwella. Designed by Architect Mrs. Roshan Sulaiman.",
	},
	{
		img: "/images/projects/lolc-negombo.jpg",
		title: "Office Building for LOLC",
		type: "Commercial",
		location: "Negombo",
		note: "4-story office building for LOLC in Negombo. Designed by Mr. Dinuk Senanayake.",
	},
	{
		img: "/images/projects/crystal-sands.png",
		title: "Crystal Sands Apartments",
		type: "Luxury Residential",
		location: "Rathgama",
		note: "11-story luxury apartment building in Rathgama. Designed by Mr. Jeremy Mather.",
	},
	{
		img: "/images/projects/midigama-villa.jpg",
		title: "Boutique Villa, Midigama",
		type: "Boutique Hospitality",
		location: "Weligama",
		note: "Boutique villa at Midigama, Weligama. Designed by Ms. Sunela Jayewardene.",
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
