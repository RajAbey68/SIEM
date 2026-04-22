"use client";

import { useState } from "react";
import { ExternalLink, MapPin, Maximize2, ImagePlus } from "lucide-react";

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
    placeholder: false,
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
    placeholder: false,
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
    placeholder: false,
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
    placeholder: false,
  },
  {
    id: 5,
    title: "Your Project Here",
    subtitle: "Next Milestone · TBD",
    type: "Design-Build · IPD",
    scale: "Contact us",
    location: "Sri Lanka",
    year: "2026",
    img: "/images/hero-placeholder-blueprint.png",
    tags: ["BIM", "IPD", "Coming Soon"],
    featured: false,
    placeholder: true,
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

        {/* Gallery: featured (tall left) + 2×2 grid right */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gridTemplateRows: "320px 280px", gap: "1rem" }} className="gallery-grid">

          {/* Featured — spans both rows */}
          {featured && (
            <div
              className="project-card"
              style={{ gridRow: "1 / 3" }}
              onMouseEnter={() => setActive(featured.id)}
              onMouseLeave={() => setActive(null)}
            >
              <img src={featured.img} alt={featured.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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

          {/* Right 2×2 slots */}
          {rest.map((p) =>
            p.placeholder ? (
              /* ── PLACEHOLDER CARD ── */
              <div
                key={p.id}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "4px",
                  border: "2px dashed var(--teal-400)",
                  background: "var(--teal-950)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  cursor: "default",
                }}
              >
                {/* Blueprint image as faint background */}
                <img
                  src={p.img}
                  alt="placeholder blueprint"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.15 }}
                />
                {/* Placeholder badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "0.75rem",
                    right: "0.75rem",
                    background: "var(--terra-500)",
                    color: "white",
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "0.3rem 0.7rem",
                    borderRadius: "2px",
                  }}
                >
                  MVP Placeholder
                </div>
                {/* Content */}
                <div style={{ position: "relative", textAlign: "center", padding: "1.5rem" }}>
                  <ImagePlus size={28} color="var(--teal-400)" style={{ marginBottom: "0.75rem" }} />
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--white)", marginBottom: "0.4rem" }}>
                    Your Project
                  </h3>
                  <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginBottom: "1.25rem", lineHeight: 1.6 }}>
                    This slot is reserved for an upcoming Siem project. Images and details to be added post-launch.
                  </p>
                  <a
                    href="#contact"
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--teal-300)",
                      textDecoration: "none",
                      borderBottom: "1px solid var(--teal-400)",
                      paddingBottom: "2px",
                    }}
                  >
                    Start your project →
                  </a>
                </div>
              </div>
            ) : (
              /* ── REAL PROJECT CARD ── */
              <div
                key={p.id}
                className="project-card"
                onMouseEnter={() => setActive(p.id)}
                onMouseLeave={() => setActive(null)}
              >
                <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div className="overlay" style={{ opacity: active === p.id ? 1 : 0 }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--terra-400)", marginBottom: "0.4rem" }}>{p.type}</p>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "white", marginBottom: "0.2rem" }}>{p.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.85rem" }}>{p.scale} · {p.year}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <style>{`
        .project-card img { transition: transform 600ms ease !important; }
        .project-card:hover img { transform: scale(1.06) !important; }
        .project-card .overlay { transition: opacity 350ms ease !important; }
        @media (max-width: 1024px) { .gallery-grid { grid-template-columns: 1fr 1fr !important; grid-template-rows: auto !important; } }
        @media (max-width: 640px)  { .gallery-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
