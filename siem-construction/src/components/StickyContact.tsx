"use client";

import { useState, useEffect } from "react";
import { Phone, MessageSquare, X } from "lucide-react";

export default function StickyContact() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky-cta">
      {expanded ? (
        <div
          style={{
            background: "var(--teal-800)",
            borderRadius: "8px",
            padding: "1.5rem",
            width: "280px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            border: "1px solid rgba(255,255,255,0.1)",
            animation: "fade-up 0.3s ease both",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "white", fontWeight: 600 }}>Start a Project</span>
            <button onClick={() => setExpanded(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer" }}>
              <X size={16} />
            </button>
          </div>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginBottom: "1.25rem", lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
            Tell us about your project and we&apos;ll respond within 24 hours.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <a
              href="tel:+94114513327"
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", background: "rgba(255,255,255,0.08)", borderRadius: "4px", color: "white", textDecoration: "none", fontFamily: "var(--font-ui)", fontSize: "0.85rem", transition: "background 200ms ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
            >
              <Phone size={15} color="var(--terra-400)" />
              +94 11 4513 327
            </a>
            <a
              href="mailto:info@siem-construction.vercel.app"
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", background: "rgba(255,255,255,0.08)", borderRadius: "4px", color: "white", textDecoration: "none", fontFamily: "var(--font-ui)", fontSize: "0.85rem", transition: "background 200ms ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
            >
              <MessageSquare size={15} color="var(--teal-300)" />
              info@siem-construction.vercel.app
            </a>
            <a href="#contact" className="btn btn-primary" style={{ justifyContent: "center", marginTop: "0.25rem" }} onClick={() => setExpanded(false)}>
              Send a Brief
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setExpanded(true)}
          className="btn btn-primary"
          style={{ borderRadius: "100px", padding: "0.9rem 1.6rem", boxShadow: "0 8px 30px rgba(196,98,45,0.45)", gap: "0.6rem" }}
          id="sticky-contact-btn"
        >
          <Phone size={15} />
          Start a Project
        </button>
      )}
    </div>
  );
}
