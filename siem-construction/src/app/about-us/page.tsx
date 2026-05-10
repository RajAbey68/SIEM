import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
	title: "Studio | SIEM",
	description:
		"Established in 1993, SIEM is one of Sri Lanka's premier civil construction firms.",
};

export default function AboutUs() {
	return (
		<PageLayout
			title="Studio"
			intro="Established in 1993, SIEM brings together engineering experience, construction discipline and a philosophy of trust, integrity and quality."
			breadcrumbs={[{ label: "Home", href: "/" }, { label: "Studio" }]}
		>
			<div style={{ display: "grid", gap: "1.5rem" }}>
				<div className="project-card">
					<div className="project-image" style={{ aspectRatio: "16 / 9" }}>
						<Image
							src="/images/projects/site-01.jpg"
							alt="SIEM construction team and project context"
							fill
							sizes="60vw"
						/>
					</div>
					<div className="project-body">
						<p className="eyebrow">Company Profile</p>
						<h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3.8rem)" }}>
							Sri Lanka&apos;s trusted construction partner.
						</h2>
					</div>
				</div>

				<p className="lead">
					SIEM is one of Sri Lanka&apos;s premier civil construction firms. We are
					committed to delivering quality construction solutions on time, earning
					the satisfaction of our clients. Our ability to bring together the
					right combination of experience and expertise in construction is second
					to none.
				</p>
				<p className="lead">
					Thanks to our all-round engineering experience, we offer a
					comprehensive service from advisory work to final construction. The
					future positioning highlights the same foundation through a more modern
					lens: tropical climate intelligence, luxury residential and boutique
					hotel quality, commercial fit-out and careful colonial renovation.
				</p>

				<div className="content-grid">
					{[
						["1993", "Year established"],
						["33+", "Years of experience"],
						["200+", "Projects completed"],
						["Sri Lanka", "Base of operations"],
					].map(([value, label]) => (
						<div className="feature-card" key={label}>
							<h3 style={{ fontSize: "2.4rem" }}>{value}</h3>
							<p>{label}</p>
						</div>
					))}
				</div>
			</div>
		</PageLayout>
	);
}
