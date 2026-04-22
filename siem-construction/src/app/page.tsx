import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import QuickContact from "@/components/QuickContact";

/* ─── Homepage with two-column layout matching siem.lk ─── */
export default function Home() {
  return (
    <>
      <Navbar />

      {/* Welcome banner */}
      <div style={{ background: "var(--brand-teal)", padding: "1.5rem 0" }}>
        <div className="container-site">
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, color: "#fff", margin: 0, textTransform: "uppercase", letterSpacing: "0.04em" }}>
            Welcome to Siem Construction
          </h1>
        </div>
      </div>

      {/* ── Two-column body ── */}
      <div className="container-site home-body" style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "2rem", padding: "2rem var(--section-px)" }}>

        {/* ── LEFT: main content ── */}
        <main style={{ minWidth: 0 }}>

          {/* Hero image */}
          <div style={{ position: "relative", width: "100%", height: "340px", marginBottom: "1.5rem", borderRadius: "2px", overflow: "hidden" }}>
            <Image
              src="/images/projects/site-01.jpg"
              alt="Siem Construction — quality built for Sri Lanka"
              fill
              sizes="(max-width: 768px) 100vw, 65vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Intro text */}
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "#333", marginBottom: "1rem" }}>
            Established 1993 — Sri Lanka&apos;s Trusted Construction Partner
          </h2>
          <div style={{ width: "40px", height: "3px", background: "var(--brand-teal)", marginBottom: "1.25rem" }} />

          <p style={{ color: "var(--brand-body)", lineHeight: 1.9, fontSize: "0.9rem", marginBottom: "1rem" }}>
            Siem Construction is one of Sri Lanka&apos;s premier civil construction firms. We are committed to deliver quality construction solutions on time thus earning the satisfaction of our clients. Our ability to bring together the right combination of experience and expertise in construction is second to none.
          </p>
          <p style={{ color: "var(--brand-body)", lineHeight: 1.9, fontSize: "0.9rem", marginBottom: "1rem" }}>
            Thanks to our all-round engineering experience, we offer a comprehensive service from advisory work to final construction, which satisfies the highest demands in terms of quality, cost-effectiveness and time. Our corporate philosophy of trust, integrity and quality has placed us at the forefront of the construction industry.
          </p>
          <p style={{ color: "var(--brand-body)", lineHeight: 1.9, fontSize: "0.9rem", marginBottom: "2rem" }}>
            Our team demonstrates a thorough understanding of the design process with constant attention to quality and communication, ensuring that all our projects are completed to the highest standard of workmanship and on schedule.
          </p>

          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "#ddd", border: "1px solid #ddd", marginBottom: "2rem" }} className="stats-row">
            {[["1993","Year Founded"],["33+","Years of Experience"],["200+","Projects Completed"],["Sri Lanka","Base of Operations"]].map(([v,l]) => (
              <div key={l} style={{ background: "#fff", padding: "1.25rem 1rem", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 700, color: "var(--brand-teal)", lineHeight: 1 }}>{v}</div>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.68rem", color: "#666", marginTop: "0.3rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{l}</div>
              </div>
            ))}
          </div>

          {/* Services preview */}
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "#333", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--brand-teal)" }}>
            Our Services
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }} className="services-mini">
            {[
              ["🏗️", "Civil Construction", "Residential, commercial and institutional buildings."],
              ["🏢", "Design & Build", "Integrated delivery — single point of responsibility."],
              ["🔧", "Renovation & Retrofit", "Occupied-space renovations, minimal disruption."],
              ["📐", "Project Management", "End-to-end oversight from feasibility to handover."],
            ].map(([icon, title, desc]) => (
              <div key={title as string} style={{ padding: "1rem", border: "1px solid #e5e5e5", borderTop: "3px solid var(--brand-teal)", borderRadius: "2px" }}>
                <div style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>{icon}</div>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "0.88rem", color: "#333", marginBottom: "0.3rem" }}>{title as string}</h4>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", color: "#666", margin: 0, lineHeight: 1.7 }}>{desc as string}</p>
              </div>
            ))}
          </div>

          {/* Recent projects */}
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "#333", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--brand-teal)" }}>
            Recent Projects
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem", marginBottom: "1.5rem" }} className="projects-mini">
            {[
              { img: "/images/projects/site-01.jpg", title: "Luxury Residential", sub: "Colombo" },
              { img: "/images/projects/sbi-after.jpg", title: "Bank Renovation", sub: "Heritage · Colombo" },
              { img: "/images/projects/site-03.jpg", title: "Commercial Development", sub: "Colombo 2" },

            ].map((p) => (
              <div key={p.title} style={{ border: "1px solid #e5e5e5", borderRadius: "2px", overflow: "hidden" }}>
                <div style={{ position: "relative", height: "140px" }}>
                  <Image src={p.img} alt={p.title} fill sizes="22vw" style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "0.75rem", borderTop: "2px solid var(--brand-teal)" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "0.82rem", color: "#333", margin: 0 }}>{p.title}</p>
                  <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "var(--brand-teal)", margin: "2px 0 0" }}>{p.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/past-projects" style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", fontWeight: 600, color: "var(--brand-teal)", textDecoration: "none" }}>
            → View All Past Projects
          </Link>
        </main>

        {/* ── RIGHT: sidebar ── */}
        <aside style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <QuickContact />

          {/* Pages widget */}
          <div style={{ background: "#fff", border: "1px solid #ddd", borderTop: "3px solid var(--brand-teal)", padding: "1.25rem" }}>
            <h4 style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", fontWeight: 700, color: "#333", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 0.75rem" }}>Pages</h4>
            {[["Home","/"],["About Us","/about-us"],["Services","/services"],["Past Projects","/past-projects"],["CSR & Sustainability","/csr-sustainability"],["Gallery","/gallery"],["Our Designs","/our-designs"],["Careers","/careers"],["News & Updates","/news-updates"],["Contact Us","/contact-us"]].map(([l,h]) => (
              <Link key={h} href={h} style={{ display:"block", fontFamily:"var(--font-ui)", fontSize:"0.8rem", color:"var(--brand-teal)", textDecoration:"none", padding:"5px 0", borderBottom:"1px solid #f0f0f0" }}>
                › {l}
              </Link>
            ))}
          </div>

          {/* Contact info widget */}
          <div style={{ background: "#fff", border: "1px solid #ddd", borderTop: "3px solid var(--brand-teal)", padding: "1.25rem" }}>
            <h4 style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", fontWeight: 700, color: "#333", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 0.75rem" }}>Contact Us</h4>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", color: "#555", lineHeight: 1.9, margin: 0 }}>
              113/16, Nawala Road,<br/>Nugegoda, Sri Lanka.<br/><br/>
              <strong>Tel:</strong> +94 11 4513 327/8<br/>
              <strong>Tel:</strong> +94 11 285 6111<br/>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@siem.lk" style={{ color: "var(--brand-teal)", textDecoration: "none" }}>info@siem.lk</a>
            </p>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer>
        <div style={{ background: "var(--brand-footer)", padding: "2.5rem 0" }}>
          <div className="container-site footer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2rem" }}>
            <div>
              <h4 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "1rem", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--brand-teal)" }}>Quick Links</h4>
              {[["Home","/"],["About Us","/about-us"],["Services","/services"],["Past Projects","/past-projects"],["Gallery","/gallery"],["Contact Us","/contact-us"]].map(([l,h]) => (
                <Link key={h} href={h} style={{ display:"block", color:"rgba(255,255,255,0.6)", fontFamily:"var(--font-ui)", fontSize:"0.82rem", textDecoration:"none", marginBottom:"0.4rem" }}>{l}</Link>
              ))}
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "1rem", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--brand-teal)" }}>Contact Info</h4>
              <p style={{ color:"rgba(255,255,255,0.6)", fontSize:"0.82rem", fontFamily:"var(--font-ui)", lineHeight:1.9, margin:0 }}>
                Siem Construction (Pvt) Ltd<br/>113/16, Nawala Road,<br/>Nugegoda, Sri Lanka.<br/><br/>
                +94 11 4513 327/8<br/>info@siem.lk
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "1rem", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--brand-teal)" }}>About Siem</h4>
              <p style={{ color:"rgba(255,255,255,0.6)", fontSize:"0.82rem", fontFamily:"var(--font-ui)", lineHeight:1.9, margin:0 }}>
                Established in 1993, Siem Construction is one of Sri Lanka&apos;s premier civil construction firms, committed to delivering quality solutions on time.
              </p>
            </div>
          </div>
        </div>
        <div style={{ background: "var(--brand-footer-bar)", padding: "1rem 0", textAlign:"center" }}>
          <p style={{ color:"rgba(255,255,255,0.4)", fontSize:"0.78rem", fontFamily:"var(--font-ui)", margin:0 }}>
            Copyright {new Date().getFullYear()} — Siem Construction (Pvt) Ltd · All Rights Reserved
          </p>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .home-body { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
          .stats-row { grid-template-columns: repeat(2,1fr) !important; }
          .services-mini { grid-template-columns: 1fr !important; }
          .projects-mini { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
