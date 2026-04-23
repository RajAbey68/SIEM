import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "News & Updates | SIEM",
  description: "Latest news and project updates from SIEM Sri Lanka.",
};

export default function NewsUpdates() {
  return (
    <PageLayout title="News & Updates" breadcrumbs={[{ label: "Home", href: "/" }, { label: "News & Updates" }]}>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "#333", marginBottom: "1rem" }}>
        News &amp; Updates
      </h2>
      <div style={{ width: "40px", height: "3px", background: "var(--brand-teal)", marginBottom: "1.5rem" }} />

      <div style={{ background: "var(--brand-teal-light)", border: "1px solid var(--brand-teal)", borderRadius: "3px", padding: "1.5rem", marginBottom: "2rem" }}>
        <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.9rem", color: "#333", lineHeight: 1.8, margin: 0 }}>
          We are currently preparing our news and updates section. Please check back soon, or{" "}
          <a href="/contact-us" style={{ color: "var(--brand-teal)", fontWeight: 600, textDecoration: "none" }}>
            contact us directly
          </a>{" "}
          for the latest project information.
        </p>
      </div>

      <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.88rem", color: "var(--brand-body)", lineHeight: 1.8 }}>
        In the meantime, you may find our{" "}
        <a href="/gallery" style={{ color: "var(--brand-teal)", textDecoration: "none" }}>Gallery</a>{" "}
        and{" "}
        <a href="/past-projects" style={{ color: "var(--brand-teal)", textDecoration: "none" }}>Past Projects</a>{" "}
        pages useful.
      </p>
    </PageLayout>
  );
}
