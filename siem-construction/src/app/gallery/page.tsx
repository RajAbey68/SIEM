"use client";

import Image from "next/image";
import PageLayout from "@/components/PageLayout";

const galleryImages = [
  { src: "/images/projects/site-01.jpg", alt: "Construction site, Sri Lanka" },
  { src: "/images/projects/site-02.jpg", alt: "Construction site aerial view" },
  { src: "/images/projects/site-03.jpg", alt: "Commercial development, Colombo 2" },
  { src: "/images/projects/site-04.jpg", alt: "Site progress" },
  { src: "/images/projects/site-05.jpg", alt: "Commercial project" },
  { src: "/images/projects/site-06.jpg", alt: "Construction detail" },
  { src: "/images/projects/site-07.jpg", alt: "Structural work" },
  { src: "/images/projects/sbi-after.jpg", alt: "Bank renovation — after" },
  { src: "/images/projects/sbi-before.jpg", alt: "Bank renovation — before" },
  { src: "/images/projects/sbi-hall.jpg", alt: "Banking hall" },
  { src: "/images/projects/lobby-area.jpg", alt: "Lobby area" },
  { src: "/images/ai-gallery.png", alt: "AI Visualisation Placeholder" },
];

export default function Gallery() {
  return (
    <PageLayout title="Gallery" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}>
      <p style={{ color: "var(--brand-body)", marginBottom: "1.5rem", fontFamily: "var(--font-ui)", fontSize: "0.88rem" }}>
        A selection of images from our projects across Sri Lanka. Images marked <em>AI Visualisation</em> are placeholders pending real photography.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }} className="gallery-grid">
        {galleryImages.map((img) => (
          <div key={img.src} style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", borderRadius: "2px", border: "1px solid #e5e5e5" }}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) { .gallery-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .gallery-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </PageLayout>
  );
}
