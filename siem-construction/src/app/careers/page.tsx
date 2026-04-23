import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Careers | SIEM",
  description: "Join the SIEM team. Explore career opportunities in Sri Lanka's leading construction firm.",
};

export default function Careers() {
  return (
    <PageLayout title="Careers" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}>
      <div className="container-site section-pad">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="careers-grid">
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "var(--brand-heading)", marginBottom: "1rem" }}>
              Build Your Career With Us
            </h2>
            <p style={{ color: "var(--brand-body)", lineHeight: 1.9, marginBottom: "1rem" }}>
              At SIEM, we believe our people are our greatest asset. We are constantly looking for talented, driven individuals who share our passion for quality construction and engineering excellence.
            </p>
            <p style={{ color: "var(--brand-body)", lineHeight: 1.9, marginBottom: "2rem" }}>
              Whether you are a seasoned engineer, a fresh graduate, or an experienced site manager, we offer a dynamic work environment with opportunities for growth and development.
            </p>

            {/* Coming Soon notice */}
            <div style={{ background: "var(--brand-teal-light)", border: "1px solid var(--brand-teal)", borderRadius: "4px", padding: "1.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--brand-teal)", marginBottom: "0.5rem" }}>
                🚧 Vacancies — Coming Soon
              </h3>
              <p style={{ color: "var(--brand-body)", fontSize: "0.88rem", lineHeight: 1.8, margin: 0 }}>
                We are currently updating our vacancies listing. In the meantime, please send your CV to{" "}
                <a href="mailto:careers@siem-construction.vercel.app" style={{ color: "var(--brand-teal)", fontWeight: 600 }}>careers@siem-construction.vercel.app</a>{" "}
                with the role you are interested in.
              </p>
            </div>

            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {["Civil Engineering", "Quantity Surveying", "Project Management", "Architecture", "Electrical & MEP", "Site Supervision"].map((role) => (
                <span key={role} style={{ background: "#f5f5f5", border: "1px solid var(--brand-border)", padding: "0.4rem 0.9rem", borderRadius: "20px", fontFamily: "var(--font-ui)", fontSize: "0.78rem", color: "var(--brand-body)" }}>
                  {role}
                </span>
              ))}
            </div>
          </div>
          <div>
            <Image src="/images/ai-careers.png" alt="SIEM office — AI Visualisation Placeholder" width={600} height={400} style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
            <p style={{ marginTop: "0.5rem", fontSize: "0.72rem", color: "var(--brand-body)", fontFamily: "var(--font-ui)", textAlign: "center", fontStyle: "italic" }}>
              AI Visualisation · Placeholder — real office photo to be added
            </p>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .careers-grid { grid-template-columns: 1fr !important; } }`}</style>
    </PageLayout>
  );
}
