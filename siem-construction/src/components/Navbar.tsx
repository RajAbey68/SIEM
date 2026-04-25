"use client";

import { useState } from "react";
import Image from "next/image";
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

      {/* ── Logo row: actual logo.png from siem-construction.vercel.app ───────────────── */}
      <div className="container-site" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px var(--section-px)" }}>
        <Link href="/" style={{ textDecoration: "none", display: "inline-block", lineHeight: 0 }}>
          <Image
            src="/images/logo.png"
            alt="SIEM (Pvt) Ltd — Leading Provider of High Quality Construction Services"
            width={480}
            height={72}
            priority
            style={{ height: "72px", width: "auto", maxWidth: "100%", objectFit: "contain" }}
          />
        </Link>

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
                <Link href={link.href} style={{ display: "flex", alignItems: "center", gap: "3px", padding: "10px 12px", fontFamily: "var(--font-ui)", fontSize: "0.8rem", fontWeight: isActive(link.href) ? 600 : 400, color: isActive(link.href) ? "var(--brand-navy)" : "#333", textDecoration: "none", borderBottom: isActive(link.href) ? "2px solid var(--brand-navy)" : "2px solid transparent", whiteSpace: "nowrap" }}>
                  {link.label}<ChevronDown size={11} />
                </Link>
                {dropdownOpen && (
                  <div style={{ position: "absolute", top: "100%", left: 0, background: "#fff", border: "1px solid #ddd", borderTop: "2px solid var(--brand-teal)", minWidth: "170px", boxShadow: "0 4px 16px rgba(0,0,0,0.1)", zIndex: 200 }}>
                    {link.children.map((c) => (
                      <Link key={c.href} href={c.href} style={{ display: "block", padding: "10px 14px", fontFamily: "var(--font-ui)", fontSize: "0.8rem", color: "#555", textDecoration: "none", borderBottom: "1px solid #f0f0f0" }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "#f0f4f8"; e.currentTarget.style.color = "var(--brand-navy)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#555"; }}
                      >{c.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.href} href={link.href} style={{ padding: "10px 12px", fontFamily: "var(--font-ui)", fontSize: "0.8rem", fontWeight: isActive(link.href) ? 600 : 400, color: isActive(link.href) ? "var(--brand-navy)" : "#333", textDecoration: "none", borderBottom: isActive(link.href) ? "2px solid var(--brand-navy)" : "2px solid transparent", whiteSpace: "nowrap", display: "block" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--brand-navy)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = isActive(link.href) ? "var(--brand-navy)" : "#333"; }}
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
              <Link href={link.href} onClick={() => setMobileOpen(false)} style={{ display: "block", padding: "12px var(--section-px)", fontFamily: "var(--font-ui)", fontSize: "0.9rem", color: isActive(link.href) ? "var(--brand-navy)" : "#333", textDecoration: "none", borderLeft: isActive(link.href) ? "3px solid var(--brand-navy)" : "3px solid transparent", borderBottom: "1px solid #f0f0f0" }}>
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
