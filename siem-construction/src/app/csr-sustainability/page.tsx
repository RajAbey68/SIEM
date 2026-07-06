import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, HardHat, Home, FileText } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
	title: "CSR & Sustainability | SIEM",
	description:
		"SIEM's commitment to corporate social responsibility and sustainable construction in Sri Lanka.",
};

export default function CsrSustainability() {
	return (
		<PageLayout
			title="CSR & Sustainability"
			breadcrumbs={[
				{ label: "Home", href: "/" },
				{ label: "CSR & Sustainability" },
			]}
		>
			<div className="container-site section-pad">
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gap: "3rem",
						alignItems: "start",
					}}
					className="csr-grid"
				>
					<div>
						<h2
							style={{
								fontFamily: "var(--font-display)",
								fontSize: "1.6rem",
								color: "var(--brand-heading)",
								marginBottom: "1rem",
							}}
						>
							Our Commitment to People &amp; Planet
						</h2>
						<p
							style={{
								color: "var(--brand-body)",
								lineHeight: 1.9,
								marginBottom: "1rem",
							}}
						>
							At SIEM, we recognise that our responsibility extends beyond the
							buildings we construct. We are committed to making a positive
							impact on the communities we serve and the environment we share.
						</p>

						{[
							{
								icon: Leaf,
								title: "Environment",
								text: "We actively pursue green building practices, material waste reduction, and responsible sourcing on all our project sites.",
							},
							{
								icon: HardHat,
								title: "Worker Welfare",
								text: "Stringent health and safety standards, fair wages and continuous skills training for all our workers and subcontractors.",
							},
							{
								icon: Home,
								title: "Community",
								text: "We invest in the communities surrounding our project sites through education sponsorship, local hiring, and infrastructure support.",
							},
							{
								icon: FileText,
								title: "Governance",
								text: "Transparent reporting, ethical procurement and ISO-aligned quality management systems across all operations.",
							},
						].map((item) => (
							<div
								key={item.title}
								style={{
									display: "flex",
									gap: "1rem",
									marginBottom: "1.5rem",
									padding: "1rem",
									background: "#fafafa",
									border: "1px solid var(--brand-border)",
									borderRadius: "3px",
								}}
							>
								<div style={{ fontSize: "1.5rem", lineHeight: 1, color: "var(--brand-teal)" }}>
									<item.icon size={28} />
								</div>
								<div>
									<h4
										style={{
											fontFamily: "var(--font-display)",
											fontSize: "0.95rem",
											color: "var(--brand-heading)",
											marginBottom: "0.3rem",
										}}
									>
										{item.title}
									</h4>
									<p
										style={{
											fontFamily: "var(--font-ui)",
											fontSize: "0.85rem",
											color: "var(--brand-body)",
											lineHeight: 1.7,
											margin: 0,
										}}
									>
										{item.text}
									</p>
								</div>
							</div>
						))}
					</div>

					<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
						<div
							style={{
								position: "relative",
								width: "100%",
								height: "260px",
								borderRadius: "3px",
								overflow: "hidden",
							}}
						>
							<Image
								src="/images/csr/csr-1.jpg"
								alt="SIEM CSR Activities - Community Support"
								fill
								style={{ objectFit: "cover" }}
							/>
						</div>
						<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
							<div
								style={{
									position: "relative",
									width: "100%",
									height: "160px",
									borderRadius: "3px",
									overflow: "hidden",
								}}
							>
								<Image
									src="/images/csr/csr-2.jpg"
									alt="SIEM CSR Activities - Worker Welfare"
									fill
									style={{ objectFit: "cover" }}
								/>
							</div>
							<div
								style={{
									position: "relative",
									width: "100%",
									height: "160px",
									borderRadius: "3px",
									overflow: "hidden",
								}}
							>
								<Image
									src="/images/csr/csr-3.png"
									alt="SIEM CSR Activities - Environmental Initiatives"
									fill
									style={{ objectFit: "cover" }}
								/>
							</div>
						</div>
					</div>
					<p
						style={{
							fontSize: "0.72rem",
							color: "var(--brand-body)",
							fontFamily: "var(--font-ui)",
							textAlign: "center",
							marginTop: "0.5rem",
						}}
					>
						SIEM Corporate Social Responsibility & Community Development Initiatives
					</p>
				</div>
			</div>
			<style>{`@media (max-width: 768px) { .csr-grid { grid-template-columns: 1fr !important; } }`}</style>
		</PageLayout>
	);
}
