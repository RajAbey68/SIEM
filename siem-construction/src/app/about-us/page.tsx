import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "About Us | Siem Construction",
  description: "Established in 1993, Siem Construction is one of Sri Lanka's premier civil construction firms.",
};

export default function AboutUs() {
  return (
    <PageLayout title="About Us" breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}>
      <div className="container-site section-pad">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="about-grid">
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "var(--brand-heading)", marginBottom: "1.25rem" }}>
              Welcome to Siem Construction
            </h2>
            <p style={{ color: "var(--brand-body)", lineHeight: 1.9, marginBottom: "1rem" }}>
              Established in 1993, Siem Construction is one of Sri Lanka&apos;s premier civil construction firms. We are committed to delivering quality construction solutions on time, thus earning the satisfaction of our clients.
            </p>
            <p style={{ color: "var(--brand-body)", lineHeight: 1.9, marginBottom: "1rem" }}>
              Our ability to bring together the right combination of experience and expertise in construction is second to none. Thanks to our all-round engineering experience, we offer a comprehensive service from advisory work to final construction.
            </p>
            <p style={{ color: "var(--brand-body)", lineHeight: 1.9, marginBottom: "2rem" }}>
              Our corporate philosophy of trust, integrity and quality has placed us at the forefront of the construction industry. Our team demonstrates a thorough understanding of the design process with constant attention to quality and communication.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[["1993","Year Established"],["33+","Years of Experience"],["200+","Projects Completed"],["100%","Client Retention"]].map(([v,l]) => (
                <div key={l} style={{ background: "var(--brand-teal-light)", borderLeft: "3px solid var(--brand-teal)", padding: "1rem 1.25rem", borderRadius: "2px" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 700, color: "var(--brand-teal)", lineHeight: 1 }}>{v}</div>
                  <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", color: "var(--brand-body)", marginTop: "0.3rem" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative", borderRadius: "4px", overflow: "hidden" }}>
            <Image src="/images/ai-about-team.png" alt="Siem Construction team — AI Visualisation Placeholder" width={600} height={400} style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
            <div style={{ marginTop: "0.5rem", fontSize: "0.72rem", color: "var(--brand-body)", fontFamily: "var(--font-ui)", textAlign: "center", fontStyle: "italic" }}>
              AI Visualisation · Placeholder image — real team photo to be added
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; } }`}</style>
    </PageLayout>
  );
}
