import { ArrowUpRight, Leaf, Landmark, Waves } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { SiteFooter } from "@/components/PageLayout";

const services = [
	{
		title: "Tropical Civil Construction",
		text: "Residential, commercial and institutional buildings shaped for Sri Lankan light, rain, heat, airflow and long service life.",
	},
	{
		title: "Luxury Villas & Boutique Hospitality",
		text: "High-touch construction, fit-out coordination, imported finishes, Italian tiles and marble, and detail-led handover.",
	},
	{
		title: "Colonial Renovation & Retrofit",
		text: "Sensitive upgrades to heritage structures, occupied spaces and banking halls with minimum disruption and careful sequencing.",
	},
	{
		title: "Project Management",
		text: "End-to-end oversight from feasibility, cost planning and buildability through final construction and handover.",
	},
];

const projects = [
	{
		img: "/images/projects/site-01.jpg",
		title: "Private Residential Works",
		kicker: "Tropical living",
	},
	{
		img: "/images/projects/sbi-after.jpg",
		title: "Heritage Banking Renovation",
		kicker: "Colonial retrofit",
	},
	{
		img: "/images/projects/lobby-area.jpg",
		title: "Commercial Hospitality Finish",
		kicker: "Fit-out detail",
	},
];

export default function Home() {
	return (
		<>
			<Navbar />
			<section className="hero">
				<div className="hero-media">
					<Image
						src="/images/projects/site-03.jpg"
						alt="SIEM construction project in Sri Lanka"
						fill
						className="hero-image"
						priority
						sizes="100vw"
					/>
				</div>
				<div className="container-site hero-content">
					<div className="hero-copy">
						<p className="eyebrow" style={{ color: "var(--stone)" }}>
							Future concept branch
						</p>
						<h1 className="display">
							Buildings shaped by climate, craft and continuity.
						</h1>
						<p className="lead" style={{ marginTop: "1.4rem" }}>
							SIEM is one of Sri Lanka&apos;s premier civil construction firms,
							established in 1993 and committed to quality construction
							solutions on time. This future site reframes that legacy for
							tropical homes, boutique hospitality, commercial works and
							colonial renovation.
						</p>
						<div className="hero-actions">
							<Link href="/past-projects" className="btn btn-light">
								View Projects <ArrowUpRight size={16} />
							</Link>
							<Link href="/contact-us" className="btn btn-outline" style={{ color: "var(--paper)", borderColor: "rgba(248,244,236,0.5)" }}>
								Start a Conversation
							</Link>
						</div>
						<div className="metric-grid">
							{[
								["1993", "Year founded"],
								["33+", "Years of experience"],
								["200+", "Projects completed"],
								["LK", "Base of operations"],
							].map(([value, label]) => (
								<div className="metric" key={label}>
									<strong>{value}</strong>
									<span>{label}</span>
								</div>
							))}
						</div>
					</div>
					<div className="hero-panel">
						<p className="eyebrow">What changes</p>
						<h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", lineHeight: 1, margin: "0.5rem 0" }}>
							A site that feels built, not decorated.
						</h2>
						<p style={{ color: "var(--ink-soft)", margin: 0 }}>
							The direction takes cues from Awwwards editorial UI, tropical
							modern villas, boutique hotel contractors, and colonial renovation
							specialists while keeping SIEM&apos;s verified facts.
						</p>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="container-site split">
					<div>
						<p className="eyebrow">Positioning</p>
						<h2 className="section-title">
							From contractor profile to premium building partner.
						</h2>
					</div>
					<div>
						<p className="lead">
							The current company story stays intact: trust, integrity, quality,
							all-round engineering experience, and a complete service from
							advisory work to final construction. The future expression adds a
							more confident market signal for clients building villas, homes,
							boutique hotels, refined commercial interiors and heritage spaces.
						</p>
					</div>
				</div>
			</section>

			<section className="section dark-band">
				<div className="container-site">
					<div className="split" style={{ alignItems: "end", marginBottom: "2rem" }}>
						<div>
							<p className="eyebrow">Modernisation Concepts</p>
							<h2 className="section-title">Built for the tropics.</h2>
						</div>
						<p className="lead">
							A future SIEM site should talk about shade, cross ventilation,
							monsoon durability, material honesty, restoration discipline and
							the elegance expected in Sri Lanka&apos;s villa and hospitality market.
						</p>
					</div>
					<div className="card-grid">
						<div className="feature-card">
							<Waves size={28} color="var(--stone)" />
							<h3>Climate-first planning</h3>
							<p>
								Passive cooling, deep overhangs, rain-aware detailing, drainage
								and site infrastructure presented as construction intelligence.
							</p>
						</div>
						<div className="feature-card">
							<Leaf size={28} color="var(--stone)" />
							<h3>Natural materials</h3>
							<p>
								Stone, timber, marble, tile and steel treated as part of the
								project story, from sourcing to installation quality.
							</p>
						</div>
						<div className="feature-card">
							<Landmark size={28} color="var(--stone)" />
							<h3>Heritage upgrades</h3>
							<p>
								Colonial renovation framed around preservation, discreet MEP,
								structural retrofit and polished handover.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="container-site">
					<div className="split" style={{ alignItems: "end", marginBottom: "2rem" }}>
						<div>
							<p className="eyebrow">Services</p>
							<h2 className="section-title">A sharper offer.</h2>
						</div>
						<Link href="/services" className="btn btn-outline">
							All Services <ArrowUpRight size={16} />
						</Link>
					</div>
					<div className="card-grid">
						{services.map((service) => (
							<article className="feature-card" key={service.title}>
								<h3>{service.title}</h3>
								<p>{service.text}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="section" style={{ paddingTop: 0 }}>
				<div className="container-site">
					<div className="split" style={{ alignItems: "end", marginBottom: "2rem" }}>
						<div>
							<p className="eyebrow">Selected Works</p>
							<h2 className="section-title">Proof through places.</h2>
						</div>
						<Link href="/gallery" className="btn btn-outline">
							Open Gallery <ArrowUpRight size={16} />
						</Link>
					</div>
					<div className="card-grid">
						{projects.map((project) => (
							<article className="project-card" key={project.title}>
								<div className="project-image">
									<Image src={project.img} alt={project.title} fill sizes="33vw" />
								</div>
								<div className="project-body">
									<p className="eyebrow">{project.kicker}</p>
									<h3>{project.title}</h3>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="section dark-band">
				<div className="container-site split">
					<div>
						<p className="eyebrow">Contact</p>
						<h2 className="section-title">For homes, hotels, institutions and careful renovations.</h2>
					</div>
					<div>
						<p className="lead">
							Call +94 718 419 419 or +94 714 429 429, or email info@siem.lk.
							Head office: 51/1, Gregory&apos;s Road, Colombo 07, Sri Lanka.
						</p>
						<div className="hero-actions">
							<a href="tel:+94718419419" className="btn btn-light">
								Call SIEM
							</a>
							<a href="mailto:info@siem.lk" className="btn btn-outline" style={{ color: "var(--paper)", borderColor: "rgba(248,244,236,0.5)" }}>
								Email Brief
							</a>
						</div>
					</div>
				</div>
			</section>
			<SiteFooter />
		</>
	);
}
