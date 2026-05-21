import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import LinenCalculator from "@/components/LinenCalculator";

export const metadata: Metadata = {
	title: "Hospitality Sourcing & Linen Procurement Estimator | SIEM",
	description:
		"Optimize your hospitality FF&E budgets. Compare prices across Alankara Designs, Bedsheets Paradise, and Raawana Bedding with our interactive sourcing tool.",
	keywords: "sourcing, procurement, hospitality linen, Alankara, Raawana, Sri Lanka, hotel construction, SIEM",
};

export default function LinenProcurementPage() {
	return (
		<PageLayout
			title="Linen Sourcing & Estimator"
			breadcrumbs={[
				{ label: "Home", href: "/" },
				{ label: "Services", href: "/services" },
				{ label: "Linen Sourcing & Estimator" },
			]}
		>
			<LinenCalculator />
		</PageLayout>
	);
}
