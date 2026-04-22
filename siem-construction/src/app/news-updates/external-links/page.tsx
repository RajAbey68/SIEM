"use client";

import PageLayout from "@/components/PageLayout";

const links = [
  { name: "Institute for Construction Training and Development (ICTAD)", url: "https://www.ictad.gov.lk", desc: "Sri Lanka's national construction training authority." },
  { name: "Urban Development Authority Sri Lanka", url: "https://www.uda.lk", desc: "Government planning and urban development authority." },
  { name: "National Construction Association of Sri Lanka (NCASL)", url: "https://www.ncasl.lk", desc: "Industry body for Sri Lanka's construction sector." },
  { name: "Autodesk BIM 360", url: "https://www.autodesk.com/bim-360", desc: "Construction management and BIM collaboration platform." },
  { name: "Ceylon Chamber of Commerce", url: "https://www.chamber.lk", desc: "Sri Lanka's premier business chamber." },
];

export default function ExternalLinks() {
  return (
    <PageLayout
      title="External Links"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "News & Updates", href: "/news-updates" }, { label: "External Links" }]}
    >
      <p style={{ color: "var(--brand-body)", fontFamily: "var(--font-ui)", lineHeight: 1.8, marginBottom: "2rem" }}>
        A collection of useful external resources and industry links relevant to the construction industry in Sri Lanka and beyond.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", padding: "1.25rem 1.5rem", border: "1px solid var(--brand-border)", borderLeft: "3px solid var(--brand-teal)", borderRadius: "3px", textDecoration: "none" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--brand-teal-light)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            <div style={{ fontFamily: "var(--font-ui)", fontWeight: 600, color: "var(--brand-teal)", fontSize: "0.95rem", marginBottom: "0.3rem" }}>
              {link.name} ↗
            </div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "var(--brand-body)" }}>
              {link.desc}
            </div>
          </a>
        ))}
      </div>
    </PageLayout>
  );
}
