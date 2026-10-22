"use client";

import { useState } from "react";
import { sendEnquiry } from "@/lib/enquiry";

export default function ContactForm() {
	const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("submitting");
		try {
			await sendEnquiry({
				name: formData.name,
				email: formData.email,
				phone: formData.phone,
				message: formData.message,
				subject: "Enquiry from siem.lk — Send us an Enquiry form",
			});
			setStatus("success");
			setFormData({ name: "", email: "", phone: "", message: "" });
		} catch {
			setStatus("error");
		}
	};

	return (
		<div
			style={{
				border: "1px solid #e5e5e5",
				padding: "1.25rem",
				borderRadius: "2px",
				background: "#fafafa",
			}}
		>
			<h3
				style={{
					fontFamily: "var(--font-display)",
					fontSize: "1rem",
					color: "#333",
					margin: "0 0 1rem",
					paddingBottom: "0.5rem",
					borderBottom: "2px solid var(--brand-teal)",
				}}
			>
				Send us an Enquiry
			</h3>
			{status === "success" ? (
				<div
					style={{
						padding: "1rem",
						background: "#e6f4ea",
						color: "#137333",
						fontSize: "0.85rem",
						fontFamily: "var(--font-ui)",
						borderRadius: "2px",
						marginBottom: "1rem",
					}}
				>
					Thank you for your enquiry. We will get back to you shortly.
				</div>
			) : status === "error" ? (
				<div
					style={{
						padding: "1rem",
						background: "#fdecea",
						color: "#d93025",
						fontSize: "0.85rem",
						fontFamily: "var(--font-ui)",
						borderRadius: "2px",
						marginBottom: "1rem",
					}}
				>
					Sorry — we couldn&apos;t send that. Please email info@siem.lk directly.
				</div>
			) : (
				<form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
					<div>
						<label
							htmlFor="form-name"
							style={{
								display: "block",
								fontFamily: "var(--font-ui)",
								fontSize: "0.72rem",
								fontWeight: 600,
								color: "#555",
								marginBottom: "3px",
								textTransform: "uppercase",
							}}
						>
							Name
						</label>
						<input
							type="text"
							id="form-name"
							required
							value={formData.name}
							onChange={(e) => setFormData({ ...formData, name: e.target.value })}
							style={{
								width: "100%",
								padding: "8px 10px",
								fontSize: "0.85rem",
								fontFamily: "var(--font-ui)",
								border: "1px solid #ccc",
								borderRadius: "2px",
							}}
						/>
					</div>
					<div>
						<label
							htmlFor="form-email"
							style={{
								display: "block",
								fontFamily: "var(--font-ui)",
								fontSize: "0.72rem",
								fontWeight: 600,
								color: "#555",
								marginBottom: "3px",
								textTransform: "uppercase",
							}}
						>
							Email
						</label>
						<input
							type="email"
							id="form-email"
							required
							value={formData.email}
							onChange={(e) => setFormData({ ...formData, email: e.target.value })}
							style={{
								width: "100%",
								padding: "8px 10px",
								fontSize: "0.85rem",
								fontFamily: "var(--font-ui)",
								border: "1px solid #ccc",
								borderRadius: "2px",
							}}
						/>
					</div>
					<div>
						<label
							htmlFor="form-phone"
							style={{
								display: "block",
								fontFamily: "var(--font-ui)",
								fontSize: "0.72rem",
								fontWeight: 600,
								color: "#555",
								marginBottom: "3px",
								textTransform: "uppercase",
							}}
						>
							Phone
						</label>
						<input
							type="tel"
							id="form-phone"
							value={formData.phone}
							onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
							style={{
								width: "100%",
								padding: "8px 10px",
								fontSize: "0.85rem",
								fontFamily: "var(--font-ui)",
								border: "1px solid #ccc",
								borderRadius: "2px",
							}}
						/>
					</div>
					<div>
						<label
							htmlFor="form-message"
							style={{
								display: "block",
								fontFamily: "var(--font-ui)",
								fontSize: "0.72rem",
								fontWeight: 600,
								color: "#555",
								marginBottom: "3px",
								textTransform: "uppercase",
							}}
						>
							Message
						</label>
						<textarea
							id="form-message"
							required
							rows={4}
							value={formData.message}
							onChange={(e) => setFormData({ ...formData, message: e.target.value })}
							style={{
								width: "100%",
								padding: "8px 10px",
								fontSize: "0.85rem",
								fontFamily: "var(--font-ui)",
								border: "1px solid #ccc",
								borderRadius: "2px",
								resize: "vertical",
							}}
						/>
					</div>
					<button
						type="submit"
						disabled={status === "submitting"}
						style={{
							background: "var(--brand-teal)",
							color: "#fff",
							border: "none",
							padding: "10px 14px",
							fontFamily: "var(--font-ui)",
							fontSize: "0.8rem",
							fontWeight: 600,
							borderRadius: "2px",
							cursor: "pointer",
							textTransform: "uppercase",
							letterSpacing: "0.04em",
							marginTop: "0.25rem",
						}}
					>
						{status === "submitting" ? "Sending..." : "Submit Enquiry"}
					</button>
				</form>
			)}
		</div>
	);
}
