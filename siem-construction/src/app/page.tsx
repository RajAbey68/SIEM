import Navbar from "@/components/Navbar";
import HeroVideoSection from "@/components/HeroVideoSection";
import DesignBuildGrid from "@/components/DesignBuildGrid";
import LiveProjectGallery from "@/components/LiveProjectGallery";
import ContactSection from "@/components/ContactSection";
import StickyContact from "@/components/StickyContact";

// About strip between hero and services
function AboutStrip() {
  return (
    <section id="about" style={{ background: "var(--white)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
      <div className="container-site" style={{ paddingBlock: "5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
        <div>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>Our Story</p>
          <h2 className="display-lg" style={{ marginBottom: "1.5rem" }}>
            Established 1993.<br /><span style={{ color: "var(--teal-700)" }}>Re-born 2026.</span>
          </h2>
          <p style={{ color: "rgba(26,26,26,0.65)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
            Siem Construction was founded on a single principle: that quality, delivered on time, earns trust. For 33 years that principle built our reputation across Sri Lanka&apos;s most demanding projects — from mission-critical data centres to luxury residential towers.
          </p>
          <p style={{ color: "rgba(26,26,26,0.65)", lineHeight: 1.9, marginBottom: "2rem" }}>
            In 2026 we re-born: adopting global Design-Build standards, BIM-driven delivery, and a commitment to sustainability that matches the ambitions of the clients we now serve.
          </p>
          <a href="#services" className="btn btn-teal">Explore Our Services</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(0,0,0,0.06)", borderRadius: "4px", overflow: "hidden" }}>
          {[
            { v: "1993", l: "Year Founded" },
            { v: "33+", l: "Years of Trust" },
            { v: "200+", l: "Projects Built" },
            { v: "100%", l: "Client Retention" },
          ].map(({ v, l }) => (
            <div key={l} style={{ background: "var(--white)", padding: "2rem", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 700, color: "var(--teal-800)", lineHeight: 1 }}>{v}</div>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(26,26,26,0.5)", marginTop: "0.5rem" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { #about .container-site { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
    </section>
  );
}

// Sustainability band
function SustainabilityBand() {
  return (
    <section id="sustainability" style={{ background: "var(--teal-800)", paddingBlock: "5rem" }}>
      <div className="container-site" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        <div>
          <p className="eyebrow" style={{ marginBottom: "1rem", color: "var(--terra-400)" }}>ESG & Green Building</p>
          <h2 className="display-lg" style={{ color: "var(--white)", marginBottom: "1.5rem" }}>Sustainability<br /><span style={{ color: "var(--teal-300)" }}>by Design.</span></h2>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.9, maxWidth: "440px" }}>
            We embed environmental responsibility into every brief — from LEED compliance and embodied carbon reporting to biophilic design principles that connect people with the Sri Lankan landscape.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {["LEED Certified Projects", "Embodied Carbon Reporting", "Green Mark Compliance", "Material Lifecycle Analysis", "Biophilic Design Integration"].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.25rem", background: "rgba(255,255,255,0.06)", borderRadius: "4px", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--terra-400)", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-ui)", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { #sustainability .container-site { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroVideoSection />
        <AboutStrip />
        <DesignBuildGrid />
        <LiveProjectGallery />
        <SustainabilityBand />
        <ContactSection />
      </main>
      <footer style={{ background: "var(--teal-950)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "2rem var(--section-px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}>
          © {new Date().getFullYear()} Siem Construction (Pvt) Ltd · Nugegoda, Sri Lanka
        </span>
        <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.8rem", color: "rgba(255,255,255,0.25)" }}>
          Est. 1993 · Re-born 2026
        </span>
      </footer>
      <StickyContact />
    </>
  );
}
