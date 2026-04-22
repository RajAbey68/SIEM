import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Our Designs | Siem Construction",
  description: "Architectural designs and visualisations from Siem Construction.",
};

const designs = [
  { src: "/images/gallery/design-1.jpg", title: "Architectural Drawing 1", note: "Siem Construction archive" },
  { src: "/images/gallery/design-2.jpg", title: "Architectural Drawing 2", note: "Siem Construction archive" },
  { src: "/images/gallery/design-3.jpg", title: "Architectural Drawing 3", note: "Siem Construction archive" },
  { src: "/images/gallery/design-4.jpg", title: "Architectural Drawing 4", note: "Siem Construction archive" },
  { src: "/images/gallery/design-5.jpg", title: "Architectural Drawing 5", note: "Siem Construction archive" },
  { src: "/images/ai-designs.png", title: "Mixed-Use Development — Colombo", note: "AI Visualisation · Placeholder" },
];

export default function OurDesigns() {
  return (
    <PageLayout title="Our Designs" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Designs" }]}>
      <div className="container-site section-pad">
        <p style={{ color: "var(--brand-body)", marginBottom: "2rem", fontFamily: "var(--font-ui)", maxWidth: "680px", lineHeight: 1.8 }}>
          Our design portfolio showcases the breadth of our architectural and engineering capabilities — from technical drawings to full 3D visualisations. Items marked <em>AI Visualisation</em> are indicative placeholders.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }} className="designs-grid">
          {designs.map((d) => (
            <div key={d.src} style={{ border: "1px solid var(--brand-border)", borderRadius: "3px", overflow: "hidden" }}>
              <div style={{ position: "relative", aspectRatio: "4/3" }}>
                <Image src={d.src} alt={d.title} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "0.875rem 1rem", background: "#fafafa" }}>
                <p style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "0.88rem", color: "var(--brand-heading)", margin: 0 }}>{d.title}</p>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", color: "var(--brand-body)", margin: "0.2rem 0 0", fontStyle: "italic" }}>{d.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 640px) { .designs-grid { grid-template-columns: 1fr !important; } }`}</style>
    </PageLayout>
  );
}
