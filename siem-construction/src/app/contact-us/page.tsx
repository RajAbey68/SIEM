import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
	title: "Contact | SIEM",
	description:
		"Get in touch with SIEM (Pvt) Ltd, 51/1, Gregory's Road, Colombo 07, Sri Lanka.",
};

export default function ContactUs() {
	return (
		<PageLayout
			title="Contact"
			intro="Speak to SIEM about civil construction, luxury homes, boutique hospitality work, commercial fit-out, project management or colonial renovation."
			breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
		>
			<div style={{ display: "grid", gap: "1rem" }}>
				<div className="contact-card" style={{ padding: "1.5rem" }}>
					<p className="eyebrow">Head Office</p>
					<h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", lineHeight: 1, margin: "0 0 1rem" }}>
						51/1, Gregory&apos;s Road, Colombo 07.
					</h2>
					<p>
						SIEM (Pvt) Ltd
						<br />
						Colombo 07, Sri Lanka
					</p>
				</div>

				<div className="content-grid">
					<div className="feature-card">
						<h3>Direct</h3>
						<p>
							<a href="tel:+94718419419">+94 718 419 419</a>
							<br />
							<a href="tel:+94714429429">+94 714 429 429</a>
							<br />
							<a href="mailto:info@siem.lk">info@siem.lk</a>
						</p>
					</div>
					<div className="feature-card">
						<h3>Office Hours</h3>
						<p>
							Monday to Friday: 8:00 AM to 5:00 PM
							<br />
							Saturday: 8:00 AM to 1:00 PM
							<br />
							Sunday: Closed
						</p>
					</div>
				</div>

				<div className="contact-card" style={{ overflow: "hidden" }}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0!2d79.8997!3d6.8649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTEnNTMuNiJOIDc5wrA1Myc1OC45IkU!5e0!3m2!1sen!2slk!4v1680000000000!5m2!1sen!2slk"
						width="100%"
						height="360"
						style={{ border: 0, display: "block" }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="SIEM office location in Colombo, Sri Lanka"
					/>
				</div>
			</div>
		</PageLayout>
	);
}
