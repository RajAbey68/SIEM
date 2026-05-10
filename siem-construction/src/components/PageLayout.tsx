import Link from "next/link";
import Navbar from "@/components/Navbar";
import QuickContact from "@/components/QuickContact";

interface BreadcrumbItem {
	label: string;
	href?: string;
}

interface PageLayoutProps {
	title: string;
	intro?: string;
	breadcrumbs: BreadcrumbItem[];
	children: React.ReactNode;
}

export function SiteFooter() {
	return (
		<footer className="site-footer">
			<div className="container-site">
				<div className="footer-grid">
					<div>
						<p className="eyebrow">SIEM (Pvt) Ltd</p>
						<h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3.6rem)" }}>
							Quality construction for Sri Lanka since 1993.
						</h2>
					</div>
					<div>
						<h3>Navigate</h3>
						<Link href="/about-us">Studio</Link>
						<Link href="/services">Services</Link>
						<Link href="/past-projects">Past Projects</Link>
						<Link href="/gallery">Gallery</Link>
						<Link href="/contact-us">Contact Us</Link>
					</div>
					<div>
						<h3>Contact</h3>
						<p style={{ color: "rgba(248,244,236,0.72)", margin: 0 }}>
							51/1, Gregory&apos;s Road
							<br />
							Colombo 07, Sri Lanka
							<br />
							<br />
							+94 718 419 419
							<br />
							+94 714 429 429
							<br />
							info@siem.lk
						</p>
					</div>
				</div>
				<p className="footer-note">
					Copyright {new Date().getFullYear()} - SIEM (Pvt) Ltd. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

export default function PageLayout({
	title,
	intro,
	breadcrumbs,
	children,
}: PageLayoutProps) {
	return (
		<>
			<Navbar />
			<section className="page-hero">
				<div className="container-site">
					<nav className="breadcrumb" aria-label="Breadcrumb">
						{breadcrumbs.map((crumb, index) => (
							<span key={crumb.label}>
								{index > 0 && " / "}
								{crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : crumb.label}
							</span>
						))}
					</nav>
					<h1 className="display" style={{ marginTop: "1rem" }}>
						{title}
					</h1>
					{intro && (
						<p className="lead" style={{ color: "rgba(248,244,236,0.76)", marginTop: "1.25rem", maxWidth: 760 }}>
							{intro}
						</p>
					)}
				</div>
			</section>

			<main className="page-main">
				<div className="container-site split">
					<div>{children}</div>
					<aside>
						<QuickContact />
					</aside>
				</div>
			</main>
			<SiteFooter />
		</>
	);
}
