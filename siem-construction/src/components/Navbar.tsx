"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home",              href: "/" },
  { label: "About Us",          href: "/about-us" },
  { label: "Services",          href: "/services" },
  { label: "Past Projects",     href: "/past-projects" },
  { label: "CSR & Sustainability", href: "/csr-sustainability" },
  { label: "Gallery",           href: "/gallery" },
  { label: "Our Designs",       href: "/our-designs" },
  { label: "Careers",           href: "/careers" },
  {
    label: "News & Updates",
    href: "/news-updates",
    children: [
      { label: "External Links", href: "/news-updates/external-links" },
    ],
  },
  { label: "Contact Us",        href: "/contact-us" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "var(--brand-header-bg)",
        borderBottom: "1px solid var(--brand-border)",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.08)" : "none",
        transition: "box-shadow 250ms ease",
      }}
    >
      {/* Top bar */}
      <div style={{ background: "var(--brand-footer)", padding: "6px 0" }}>
        <div className="container-site" style={{ display: "flex", justifyContent: "flex-end" }}>
          <a
            href="mailto:info@siem.lk"
            style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.78rem", fontFamily: "var(--font-ui)", textDecoration: "none", letterSpacing: "0.02em" }}
          >
            info@siem.lk
          </a>
        </div>
      </div>

      {/* Main nav row */}
      <div className="container-site" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, color: "var(--brand-heading)", lineHeight: 1, letterSpacing: "-0.01em" }}>
              SIEM
            </div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.55rem", letterSpacing: "0.2em", color: "var(--brand-teal)", textTransform: "uppercase", fontWeight: 600, marginTop: "1px" }}>
              Construction · Est. 1993
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.15rem" }} className="desktop-nav">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                style={{ position: "relative" }}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                    padding: "0.5rem 0.7rem",
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    color: isActive(link.href) ? "var(--brand-teal)" : "var(--brand-heading)",
                    textDecoration: "none",
                    borderBottom: isActive(link.href) ? "2px solid var(--brand-teal)" : "2px solid transparent",
                    transition: "color 200ms, border-color 200ms",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--brand-teal)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = isActive(link.href) ? "var(--brand-teal)" : "var(--brand-heading)"; }}
                >
                  {link.label}
                  <ChevronDown size={12} />
                </Link>
                {dropdownOpen && (
                  <div style={{ position: "absolute", top: "100%", left: 0, background: "var(--brand-header-bg)", border: "1px solid var(--brand-border)", borderTop: "2px solid var(--brand-teal)", minWidth: "160px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", zIndex: 100 }}>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        style={{ display: "block", padding: "0.65rem 1rem", fontFamily: "var(--font-ui)", fontSize: "0.8rem", color: "var(--brand-body)", textDecoration: "none", borderBottom: "1px solid var(--brand-border)", transition: "background 150ms, color 150ms" }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "var(--brand-teal-light)"; e.currentTarget.style.color = "var(--brand-teal)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--brand-body)"; }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "0.5rem 0.7rem",
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  color: isActive(link.href) ? "var(--brand-teal)" : "var(--brand-heading)",
                  textDecoration: "none",
                  borderBottom: isActive(link.href) ? "2px solid var(--brand-teal)" : "2px solid transparent",
                  transition: "color 200ms, border-color 200ms",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--brand-teal)"; e.currentTarget.style.borderBottomColor = "var(--brand-teal)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = isActive(link.href) ? "var(--brand-teal)" : "var(--brand-heading)"; e.currentTarget.style.borderBottomColor = isActive(link.href) ? "var(--brand-teal)" : "transparent"; }}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--brand-heading)", display: "none" }}
          className="mobile-toggle"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: "var(--brand-header-bg)", borderTop: "1px solid var(--brand-border)", padding: "0.5rem 0" }}>
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ display: "block", padding: "0.75rem var(--section-px)", fontFamily: "var(--font-ui)", fontSize: "0.9rem", color: isActive(link.href) ? "var(--brand-teal)" : "var(--brand-heading)", textDecoration: "none", borderLeft: isActive(link.href) ? "3px solid var(--brand-teal)" : "3px solid transparent" }}
              >
                {link.label}
              </Link>
              {link.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ display: "block", padding: "0.6rem calc(var(--section-px) + 1rem)", fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "var(--brand-body)", textDecoration: "none", background: "var(--brand-teal-light)" }}
                >
                  — {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) { .desktop-nav { display: none !important; } .mobile-toggle { display: block !important; } }
        @media (min-width: 1025px) { .mobile-toggle { display: none !important; } }
      `}</style>
    </header>
  );
}
