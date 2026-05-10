import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
	title: "Services | SIEM",
	description:
		"SIEM construction services for civil construction, luxury villas, boutique hotels, colonial renovation, fit-out and project management.",
};

const services = [
	{
		title: "Civil Construction and Structural Steel Buildings",
		desc: "Residential, commercial and institutional buildings delivered with the right combination of engineering experience and site discipline.",
	},
	{
		title: "Luxury Villas, Houses and Boutique Hotels",
		desc: "Premium construction and fit-out for clients who care about detail, sequencing, material quality and a polished handover.",
	},
	{
		title: "Colonial Renovation and Retrofit",
		desc: "Sensitive renovation of heritage and occupied spaces, including discreet upgrades, careful finishes and minimal disruption.",
	},
	{
		title: "Italian Tiles and Marble",
		desc: "Supply of Italian tiles and marble, customized per project and coordinated into the overall construction program.",
	},
	{
		title: "Project Management",
		desc: "End-to-end project oversight from feasibility study through final account, completion and handover.",
	},
	{
		title: "Advisory and Consultancy",
		desc: "Cost planning, buildability reviews, value engineering and early-stage guidance before construction begins.",
	},
];

export default function Services() {
	return (
		<PageLayout
			title="Services"
			intro="A sharper future service architecture for SIEM: tropical construction, premium residential and hospitality work, heritage renovation, fit-out, project management and imported finishes."
			breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
		>
			<div className="content-grid">
				{services.map((service) => (
					<article className="feature-card" key={service.title}>
						<h3>{service.title}</h3>
						<p>{service.desc}</p>
					</article>
				))}
			</div>
			<div className="contact-card" style={{ marginTop: "1rem", padding: "1.5rem" }}>
				<p className="eyebrow">Project fit</p>
				<h3>Planning a tropical home, hotel, commercial build or heritage upgrade?</h3>
				<p>
					Call <strong>+94 718 419 419</strong> or send a project note to{" "}
					<a href="mailto:info@siem.lk">info@siem.lk</a>.
				</p>
				<Link href="/contact-us" className="btn btn-primary" style={{ marginTop: "1rem" }}>
					Contact SIEM
				</Link>
			</div>
		</PageLayout>
	);
}
