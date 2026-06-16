import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
	title: "About Us | SIEM",
	description:
		"Established in 1993, SIEM is one of Sri Lanka's premier civil construction firms.",
};

const directors = [
	{
		name: "Shanaka Mathew",
		title: "Managing Director",
		bio: "Shanaka Mathew oversees project execution, engineering standards, and operations at SIEM. Under his leadership, the firm has successfully delivered complex civil engineering projects across residential, commercial, and heritage sectors.",
	},
	{
		name: "Fawzia William",
		title: "Director",
		bio: "Fawzia William leads SIEM's corporate strategy, business relationships, and quality management frameworks, carrying forward the company's 33-year legacy of engineering excellence.",
	},
];

const teamMembers = [
	{ name: "Samith Rukshan", role: "Construction Manager" },
	{ name: "Lalith de Silva", role: "Quantity Surveying Manager" },
	{ name: "Manjula Liyanage", role: "Accounting Manager" },
	{ name: "Haritha Jayasundara", role: "Administrations Manager" },
];

const certifications = [
	{
		code: "CIDA Grade C2",
		label: "CIDA Registration No. C-10851",
		desc: "Construction Industry Development Authority (CIDA) registration for building construction.",
	},
	{
		code: "ISO 9001:2015",
		label: "Quality Management System Certified",
		desc: "International standard certification for quality management in construction operations.",
	},
	{
		code: "PV 1558",
		label: "Incorporation Registry",
		desc: "Officially registered private limited liability company established in Sri Lanka.",
	},
];

export default function AboutUs() {
	return (
		<PageLayout
			title="About Us"
			breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
		>
			<div className="container-site">
				{/* ── Overview Section ── */}
				<div style={{ marginBottom: "2.5rem" }}>
					<h2
						style={{
							fontFamily: "var(--font-display)",
							fontSize: "1.4rem",
							color: "#333",
							marginBottom: "0.75rem",
						}}
					>
						Company Profile
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
							marginBottom: "1rem",
						}}
					>
						Established in 1993, SIEM is one of Sri Lanka&apos;s premier civil
						construction firms. We are committed to delivering quality
						construction solutions on time, earning the trust of our clients over
						more than three decades of operations.
					</p>
					<p
						style={{
							color: "var(--brand-body)",
							lineHeight: 1.9,
							fontSize: "0.9rem",
							marginBottom: "1rem",
						}}
					>
						Our ability to bring together the right combination of engineering
						experience and on-site expertise allows us to offer a comprehensive
						service from early advisory stages through to final handover.
					</p>
				</div>

				{/* ── Leadership & Management Section ── */}
				<div style={{ marginBottom: "2.5rem" }}>
					<h3
						style={{
							fontFamily: "var(--font-display)",
							fontSize: "1.2rem",
							color: "#333",
							marginBottom: "0.5rem",
							paddingBottom: "0.5rem",
							borderBottom: "2px solid var(--brand-teal)",
						}}
					>
						Board of Directors
					</h3>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "1fr 1fr",
							gap: "1.5rem",
							marginTop: "1.25rem",
						}}
						className="leadership-grid"
					>
						{directors.map((dir) => (
							<div
								key={dir.name}
								style={{
									border: "1px solid #e5e5e5",
									padding: "1.25rem",
									borderRadius: "2px",
									background: "#fafafa",
								}}
							>
								<h4
									style={{
										fontFamily: "var(--font-display)",
										fontSize: "1rem",
										color: "#333",
										margin: "0 0 0.25rem",
									}}
								>
									{dir.name}
								</h4>
								<p
									style={{
										fontFamily: "var(--font-ui)",
										fontSize: "0.78rem",
										color: "var(--brand-teal)",
										fontWeight: 600,
										margin: "0 0 0.75rem",
										textTransform: "uppercase",
										letterSpacing: "0.04em",
									}}
								>
									{dir.title}
								</p>
								<p
									style={{
										fontFamily: "var(--font-body)",
										fontSize: "0.82rem",
										color: "#666",
										lineHeight: 1.7,
										margin: 0,
									}}
								>
									{dir.bio}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* ── Key Senior Management ── */}
				<div style={{ marginBottom: "2.5rem" }}>
					<h3
						style={{
							fontFamily: "var(--font-display)",
							fontSize: "1.1rem",
							color: "#333",
							marginBottom: "0.5rem",
							paddingBottom: "0.5rem",
							borderBottom: "2px solid var(--brand-teal)",
						}}
					>
						Senior Management
					</h3>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(4, 1fr)",
							gap: "1rem",
							marginTop: "1.25rem",
						}}
						className="management-grid"
					>
						{teamMembers.map((member) => (
							<div
								key={member.name}
								style={{
									border: "1px solid #eee",
									padding: "0.875rem",
									borderRadius: "2px",
									textAlign: "center",
								}}
							>
								<div
									style={{
										fontFamily: "var(--font-display)",
										fontSize: "0.85rem",
										fontWeight: 600,
										color: "#333",
										marginBottom: "0.2rem",
									}}
								>
									{member.name}
								</div>
								<div
									style={{
										fontFamily: "var(--font-ui)",
										fontSize: "0.72rem",
										color: "#666",
									}}
								>
									{member.role}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* ── Certifications Section ── */}
				<div>
					<h3
						style={{
							fontFamily: "var(--font-display)",
							fontSize: "1.1rem",
							color: "#333",
							marginBottom: "0.5rem",
							paddingBottom: "0.5rem",
							borderBottom: "2px solid var(--brand-teal)",
						}}
					>
						Certifications & Registrations
					</h3>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(3, 1fr)",
							gap: "1rem",
							marginTop: "1.25rem",
						}}
						className="certifications-grid"
					>
						{certifications.map((cert) => (
							<div
								key={cert.code}
								style={{
									border: "1px solid #e5e5e5",
									padding: "1.25rem",
									borderRadius: "2px",
								}}
							>
								<div
									style={{
										fontFamily: "var(--font-display)",
										fontSize: "1.1rem",
										fontWeight: 700,
										color: "var(--brand-navy)",
										marginBottom: "0.4rem",
									}}
								>
									{cert.code}
								</div>
								<div
									style={{
										fontFamily: "var(--font-ui)",
										fontSize: "0.78rem",
										fontWeight: 600,
										color: "#333",
										marginBottom: "0.3rem",
									}}
								>
									{cert.label}
								</div>
								<div
									style={{
										fontFamily: "var(--font-ui)",
										fontSize: "0.75rem",
										color: "#666",
										lineHeight: 1.6,
									}}
								>
									{cert.desc}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<style>{`
        @media (max-width: 768px) {
          .leadership-grid { grid-template-columns: 1fr !important; }
          .management-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .certifications-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
		</PageLayout>
	);
}
