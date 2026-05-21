import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
	title: "Our Services | SIEM",
	description:
		"Construction services offered by SIEM (Pvt) Ltd — civil construction, renovation, project management and more.",
};

const services = [
	{
		title: "Civil Construction",
		desc: "Civil Construction and Structural Steel Buildings — Residential, commercial and institutional buildings.",
	},
	{
		title: "Italian Tiles & Marble",
		desc: "Suppliers of Italian tiles and marble — agency to import best quality tiles and marble from Italy, customized per project.",
	},
	{
		title: "Project Management",
		desc: "End-to-end project oversight from feasibility study through to final account and handover. We bring the right combination of experience and expertise to manage complex, multi-discipline projects.",
	},
	{
		title: "Fit-Out & Interiors",
		desc: "Commercial and hospitality interior fit-outs to client specification. We co-ordinate all trades — MEP, joinery, finishes — under a single contract.",
	},
	{
		title: "Advisory & Consultancy",
		desc: "Pre-construction advisory services including cost planning, buildability reviews, and value engineering. We help clients make informed decisions before breaking ground.",
	},
	{
		title: "Infrastructure Works",
		desc: "Site infrastructure including drainage, roads, external works, and utilities. We provide a comprehensive service from advisory work to final construction.",
	},
	{
		title: "Hospitality Linen Procurement",
		desc: "Value-focused FF&E sourcing and dynamic supplier evaluation. We help commercial hotel and residential clients analyze thread counts and split orders to optimize budgets across top manufacturers (Alankara, Bedsheets Paradise, and Raawana Bedding).",
	},
];

export default function Services() {
	return (
		<PageLayout
			title="Services"
			breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
		>
			<h2
				style={{
					fontFamily: "var(--font-display)",
					fontSize: "1.4rem",
					color: "#333",
					marginBottom: "0.75rem",
				}}
			>
				Civil Construction and Structural Steel Buildings
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
				SIEM offers a comprehensive range of construction services. Our ability
				to bring together the right combination of experience and expertise is
				second to none. Thanks to our all-round engineering experience, we offer
				a complete service from advisory work to final construction.
			</p>

			{/* Interactive Estimator Quick-Link Banner */}
			<div
				style={{
					background: "linear-gradient(135deg, var(--brand-teal-light), #fff)",
					border: "1.5px solid var(--brand-teal)",
					borderRadius: "4px",
					padding: "1.5rem",
					marginBottom: "2.5rem",
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
					position: "relative",
					overflow: "hidden",
				}}
			>
				<div style={{ position: "absolute", right: "-10px", bottom: "-10px", fontSize: "5rem", opacity: 0.1, pointerEvents: "none" }}>
					🛏️
				</div>
				<span style={{
					fontFamily: "var(--font-ui)",
					fontSize: "0.7rem",
					fontWeight: 700,
					color: "var(--brand-teal-dark)",
					textTransform: "uppercase",
					letterSpacing: "0.15em"
				}}>
					Interactive Sourcing Tool
				</span>
				<h3 style={{
					fontFamily: "var(--font-display)",
					fontSize: "1.2rem",
					color: "var(--brand-navy)",
					margin: 0
				}}>
					Hospitality Sourcing & Bed/Bath Linen Price Estimator
				</h3>
				<p style={{
					fontFamily: "var(--font-ui)",
					fontSize: "0.82rem",
					color: "var(--brand-body)",
					margin: 0,
					lineHeight: 1.7
				}}>
					Compare quotes from leading local manufacturers (**Alankara Designs**, **Bedsheets Paradise**, and **Raawana Bedding**) across standard and luxury thread counts. Use our smart split-sourcing recommendations to save up to 25% on your project's FF&E budget.
				</p>
				<div>
					<a
						href="/services/linen-procurement"
						className="btn-brand-teal"
					>
						Launch Sourcing Calculator →
					</a>
				</div>
			</div>
			<div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
				{services.map((s, i) => (
					<div
						key={s.title}
						style={{
							padding: "1.25rem 1.5rem",
							borderBottom: "1px solid #e5e5e5",
							borderLeft: "3px solid var(--brand-teal)",
							marginBottom: "0.75rem",
							background: i % 2 === 0 ? "#fafafa" : "#fff",
						}}
					>
						<h3
							style={{
								fontFamily: "var(--font-display)",
								fontSize: "1rem",
								color: "#333",
								marginBottom: "0.5rem",
							}}
						>
							{s.title}
						</h3>
						<p
							style={{
								fontFamily: "var(--font-ui)",
								fontSize: "0.85rem",
								color: "var(--brand-body)",
								lineHeight: 1.8,
								margin: 0,
							}}
						>
							{s.desc}
						</p>
					</div>
				))}
			</div>
			<div
				style={{
					marginTop: "2rem",
					background: "var(--brand-teal-light)",
					border: "1px solid var(--brand-teal)",
					borderRadius: "3px",
					padding: "1.25rem",
				}}
			>
				<p
					style={{
						fontFamily: "var(--font-ui)",
						fontSize: "0.88rem",
						color: "#333",
						margin: 0,
						lineHeight: 1.8,
					}}
				>
					To discuss your project requirements, please{" "}
					<a
						href="/contact-us"
						style={{
							color: "var(--brand-teal)",
							fontWeight: 600,
							textDecoration: "none",
						}}
					>
						contact us
					</a>{" "}
					or call <strong>+94 718 419 419</strong>.
				</p>
			</div>
		</PageLayout>
	);
}
