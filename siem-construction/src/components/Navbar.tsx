"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
	{ label: "Home", href: "/" },
	{ label: "Studio", href: "/about-us" },
	{ label: "Services", href: "/services" },
	{ label: "Projects", href: "/past-projects" },
	{ label: "Gallery", href: "/gallery" },
	{ label: "Sustainability", href: "/csr-sustainability" },
	{ label: "Careers", href: "/careers" },
	{ label: "News", href: "/news-updates" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const isActive = (href: string) =>
		href === "/" ? pathname === "/" : pathname.startsWith(href);

	return (
		<header className="site-header">
			<div className="container-site nav-shell">
				<Link href="/" className="brand-mark" aria-label="SIEM home">
					<Image
						src="/images/New-SIEM-LoGo-Enhanced.png"
						alt="SIEM logo"
						width={1600}
						height={1280}
						className="brand-logo"
						priority
					/>
					<span className="brand-copy">
						<strong>SIEM</strong>
						<span>Built for Sri Lanka</span>
					</span>
				</Link>

				<nav className="nav-links" aria-label="Primary navigation">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={`nav-link ${isActive(link.href) ? "is-active" : ""}`}
						>
							{link.label}
						</Link>
					))}
				</nav>

				<Link href="/contact-us" className="btn btn-primary nav-cta">
					Start a Project
				</Link>

				<button
					type="button"
					className="mobile-toggle"
					aria-label="Toggle navigation"
					aria-expanded={open}
					onClick={() => setOpen((value) => !value)}
				>
					{open ? <X size={19} /> : <Menu size={19} />}
				</button>
			</div>

			{open && (
				<nav className="mobile-menu" aria-label="Mobile navigation">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={`nav-link ${isActive(link.href) ? "is-active" : ""}`}
							onClick={() => setOpen(false)}
						>
							{link.label}
						</Link>
					))}
					<Link
						href="/contact-us"
						className="btn btn-primary"
						onClick={() => setOpen(false)}
					>
						Start a Project
					</Link>
				</nav>
			)}
		</header>
	);
}
