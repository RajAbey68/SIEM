"use client";

import { useState } from "react";
import { ExternalLink, MapPin, Maximize2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Crystal Sands",
    subtitle: "Villas In The Sky",
    type: "Luxury Residential",
    scale: "48,000 sq.ft",
    location: "Colombo, Sri Lanka",
    year: "2022",
    img: "/images/projects/site-01.jpg",
    tags: ["Residential", "High-Rise", "Design-Build"],
    featured: true,
  },
  {
    id: 2,
    title: "Orion City",
    subtitle: "Mission-Critical Data Centre",
    type: "Infrastructure",
    scale: "3,743 sq.ft",
    location: "Colombo 2, Sri Lanka",
    year: "2021",
    img: "/images/projects/site-03.jpg",
    tags: ["Data Centre", "Infrastructure", "MEP"],
    featured: false,
  },
  {
    id: 3,
    title: "State Bank of India",
    subtitle: "Head Office Renovation",
    type: "Heritage Retrofit",
    scale: "28,000 sq.ft",
    location: "Colombo, Sri Lanka",
    year: "2020",
    img: "/images/projects/sbi-after.jpg",
    tags: ["Retrofit", "Occupied", "Heritage"],
    featured: false,
  },
  {
    id: 4,
    title: "Professional Eco Care",
    subtitle: "Office Building, Col 8",
    type: "Commercial",
    scale: "Mid-scale",
    location: "Colombo 8, Sri Lanka",
    year: "2019",
    img: "/images/projects/site-05.jpg",
    tags: ["Commercial", "Fit-Out", "Sustainable"],
    featured: false,
  },
];

export default function LiveProjectGallery() {
  const [active, setActive] = useState<number | null>(null);

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" style={{ background: "var(--white)" }} className="section-pad">
      <div className="container-site">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3.5rem", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Our Portfolio</p>
            <h2 className="display-lg">
              Built with<br /><span style={{ color: "var(--terra-500)" }}>Precision.</span>
            </h2>
          </div>
          <a href="https://siem.lk/past-projects/" target="_blank" rel="noopener noreferrer" className="btn btn-teal">
            <ExternalLink size={14} />
            All Projects
          </a>
        </div>

        {/* Gallery Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gridTemplateRows: "400px 280px", gap: "1rem" }} className="gallery-grid">
          {/* Featured */}
          {featured && (
            <div
              className="project-card"
              style={{ gridRow: "1 / 3" }}
              onMouseEnter={() => setActive(featured.id)}
              onMouseLeave={() => setActive(null)}
            >
              <img src={featured.img} alt={featured.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 600ms ease" }} />
              <div className="overlay" style={{ opacity: active === featured.id ? 1 : 0 }}>
                <div>
                  <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--terra-400)", marginBottom: "0.5rem" }}>{featured.type}</p>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "white", marginBottom: "0.25rem" }}>{featured.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1rem" }}>{featured.subtitle}</p>
                  <div style={{ display: "flex", gap: "1.5rem", color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", fontFamily: "var(--font-ui)" }}>
                    <span><MapPin size={12} style={{ display: "inline", marginRight: "4px" }} />{featured.location}</span>
                    <span><Maximize2 size={12} style={{ display: "inline", marginRight: "4px" }} />{featured.scale}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Rest */}
          {rest.map((p) => (
            <div
              key={p.id}
              className="project-card"
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive(null)}
            >
              <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 600ms ease" }} />
              <div className="overlay" style={{ opacity: active === p.id ? 1 : 0 }}>
                <div>
                  <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--terra-400)", marginBottom: "0.4rem" }}>{p.type}</p>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "white", marginBottom: "0.2rem" }}>{p.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.85rem" }}>{p.scale} · {p.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-card img { transition: transform 600ms ease !important; }
        .project-card:hover img { transform: scale(1.06) !important; }
        .project-card .overlay { transition: opacity 350ms ease !important; }
        @media (max-width: 768px) { .gallery-grid { grid-template-columns: 1fr !important; grid-template-rows: 280px 220px 220px 220px !important; } }
      `}</style>
    </section>
  );
}
