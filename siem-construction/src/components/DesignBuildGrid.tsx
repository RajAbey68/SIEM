"use client";

import { Building2, Layers, Leaf, Cpu, HardHat, RotateCcw } from "lucide-react";

const services = [
  {
    icon: Cpu,
    eyebrow: "Digital Delivery",
    title: "BIM & Technology",
    description: "Full Building Information Modelling from LOD 100 to LOD 500. Clash detection, 4D scheduling, and digital handover packages.",
    features: ["Clash Detection", "4D Scheduling", "Digital Twins", "LOD 500"],
    accent: "var(--teal-700)",
  },
  {
    icon: Building2,
    eyebrow: "Architecture & Engineering",
    title: "Integrated Design-Build",
    description: "In-house architectural design, structural engineering, and construction under one roof. One team, one brief, zero rework.",
    features: ["Design-Build", "Structural Eng.", "MEP Coordination", "Value Engineering"],
    accent: "var(--terra-500)",
    featured: true,
  },
  {
    icon: Leaf,
    eyebrow: "ESG & Green Building",
    title: "Sustainability by Design",
    description: "LEED and Green Mark compliance, material lifecycle analysis, and embodied carbon reporting built into every project from day one.",
    features: ["LEED Compliance", "Carbon Reporting", "Material Lifecycle", "Biophilic Design"],
    accent: "var(--teal-500)",
  },
  {
    icon: Layers,
    eyebrow: "Project Strategy",
    title: "IPD Delivery",
    description: "Integrated Project Delivery — single-source accountability from concept to keys-in-hand. One contact, one contract.",
    features: ["Single Contract", "Risk Sharing", "Early CI", "Open-Book Costing"],
    accent: "var(--sand-700)",
  },
  {
    icon: HardHat,
    eyebrow: "Civil & Infrastructure",
    title: "Civil Construction",
    description: "33 years of on-the-ground execution. From data centres to luxury towers — precision at every scale.",
    features: ["High-Rise", "Commercial", "Data Centres", "Infrastructure"],
    accent: "var(--teal-700)",
  },
  {
    icon: RotateCcw,
    eyebrow: "Adaptive Reuse",
    title: "Heritage Retrofit",
    description: "Sensitive, occupied-premises renovations with zero disruption to live operations. We respect the past while engineering the future.",
    features: ["Live Renovations", "Structural Reinforcement", "Fit-Out", "Heritage"],
    accent: "var(--terra-500)",
  },
];

export default function DesignBuildGrid() {
  return (
    <section id="services" style={{ background: "var(--sand-50)" }} className="section-pad">
      <div className="container-site">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "end", marginBottom: "4rem" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>What We Deliver</p>
            <h2 className="display-lg">
              Construction<br /><span style={{ color: "var(--teal-700)" }}>Re-imagined.</span>
            </h2>
          </div>
          <p style={{ color: "rgba(26,26,26,0.65)", lineHeight: 1.8, fontSize: "1.05rem", maxWidth: "480px" }}>
            We combine BIM technology, design intelligence, and construction mastery under one contractual roof.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="services-grid">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div key={svc.title} className="card-service" style={svc.featured ? { background: "var(--teal-800)", color: "var(--white)" } : {}}>
                <div style={{ width: "48px", height: "48px", borderRadius: "4px", background: svc.featured ? "rgba(255,255,255,0.1)" : `${svc.accent}20`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                  <Icon size={22} color={svc.featured ? "var(--teal-300)" : svc.accent} />
                </div>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, color: svc.featured ? "var(--terra-400)" : svc.accent, marginBottom: "0.6rem" }}>{svc.eyebrow}</p>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, color: svc.featured ? "var(--white)" : "var(--charcoal)", marginBottom: "1rem", lineHeight: 1.2 }}>{svc.title}</h3>
                <p style={{ color: svc.featured ? "rgba(255,255,255,0.7)" : "rgba(26,26,26,0.65)", lineHeight: 1.75, fontSize: "0.9rem", marginBottom: "1.5rem" }}>{svc.description}</p>
                <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {svc.features.map((f) => (
                    <li key={f} style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", padding: "0.3rem 0.8rem", borderRadius: "100px", background: svc.featured ? "rgba(255,255,255,0.1)" : `${svc.accent}15`, color: svc.featured ? "rgba(255,255,255,0.8)" : svc.accent, fontWeight: 500 }}>{f}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px)  { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
