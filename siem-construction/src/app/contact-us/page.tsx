import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Contact Us | SIEM",
  description: "Get in touch with SIEM (Pvt) Ltd — 113/16, Nawala Road, Nugegoda, Sri Lanka.",
};

export default function ContactUs() {
  return (
    <PageLayout title="Contact Us" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "#333", marginBottom: "0.75rem" }}>
        Get In Touch
      </h2>
      <div style={{ width: "40px", height: "3px", background: "var(--brand-teal)", marginBottom: "1.5rem" }} />
      <p style={{ color: "var(--brand-body)", lineHeight: 1.9, fontSize: "0.9rem", marginBottom: "2rem" }}>
        We welcome enquiries for all types of construction projects. Please use the contact form on the right, or reach us directly using the details below.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="contact-detail-grid">
        <div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "#333", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--brand-teal)" }}>Head Office</h3>
          <address style={{ fontStyle: "normal", fontFamily: "var(--font-ui)", fontSize: "0.88rem", color: "var(--brand-body)", lineHeight: 2 }}>
            SIEM (Pvt) Ltd<br />
            113/16, Nawala Road<br />
            Nugegoda<br />
            Sri Lanka<br /><br />
            <strong>Tel:</strong>{" "}
            <a href="tel:+94114513327" style={{ color: "var(--brand-teal)", textDecoration: "none" }}>+94 11 4513 327</a> / {" "}
            <a href="tel:+94114513328" style={{ color: "var(--brand-teal)", textDecoration: "none" }}>328</a><br />
            <strong>Tel:</strong>{" "}
            <a href="tel:+94112856111" style={{ color: "var(--brand-teal)", textDecoration: "none" }}>+94 11 285 6111</a><br />
            <strong>Email:</strong>{" "}
            <a href="mailto:info@siem-construction.vercel.app" style={{ color: "var(--brand-teal)", textDecoration: "none" }}>info@siem-construction.vercel.app</a>
          </address>
        </div>
        <div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "#333", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--brand-teal)" }}>Office Hours</h3>
          <table style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", color: "var(--brand-body)", borderCollapse: "collapse", width: "100%" }}>
            {[["Monday – Friday", "8:00 AM – 5:00 PM"], ["Saturday", "8:00 AM – 1:00 PM"], ["Sunday", "Closed"]].map(([day, hours]) => (
              <tr key={day} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <td style={{ padding: "0.6rem 0", fontWeight: 600, color: "#333" }}>{day}</td>
                <td style={{ padding: "0.6rem 0", color: "var(--brand-teal)" }}>{hours}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>

      {/* Map embed */}
      <div style={{ marginTop: "2rem", border: "1px solid #e5e5e5", borderRadius: "2px", overflow: "hidden", height: "280px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0!2d79.8997!3d6.8649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTEnNTMuNiJOIDc5wrA1Myc1OC45IkU!5e0!3m2!1sen!2slk!4v1680000000000!5m2!1sen!2slk"
          width="100%"
          height="280"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="SIEM office location — Nugegoda, Sri Lanka"
        />
      </div>
      <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", color: "#999", marginTop: "0.5rem", fontStyle: "italic" }}>
        113/16, Nawala Road, Nugegoda, Sri Lanka
      </p>
      <style>{`@media (max-width: 600px) { .contact-detail-grid { grid-template-columns: 1fr !important; } }`}</style>
    </PageLayout>
  );
}
