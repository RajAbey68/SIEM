import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Gallery | Siem Construction",
  description: "Photo gallery of Siem Construction projects across Sri Lanka.",
};

const galleryImages = [
  { src: "/images/projects/site-01.jpg", alt: "Construction site — Crystal Sands" },
  { src: "/images/projects/site-02.jpg", alt: "Construction site aerial view" },
  { src: "/images/projects/site-03.jpg", alt: "Orion City Data Centre" },
  { src: "/images/projects/site-04.jpg", alt: "Site progress" },
  { src: "/images/projects/site-05.jpg", alt: "Commercial project" },
  { src: "/images/projects/site-06.jpg", alt: "Construction detail" },
  { src: "/images/projects/site-07.jpg", alt: "Structural work" },
  { src: "/images/projects/sbi-after.jpg", alt: "State Bank of India — after renovation" },
  { src: "/images/projects/sbi-before.jpg", alt: "State Bank of India — before renovation" },
  { src: "/images/projects/sbi-hall.jpg", alt: "SBI bank hall" },
  { src: "/images/projects/lobby-area.jpg", alt: "Lobby area" },
  { src: "/images/ai-gallery.png", alt: "Construction site — AI Visualisation Placeholder" },
];

export default function Gallery() {
  return (
    <PageLayout title="Gallery" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}>
      <div className="container-site section-pad">
        <p style={{ color: "var(--brand-body)", marginBottom: "2rem", fontFamily: "var(--font-ui)" }}>
          A selection of images from our projects across Sri Lanka. Images marked <em>AI Visualisation</em> are placeholders — real photography to be added.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }} className="gallery-grid">
          {galleryImages.map((img) => (
            <div key={img.src} style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", borderRadius: "3px", border: "1px solid var(--brand-border)" }}>
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ objectFit: "cover", transition: "transform 400ms ease" }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .gallery-grid { grid-template-columns: repeat(2,1fr) !important; } } @media (max-width: 480px) { .gallery-grid { grid-template-columns: 1fr !important; } }`}</style>
    </PageLayout>
  );
}
