import Link from "next/link";
import QuickContact from "@/components/QuickContact";

interface BreadcrumbItem { label: string; href?: string; }
interface PageLayoutProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  children: React.ReactNode;
}

export default function PageLayout({ title, breadcrumbs, children }: PageLayoutProps) {
  return (
    <>
      {/* Page title banner */}
      <div style={{ background: "var(--brand-teal)", padding: "1.5rem 0" }}>
        <div className="container-site">
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, color: "#fff", margin: 0 }}>
            {title}
          </h1>
          <nav style={{ marginTop: "0.4rem", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                {i > 0 && <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>›</span>}
                {crumb.href ? (
                  <Link href={crumb.href} style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.78rem", fontFamily: "var(--font-ui)", textDecoration: "none" }}>{crumb.label}</Link>
                ) : (
                  <span style={{ color: "#fff", fontSize: "0.78rem", fontFamily: "var(--font-ui)", fontWeight: 600 }}>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Two-column layout: content | sidebar ── */}
      <div className="container-site page-body" style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "2rem", padding: "2rem var(--section-px)" }}>
        {/* Left: page content */}
        <main style={{ minWidth: 0 }}>
          {children}
        </main>

        {/* Right: persistent Quick Contact sidebar */}
        <aside style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <QuickContact />

          {/* Secondary nav widget */}
          <div style={{ background: "#fff", border: "1px solid #ddd", borderTop: "3px solid var(--brand-teal)", padding: "1.25rem" }}>
            <h4 style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", fontWeight: 700, color: "#333", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 0.75rem" }}>Pages</h4>
            {[["Home","/"],["About Us","/about-us"],["Services","/services"],["Past Projects","/past-projects"],["CSR & Sustainability","/csr-sustainability"],["Gallery","/gallery"],["Our Designs","/our-designs"],["Careers","/careers"],["News & Updates","/news-updates"],["Contact Us","/contact-us"]].map(([l,h]) => (
              <Link key={h} href={h} style={{ display:"block", fontFamily:"var(--font-ui)", fontSize:"0.8rem", color:"var(--brand-teal)", textDecoration:"none", padding:"5px 0", borderBottom:"1px solid #f0f0f0" }}>
                › {l}
              </Link>
            ))}
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer>
        <div style={{ background: "var(--brand-footer)", padding: "2.5rem 0" }}>
          <div className="container-site footer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2rem" }}>
            <div>
              <h4 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "1rem", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--brand-teal)" }}>Quick Links</h4>
              {[["Home","/"],["About Us","/about-us"],["Services","/services"],["Past Projects","/past-projects"],["Gallery","/gallery"],["Contact Us","/contact-us"]].map(([label, href]) => (
                <Link key={href} href={href} style={{ display:"block", color:"rgba(255,255,255,0.6)", fontFamily:"var(--font-ui)", fontSize:"0.82rem", textDecoration:"none", marginBottom:"0.4rem" }}>{label}</Link>
              ))}
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "1rem", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--brand-teal)" }}>Contact Info</h4>
              <p style={{ color:"rgba(255,255,255,0.6)", fontSize:"0.82rem", fontFamily:"var(--font-ui)", lineHeight:1.9, margin:0 }}>
                SIEM (Pvt) Ltd<br/>113/16, Nawala Road,<br/>Nugegoda, Sri Lanka.<br/><br/>
                +94 11 4513 327/8<br/>+94 11 285 6111<br/>info@siem-construction.vercel.app
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "1rem", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--brand-teal)" }}>About Siem</h4>
              <p style={{ color:"rgba(255,255,255,0.6)", fontSize:"0.82rem", fontFamily:"var(--font-ui)", lineHeight:1.9, margin:0 }}>
                Established in 1993, SIEM is one of Sri Lanka&apos;s premier civil construction firms, committed to delivering quality solutions on time.
              </p>
            </div>
          </div>
        </div>
        <div style={{ background: "var(--brand-footer-bar)", padding: "1rem 0", textAlign:"center" }}>
          <p style={{ color:"rgba(255,255,255,0.4)", fontSize:"0.78rem", fontFamily:"var(--font-ui)", margin:0 }}>
            Copyright {new Date().getFullYear()} — SIEM (Pvt) Ltd · All Rights Reserved
          </p>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .page-body { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
