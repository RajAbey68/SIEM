"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" style={{ background: "var(--teal-950)" }} className="section-pad">
      <div className="container-site">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="contact-grid">
          {/* Left */}
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem", color: "var(--terra-400)" }}>Get in Touch</p>
            <h2 className="display-lg" style={{ color: "var(--white)", marginBottom: "1.5rem" }}>
              Let&apos;s Build<br /><span style={{ color: "var(--teal-300)" }}>Something Great.</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "3rem", maxWidth: "400px" }}>
              Whether you have a concept sketch or a fully scoped brief, our team is ready to deliver certainty at scale. We respond within 24 hours.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { icon: MapPin, label: "Address", value: "113/16, Nawala Road, Nugegoda, Sri Lanka" },
                { icon: Phone, label: "Phone", value: "+94 11 4513 327 / 285 6111" },
                { icon: Mail, label: "Email", value: "info@siem.lk" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "4px", background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={16} color="var(--terra-400)" />
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "0.25rem" }}>{label}</p>
                    <p style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-body)", lineHeight: 1.5 }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", padding: "2.5rem" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✓</div>
                <h3 style={{ fontFamily: "var(--font-display)", color: "var(--teal-300)", fontSize: "1.5rem", marginBottom: "0.75rem" }}>Message Received</h3>
                <p style={{ color: "rgba(255,255,255,0.6)" }}>We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { id: "name", label: "Full Name", type: "text", placeholder: "Rajeev Perera" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "rajeev@company.com" },
                  { id: "project", label: "Project Type", type: "text", placeholder: "e.g. Residential, Commercial, Data Centre" },
                ].map((field) => (
                  <div key={field.id}>
                    <label style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "0.5rem" }}>{field.label}</label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "4px", padding: "0.875rem 1rem", color: "white", fontFamily: "var(--font-body)", fontSize: "0.9rem", outline: "none", transition: "border 200ms ease" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--teal-500)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "0.5rem" }}>Project Brief</label>
                  <textarea
                    id="message"
                    placeholder="Describe your project, scale, and timeline..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "4px", padding: "0.875rem 1rem", color: "white", fontFamily: "var(--font-body)", fontSize: "0.9rem", outline: "none", resize: "vertical", transition: "border 200ms ease" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--teal-500)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ justifyContent: "center", marginTop: "0.5rem" }}>
                  <Send size={14} />
                  Send Brief to Siem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.25); }
      `}</style>
    </section>
  );
}
