/**
 * Enquiry delivery for the static build.
 *
 * `output: "export"` in next.config.ts means no serverless functions / route
 * handlers, so the forms post directly to FormSubmit, which emails info@siem.lk.
 *
 * NOTE: FormSubmit requires one-time activation of the recipient address.
 * Until the "Activate Form" link in info@siem.lk is clicked, FormSubmit answers
 * HTTP 200 with {"success":"false"} and nothing is delivered — the forms surface
 * that as an error rather than a fake success.
 */

export const ENQUIRY_ENDPOINT = "https://formsubmit.co/ajax/info@siem.lk";

export type Enquiry = {
	name: string;
	email: string;
	message: string;
	subject?: string;
	phone?: string;
};

type FormSubmitResponse = {
	success?: string;
	message?: string;
};

export async function sendEnquiry(enquiry: Enquiry): Promise<void> {
	const body = new URLSearchParams({
		_subject: enquiry.subject ?? "New enquiry from siem.lk",
		_template: "table",
		_captcha: "false",
		name: enquiry.name,
		email: enquiry.email,
		phone: enquiry.phone ?? "",
		message: enquiry.message,
	}).toString();

	const res = await fetch(ENQUIRY_ENDPOINT, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Accept: "application/json",
		},
		body,
	});

	const data = (await res.json().catch(() => null)) as FormSubmitResponse | null;
	const rejected =
		!res.ok || (data !== null && data.success === "false");

	if (rejected) {
		throw new Error(
			`Enquiry not delivered (${res.status}${data?.message ? `: ${data.message}` : ""})`,
		);
	}
}
