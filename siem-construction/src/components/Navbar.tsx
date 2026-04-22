"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home",               href: "/" },
  { label: "About Us",           href: "/about-us" },
  { label: "Services",           href: "/services" },
  { label: "Past Projects",      href: "/past-projects" },
  { label: "CSR & Sustainability", href: "/csr-sustainability" },
  { label: "Gallery",            href: "/gallery" },
  { label: "Our Designs",        href: "/our-designs" },
  { label: "Careers",            href: "/careers" },
  {
    label: "News & Updates",
    href: "/news-updates",
    children: [{ label: "External Links", href: "/news-updates/external-links" }],
  },
  { label: "Contact Us",         href: "/contact-us" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header style={{ background: "#fff", borderBottom: "1px solid #ddd" }}>

      {/* ── Logo row ─────────────────────────────────────────────── */}
      <div className="container-site" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px var(--section-px)" }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Lion logo placeholder — matches the original black shield/lion mark */}
          <div style={{ width: 52, height: 52, background: "#222", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ color: "#fff", fontSize: "1.3rem" }}>🦁</span>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "#222", lineHeight: 1.1, letterSpacing: "0.02em" }}>
              SIEM CONSTRUCTION (PVT) LTD
            </div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.65rem", color: "#666", letterSpacing: "0.05em", marginTop: "2px" }}>
              Leading Provider of High Quality Construction Services
            </div>
          </div>
        </Link>

        {/* Partner badges (SLAB etc) — right of logo */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }} className="partner-badges">
          {["SLAB", "ISO", "ICTAD"].map((b) => (
            <div key={b} style={{ border: "1px solid #ccc", padding: "4px 8px", borderRadius: "3px", fontFamily: "var(--font-ui)", fontSize: "0.62rem", fontWeight: 700, color: "#555", letterSpacing: "0.08em" }}>{b}</div>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} style={{ display: "none", background: "none", border: "none", cursor: "pointer" }} className="mobile-toggle">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Nav bar ──────────────────────────────────────────────── */}
      <nav style={{ background: "#fff", borderTop: "1px solid #eee" }} className="desktop-nav">
        <div className="container-site" style={{ display: "flex", alignItems: "center", gap: 0, padding: "0 var(--section-px)" }}>
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} style={{ position: "relative" }}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link href={link.href} style={{ display: "flex", alignItems: "center", gap: "3px", padding: "10px 12px", fontFamily: "var(--font-ui)", fontSize: "0.8rem", fontWeight: isActive(link.href) ? 600 : 400, color: isActive(link.href) ? "var(--brand-teal)" : "#333", textDecoration: "none", borderBottom: isActive(link.href) ? "2px solid var(--brand-teal)" : "2px solid transparent", whiteSpace: "nowrap" }}>
                  {link.label}<ChevronDown size={11} />
                </Link>
                {dropdownOpen && (
                  <div style={{ position: "absolute", top: "100%", left: 0, background: "#fff", border: "1px solid #ddd", borderTop: "2px solid var(--brand-teal)", minWidth: "170px", boxShadow: "0 4px 16px rgba(0,0,0,0.1)", zIndex: 200 }}>
                    {link.children.map((c) => (
                      <Link key={c.href} href={c.href} style={{ display: "block", padding: "10px 14px", fontFamily: "var(--font-ui)", fontSize: "0.8rem", color: "#555", textDecoration: "none", borderBottom: "1px solid #f0f0f0" }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "#f5fffe"; e.currentTarget.style.color = "var(--brand-teal)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#555"; }}
                      >{c.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.href} href={link.href} style={{ padding: "10px 12px", fontFamily: "var(--font-ui)", fontSize: "0.8rem", fontWeight: isActive(link.href) ? 600 : 400, color: isActive(link.href) ? "var(--brand-teal)" : "#333", textDecoration: "none", borderBottom: isActive(link.href) ? "2px solid var(--brand-teal)" : "2px solid transparent", whiteSpace: "nowrap", display: "block" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--brand-teal)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = isActive(link.href) ? "var(--brand-teal)" : "#333"; }}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid #eee" }}>
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link href={link.href} onClick={() => setMobileOpen(false)} style={{ display: "block", padding: "12px var(--section-px)", fontFamily: "var(--font-ui)", fontSize: "0.9rem", color: isActive(link.href) ? "var(--brand-teal)" : "#333", textDecoration: "none", borderLeft: isActive(link.href) ? "3px solid var(--brand-teal)" : "3px solid transparent", borderBottom: "1px solid #f0f0f0" }}>
                {link.label}
              </Link>
              {link.children?.map((c) => (
                <Link key={c.href} href={c.href} onClick={() => setMobileOpen(false)} style={{ display: "block", padding: "10px calc(var(--section-px) + 1rem)", fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "#666", textDecoration: "none", background: "#fafafa", borderBottom: "1px solid #f0f0f0" }}>
                  — {c.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 960px) { .desktop-nav { display: none !important; } .mobile-toggle { display: block !important; } .partner-badges { display: none !important; } }
      `}</style>
    </header>
  );
}
