"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 350ms cubic-bezier(0.4, 0, 0.2, 1)",
        background: scrolled
          ? "rgba(4, 31, 31, 0.97)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "none",
      }}
    >
      <div
        className="container-site"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: scrolled ? "68px" : "88px",
          transition: "height 350ms ease",
        }}
      >
        {/* Logo */}
        <a href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--white)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              SIEM
            </span>
            <span
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                color: "var(--terra-400)",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Construction · Est. 1993
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            gap: "2.5rem",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                transition: "color 200ms ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--teal-300)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.75)")
              }
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: "0.6rem 1.4rem" }}>
            Start a Project
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            color: "var(--white)",
            cursor: "pointer",
            display: "none",
          }}
          className="show-mobile"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            background: "var(--teal-950)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "1.5rem var(--section-px)",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
            Start a Project
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
