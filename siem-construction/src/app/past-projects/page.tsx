import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Past Projects | SIEM",
  description: "A selection of past construction projects by SIEM (Pvt) Ltd across Sri Lanka.",
};

// ⚠️  Project names are generic pending confirmation from Fawzia/Shanaka.
// Replace title/client/year once verified. Add real slug pages under /past-projects/[slug].
const projects = [
  { img: "/images/projects/sbi-after.jpg",  title: "Bank Heritage Renovation",      type: "Banking & Finance",  location: "Colombo",   note: "Full interior renovation of a heritage bank building — before and after." },
  { img: "/images/projects/sbi-hall.jpg",   title: "Banking Hall Fit-Out",           type: "Banking & Finance",  location: "Colombo",   note: "Complete fit-out of main banking hall including MEP, finishes and joinery." },
  { img: "/images/projects/site-01.jpg",    title: "Luxury Residential Tower",       type: "Residential",        location: "Colombo",   note: "Multi-storey residential development — structural and fit-out works." },
  { img: "/images/projects/site-02.jpg",    title: "High-Rise Construction",         type: "Residential",        location: "Sri Lanka",  note: "Reinforced concrete frame construction for high-rise residential block." },
  { img: "/images/projects/site-03.jpg",    title: "Commercial Development",         type: "Commercial",         location: "Colombo 2", note: "Commercial office and data centre development." },
  { img: "/images/projects/lobby-area.jpg", title: "Lobby & Reception Fit-Out",      type: "Commercial",         location: "Colombo",   note: "Premium lobby and reception area fit-out." },
  { img: "/images/projects/site-04.jpg",    title: "Mid-Rise Residential",           type: "Residential",        location: "Sri Lanka",  note: "Structural construction of mid-rise residential block." },
  { img: "/images/projects/site-05.jpg",    title: "Commercial Project",             type: "Commercial",         location: "Sri Lanka",  note: "Commercial construction project." },
  { img: "/images/ai-gallery.png",          title: "Your Project Here",              type: "Enquire",            location: "Sri Lanka",  note: "AI Visualisation Placeholder — contact us to discuss your project.", placeholder: true },
];

export default function PastProjects() {
  return (
    <PageLayout title="Past Projects" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Past Projects" }]}>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "#333", marginBottom: "0.75rem" }}>
        Our Portfolio
      </h2>
      <div style={{ width: "40px", height: "3px", background: "var(--brand-teal)", marginBottom: "1.5rem" }} />
      <p style={{ color: "var(--brand-body)", lineHeight: 1.9, fontSize: "0.9rem", marginBottom: "2rem" }}>
        A selection of our completed projects across Sri Lanka. We are in the process of preparing detailed case studies — please <a href="/contact-us" style={{ color: "var(--brand-teal)", textDecoration: "none" }}>contact us</a> for specific project references.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" }} className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} style={{ border: "1px solid #e5e5e5", borderRadius: "2px", overflow: "hidden", ...(p.placeholder ? { borderStyle: "dashed", borderColor: "var(--brand-teal)" } : {}) }}>
            <div style={{ position: "relative", height: "160px" }}>
              <Image src={p.img} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              {p.placeholder && (
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(84,159,151,0.15)" }}>
                  <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "var(--brand-teal)", fontWeight: 700, background: "rgba(255,255,255,0.9)", padding: "4px 10px", borderRadius: "2px" }}>MVP PLACEHOLDER</span>
                </div>
              )}
            </div>
            <div style={{ padding: "0.875rem", borderTop: "2px solid var(--brand-teal)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", color: "#333", margin: "0 0 0.25rem", fontWeight: 600 }}>{p.title}</p>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "var(--brand-teal)", margin: "0 0 0.4rem" }}>{p.type} · {p.location}</p>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", color: "#666", margin: 0, lineHeight: 1.6 }}>{p.note}</p>
            </div>
          </div>
        ))}
      </div>
      <style>{`@media (max-width: 768px) { .projects-grid { grid-template-columns: 1fr !important; } }`}</style>
    </PageLayout>
  );
}
