import Link from "next/link";

interface BreadcrumbItem { label: string; href?: string; }

interface PageLayoutProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  children: React.ReactNode;
}

export default function PageLayout({ title, breadcrumbs, children }: PageLayoutProps) {
  return (
    <>
      {/* Page header banner — matches original siem.lk style */}
      <div
        style={{
          background: "var(--brand-teal)",
          padding: "2.5rem 0",
          borderBottom: "3px solid var(--brand-teal-dark)",
        }}
      >
        <div className="container-site">
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#ffffff",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {title}
          </h1>
          {/* Breadcrumb */}
          <nav style={{ marginTop: "0.6rem", display: "flex", gap: "0.4rem", alignItems: "center", flexWrap: "wrap" }}>
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                {i > 0 && <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>›</span>}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.82rem", fontFamily: "var(--font-ui)", textDecoration: "none" }}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ color: "#ffffff", fontSize: "0.82rem", fontFamily: "var(--font-ui)", fontWeight: 500 }}>
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Page content */}
      <main style={{ background: "#ffffff", minHeight: "60vh" }}>
        {children}
      </main>

      {/* Footer */}
      <footer>
        <div style={{ background: "var(--brand-footer)", padding: "2.5rem 0" }}>
          <div className="container-site footer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>

            <div>
              <h4 style={{ fontFamily: "var(--font-display)", color: "#ffffff", fontSize: "1rem", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--brand-teal)" }}>
                Quick Links
              </h4>
              {[["Home","/"],["About Us","/about-us"],["Services","/services"],["Past Projects","/past-projects"],["Gallery","/gallery"],["Contact Us","/contact-us"]].map(([label, href]) => (
                <Link key={href} href={href} style={{ display: "block", color: "rgba(255,255,255,0.65)", fontSize: "0.82rem", fontFamily: "var(--font-ui)", textDecoration: "none", marginBottom: "0.4rem", transition: "color 150ms" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-teal)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                >{label}</Link>
              ))}
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--font-display)", color: "#ffffff", fontSize: "1rem", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--brand-teal)" }}>
                Contact Info
              </h4>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.82rem", fontFamily: "var(--font-ui)", lineHeight: 1.8 }}>
                Siem Construction (Pvt) Ltd<br />
                113/16, Nawala Road,<br />
                Nugegoda, Sri Lanka.<br /><br />
                +94 11 4513 327/8<br />
                +94 11 285 6111<br />
                info@siem.lk
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--font-display)", color: "#ffffff", fontSize: "1rem", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--brand-teal)" }}>
                About Siem
              </h4>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.82rem", fontFamily: "var(--font-ui)", lineHeight: 1.8 }}>
                Established in 1993, Siem Construction is one of Sri Lanka&apos;s premier civil construction firms, committed to delivering quality solutions on time.
              </p>
            </div>
          </div>
        </div>
        <div style={{ background: "var(--brand-footer-bar)", padding: "1rem 0", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem", fontFamily: "var(--font-ui)", margin: 0 }}>
            Copyright {new Date().getFullYear()} — Siem Construction (Pvt) Ltd · All Rights Reserved
          </p>
        </div>
      </footer>
      <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
