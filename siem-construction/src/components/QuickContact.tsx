"use client";

import { Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function QuickContact() {
	const [status, setStatus] = useState<"idle" | "ready">("idle");

	return (
		<div className="contact-card" style={{ padding: "1.25rem" }}>
			<p className="eyebrow">Project Desk</p>
			<h3>Discuss a build, renovation, or fit-out.</h3>
			<p>
				Use the direct details below for now. The future branch keeps this honest
				until a real form endpoint is connected.
			</p>

			<div style={{ display: "grid", gap: "0.65rem", marginTop: "1rem" }}>
				<a className="btn btn-outline" href="tel:+94718419419">
					<Phone size={16} />
					+94 718 419 419
				</a>
				<a className="btn btn-outline" href="mailto:info@siem.lk">
					<Mail size={16} />
					info@siem.lk
				</a>
			</div>

			<form
				className="contact-form"
				style={{ marginTop: "1rem" }}
				onSubmit={(event) => {
					event.preventDefault();
					setStatus("ready");
				}}
			>
				<div className="field">
					<label htmlFor="qc-name">Name</label>
					<input id="qc-name" required />
				</div>
				<div className="field">
					<label htmlFor="qc-email">Email</label>
					<input id="qc-email" type="email" required />
				</div>
				<div className="field">
					<label htmlFor="qc-message">Brief</label>
					<textarea id="qc-message" />
				</div>
				<button type="submit" className="btn btn-primary">
					Prepare Enquiry
				</button>
			</form>

			{status === "ready" && (
				<p style={{ color: "var(--leaf)", fontSize: "0.88rem", marginTop: "1rem" }}>
					Thanks. Please send the brief to info@siem.lk while we connect the
					production enquiry system.
				</p>
			)}
		</div>
	);
}
