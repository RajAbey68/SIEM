import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import StickyContact from "@/components/StickyContact";

/* ── Section heading helper ──────────────────────────────────── */
function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
      <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--brand-teal)", marginBottom: "0.75rem", fontWeight: 600 }}>
        {eyebrow}
      </p>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "var(--brand-heading)", margin: 0 }}>
        {title}
      </h2>
      <div style={{ width: "48px", height: "3px", background: "var(--brand-teal)", margin: "1rem auto 0" }} />
    </div>
  );
}

/* ── Hero slider (static for MVP) ───────────────────────────── */
function HeroSection() {
  return (
    <section style={{ position: "relative", width: "100%", height: "520px", overflow: "hidden", background: "var(--brand-heading)" }}>
      <Image
        src="/images/projects/site-01.jpg"
        alt="Siem Construction — quality built for Sri Lanka"
        fill
        sizes="100vw"
        style={{ objectFit: "cover", opacity: 0.55 }}
        priority
      />
      {/* Gradient overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.72) 40%, rgba(0,0,0,0.2))" }} />

      {/* Content */}
      <div className="container-site" style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--brand-teal)", marginBottom: "1rem" }}>
          Established 1993 · Sri Lanka
        </p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: "#ffffff", lineHeight: 1.2, marginBottom: "1.25rem", maxWidth: "600px" }}>
          Building Sri Lanka&apos;s Future — One Project at a Time
        </h1>
        <p style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "520px" }}>
          Quality construction, delivered on time. Trusted by Sri Lanka&apos;s leading developers, banks, and institutions for over 33 years.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/past-projects" style={{ background: "var(--brand-teal)", color: "#fff", fontFamily: "var(--font-ui)", fontSize: "0.85rem", fontWeight: 600, padding: "0.75rem 1.75rem", textDecoration: "none", borderRadius: "2px", transition: "background 200ms" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--brand-teal-dark)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--brand-teal)")}
          >
            View Our Projects
          </Link>
          <Link href="/contact-us" style={{ background: "transparent", color: "#fff", fontFamily: "var(--font-ui)", fontSize: "0.85rem", fontWeight: 600, padding: "0.75rem 1.75rem", textDecoration: "none", borderRadius: "2px", border: "2px solid rgba(255,255,255,0.6)", transition: "border-color 200ms" }}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Stats bar ───────────────────────────────────────────────── */
