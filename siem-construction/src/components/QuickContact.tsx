"use client";

import { useState } from "react";

export default function QuickContact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sent");
  };

  return (
    <div style={{ background: "#fff", border: "1px solid #ddd", borderTop: "3px solid var(--brand-teal)", padding: "1.25rem" }}>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700, color: "#333", margin: "0 0 1.25rem", textAlign: "center", letterSpacing: "0.05em", textTransform: "uppercase" }}>
        Quick Contact
      </h3>

      {status === "sent" ? (
        <div style={{ background: "#e8f5f4", border: "1px solid var(--brand-teal)", borderRadius: "3px", padding: "1rem", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", color: "var(--brand-teal)", margin: 0, fontWeight: 600 }}>
            ✓ Message sent! We&apos;ll be in touch soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            { id: "qc-name",    label: "Your Name (required)",  type: "text",  required: true },
            { id: "qc-email",   label: "Your Email (required)", type: "email", required: true },
            { id: "qc-subject", label: "Subject",               type: "text",  required: false },
          ].map(({ id, label, type, required }) => (
            <div key={id}>
              <label htmlFor={id} style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", color: "#555", display: "block", marginBottom: "3px" }}>{label}</label>
              <input
                id={id}
                type={type}
                required={required}
                style={{ width: "100%", padding: "7px 9px", border: "1px solid #ccc", borderRadius: "2px", fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "#333", boxSizing: "border-box", outline: "none" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--brand-teal)")}
                onBlur={(e) => (e.target.style.borderColor = "#ccc")}
              />
            </div>
          ))}
          <div>
            <label htmlFor="qc-message" style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", color: "#555", display: "block", marginBottom: "3px" }}>Your Message</label>
            <textarea
              id="qc-message"
              rows={5}
              style={{ width: "100%", padding: "7px 9px", border: "1px solid #ccc", borderRadius: "2px", fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "#333", resize: "vertical", boxSizing: "border-box", outline: "none" }}
              onFocus={(e) => (e.target.style.borderColor = "var(--brand-teal)")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          </div>
          <button
            type="submit"
            style={{ background: "#222", color: "#fff", fontFamily: "var(--font-ui)", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", padding: "10px", border: "none", borderRadius: "2px", cursor: "pointer", textTransform: "uppercase", transition: "background 200ms" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--brand-teal)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#222")}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
