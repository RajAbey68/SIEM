import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Our Services | SIEM",
  description: "Construction services offered by SIEM (Pvt) Ltd — civil construction, renovation, project management and more.",
};

const services = [
  {
    title: "Civil Construction",
    desc: "Civil Construction and Structural Steel Buildings — Residential, commercial and institutional buildings.",
  },
  {
    title: "Italian Tiles & Marble",
    desc: "Suppliers of Italian tiles and marble — agency to import best quality tiles and marble from Italy, customized per project.",
  },
  {
    title: "Project Management",
    desc: "End-to-end project oversight from feasibility study through to final account and handover. We bring the right combination of experience and expertise to manage complex, multi-discipline projects.",
  },
  {
    title: "Fit-Out & Interiors",
    desc: "Commercial and hospitality interior fit-outs to client specification. We co-ordinate all trades — MEP, joinery, finishes — under a single contract.",
  },
  {
    title: "Advisory & Consultancy",
    desc: "Pre-construction advisory services including cost planning, buildability reviews, and value engineering. We help clients make informed decisions before breaking ground.",
  },
  {
    title: "Infrastructure Works",
    desc: "Site infrastructure including drainage, roads, external works, and utilities. We provide a comprehensive service from advisory work to final construction.",
  },
];

export default function Services() {
  return (
    <PageLayout title="Services" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "#333", marginBottom: "0.75rem" }}>
        Civil Construction and Structural Steel Buildings
      </h2>
      <div style={{ width: "40px", height: "3px", background: "var(--brand-teal)", marginBottom: "1.5rem" }} />
      <p style={{ color: "var(--brand-body)", lineHeight: 1.9, fontSize: "0.9rem", marginBottom: "2rem" }}>
        SIEM offers a comprehensive range of construction services. Our ability to bring together the right combination of experience and expertise is second to none. Thanks to our all-round engineering experience, we offer a complete service from advisory work to final construction.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {services.map((s, i) => (
          <div key={s.title} style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid #e5e5e5", borderLeft: "3px solid var(--brand-teal)", marginBottom: "0.75rem", background: i % 2 === 0 ? "#fafafa" : "#fff" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "#333", marginBottom: "0.5rem" }}>{s.title}</h3>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", color: "var(--brand-body)", lineHeight: 1.8, margin: 0 }}>{s.desc}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "2rem", background: "var(--brand-teal-light)", border: "1px solid var(--brand-teal)", borderRadius: "3px", padding: "1.25rem" }}>
        <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.88rem", color: "#333", margin: 0, lineHeight: 1.8 }}>
          To discuss your project requirements, please{" "}
          <a href="/contact-us" style={{ color: "var(--brand-teal)", fontWeight: 600, textDecoration: "none" }}>contact us</a>{" "}
          or call <strong>+94 718 419 419</strong>.
        </p>
      </div>
    </PageLayout>
  );
}