function StatsBar() {
  return (
    <div style={{ background: "var(--brand-teal)", padding: "0" }}>
      <div className="container-site stats-bar" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {[["1993","Year Founded"],["33+","Years of Experience"],["200+","Projects Completed"],["100%","Client Retention"]].map(([v,l]) => (
          <div key={l} style={{ padding: "1.5rem 1rem", textAlign: "center", borderRight: "1px solid rgba(255,255,255,0.2)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: "#fff", lineHeight: 1 }}>{v}</div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "rgba(255,255,255,0.8)", marginTop: "0.4rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── About strip ─────────────────────────────────────────────── */
function AboutStrip() {
  return (
    <section style={{ background: "#ffffff", padding: "5rem 0" }}>
      <div className="container-site about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        <div style={{ position: "relative", borderRadius: "3px", overflow: "hidden" }}>
          <Image
            src="/images/projects/lobby-area.jpg"
            alt="Siem Construction office lobby"
            width={560}
            height={380}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          {/* Year badge */}
          <div style={{ position: "absolute", bottom: "1.5rem", right: "1.5rem", background: "var(--brand-teal)", color: "#fff", padding: "1rem 1.25rem", textAlign: "center", borderRadius: "2px" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 700, lineHeight: 1 }}>33+</div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "0.3rem" }}>Years of Trust</div>
          </div>
        </div>
        <div>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--brand-teal)", marginBottom: "0.75rem", fontWeight: 600 }}>About Us</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 2.5vw, 2rem)", color: "var(--brand-heading)", marginBottom: "1.25rem", lineHeight: 1.3 }}>
            Established 1993 — Sri Lanka&apos;s Trusted Construction Partner
          </h2>
          <div style={{ width: "48px", height: "3px", background: "var(--brand-teal)", marginBottom: "1.5rem" }} />
          <p style={{ color: "var(--brand-body)", lineHeight: 1.9, marginBottom: "1rem" }}>
            Siem Construction was founded on a single principle: quality, delivered on time, earns trust. For over three decades that principle has built our reputation across Sri Lanka&apos;s most demanding projects.
          </p>
          <p style={{ color: "var(--brand-body)", lineHeight: 1.9, marginBottom: "2rem" }}>
            Our corporate philosophy of trust, integrity and quality has placed us at the forefront of the construction industry. From advisory work to final construction — we deliver.
          </p>
          <Link href="/about-us" style={{ background: "var(--brand-teal)", color: "#fff", fontFamily: "var(--font-ui)", fontSize: "0.82rem", fontWeight: 600, padding: "0.7rem 1.5rem", textDecoration: "none", borderRadius: "2px", display: "inline-block" }}>
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Services grid ───────────────────────────────────────────── */
function ServicesSection() {
  const services = [
    { icon: "🏗️", title: "Civil Construction",       text: "Residential, commercial, and institutional buildings to the highest standards." },
    { icon: "🏢", title: "Design & Build",            text: "Integrated delivery from concept through to handover — single point of responsibility." },
    { icon: "🔧", title: "Renovation & Retrofit",     text: "Occupied-space renovations with minimal disruption to operations." },
    { icon: "📐", title: "Project Management",        text: "End-to-end project oversight from feasibility to final account." },
    { icon: "💻", title: "BIM & Technology",          text: "3D modelling and BIM-driven coordination for complex builds." },
    { icon: "🌿", title: "Sustainability",            text: "Green building practices, LEED compliance, and embodied carbon reporting." },
  ];

  return (
    <section style={{ background: "#f7f7f7", padding: "5rem 0" }}>
      <div className="container-site">
        <SectionHeading eyebrow="What We Do" title="Our Services" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }} className="services-grid">
          {services.map((s) => (
            <div key={s.title} style={{ background: "#ffffff", padding: "2rem", borderRadius: "3px", border: "1px solid var(--brand-border)", borderTop: "3px solid var(--brand-teal)", transition: "box-shadow 250ms" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{s.icon}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", color: "var(--brand-heading)", marginBottom: "0.75rem" }}>{s.title}</h3>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", color: "var(--brand-body)", lineHeight: 1.8, margin: 0 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Projects preview ────────────────────────────────────────── */
function ProjectsPreview() {
  const projects = [
    { img: "/images/projects/site-01.jpg", title: "Crystal Sands", sub: "Luxury Residential · Colombo" },
    { img: "/images/projects/sbi-after.jpg", title: "State Bank of India", sub: "Heritage Renovation · Colombo" },
    { img: "/images/projects/site-03.jpg", title: "Orion City", sub: "Data Centre · Colombo 2" },
  ];

  return (
    <section style={{ background: "#ffffff", padding: "5rem 0" }}>
      <div className="container-site">
        <SectionHeading eyebrow="Portfolio" title="Recent Projects" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem", marginBottom: "2.5rem" }} className="projects-grid">
          {projects.map((p) => (
            <div key={p.title} style={{ borderRadius: "3px", overflow: "hidden", border: "1px solid var(--brand-border)" }}>
              <div style={{ position: "relative", height: "220px" }}>
                <Image src={p.img} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "1.25rem", borderTop: "3px solid var(--brand-teal)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--brand-heading)", marginBottom: "0.3rem" }}>{p.title}</h3>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.8rem", color: "var(--brand-teal)", margin: 0 }}>{p.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <Link href="/past-projects" style={{ background: "var(--brand-teal)", color: "#fff", fontFamily: "var(--font-ui)", fontSize: "0.82rem", fontWeight: 600, padding: "0.7rem 2rem", textDecoration: "none", borderRadius: "2px", display: "inline-block" }}>
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Contact CTA band ────────────────────────────────────────── */
function ContactBand() {
  return (
    <section style={{ background: "var(--brand-teal)", padding: "4rem 0" }}>
      <div className="container-site" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
        <div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "#fff", margin: 0, marginBottom: "0.5rem" }}>
            Ready to Start Your Project?
          </h2>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.9rem", color: "rgba(255,255,255,0.8)", margin: 0 }}>
            Talk to our team — we&apos;re ready to help from day one.
          </p>
        </div>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/contact-us" style={{ background: "#fff", color: "var(--brand-teal)", fontFamily: "var(--font-ui)", fontSize: "0.85rem", fontWeight: 700, padding: "0.75rem 1.75rem", textDecoration: "none", borderRadius: "2px" }}>
            Get In Touch
          </Link>
          <a href="tel:+94114513327" style={{ background: "transparent", color: "#fff", fontFamily: "var(--font-ui)", fontSize: "0.85rem", fontWeight: 600, padding: "0.75rem 1.75rem", textDecoration: "none", borderRadius: "2px", border: "2px solid rgba(255,255,255,0.6)" }}>
            +94 11 4513 327
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer>
      <div style={{ background: "var(--brand-footer)", padding: "3rem 0" }}>
        <div className="container-site footer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2.5rem" }}>
          <div>
            <h4 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "1rem", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--brand-teal)" }}>Quick Links</h4>
            {[["Home","/"],["About Us","/about-us"],["Services","/services"],["Past Projects","/past-projects"],["Gallery","/gallery"],["Careers","/careers"],["Contact Us","/contact-us"]].map(([l,h]) => (
              <Link key={h} href={h} style={{ display:"block", color:"rgba(255,255,255,0.6)", fontFamily:"var(--font-ui)", fontSize:"0.82rem", textDecoration:"none", marginBottom:"0.4rem" }}>{l}</Link>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "1rem", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--brand-teal)" }}>Contact Info</h4>
            <p style={{ color:"rgba(255,255,255,0.6)", fontSize:"0.82rem", fontFamily:"var(--font-ui)", lineHeight:1.9, margin:0 }}>
              Siem Construction (Pvt) Ltd<br/>
              113/16, Nawala Road,<br/>
              Nugegoda, Sri Lanka.<br/><br/>
              +94 11 4513 327 / 8<br/>
              +94 11 285 6111<br/>
              info@siem.lk
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
      <div style={{ background: "var(--brand-footer-bar)", padding: "1rem 0", textAlign: "center" }}>
        <p style={{ color:"rgba(255,255,255,0.4)", fontSize:"0.78rem", fontFamily:"var(--font-ui)", margin:0 }}>
          Copyright {new Date().getFullYear()} — Siem Construction (Pvt) Ltd · All Rights Reserved
        </p>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .stats-bar { grid-template-columns: repeat(2,1fr) !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

/* ── Page assembly ───────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutStrip />
        <ServicesSection />
        <ProjectsPreview />
        <ContactBand />
      </main>
      <Footer />
      <StickyContact />
    </>
  );
}
