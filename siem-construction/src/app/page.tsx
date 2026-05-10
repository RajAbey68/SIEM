import { ArrowUpRight, Building2, Compass, Landmark, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { SiteFooter } from "@/components/PageLayout";

const proof = [
	["1993", "founded"],
	["33+", "years"],
	["200+", "projects"],
	["Colombo", "base"],
];

const architectSignals = [
	{
		icon: Compass,
		title: "Architect-first execution",
		text: "A quiet contractor posture: protect the architect's intent, solve the site, keep the client calm.",
	},
	{
		icon: Leaf,
		title: "Tropical intelligence",
		text: "Shade, monsoon edges, drainage, airflow, tactile finishes and buildings that age with heat and rain.",
	},
	{
		icon: Landmark,
		title: "Heritage without theatre",
		text: "Colonial renovation, banking interiors and retrofit work handled with restraint, sequence and respect.",
	},
	{
		icon: Building2,
		title: "Luxury that feels inevitable",
		text: "Villa, house, boutique hotel and commercial fit-out work framed around craft, proportion and handover.",
	},
];

const imageStack = [
	{
		src: "/images/projects/sbi-after.jpg",
		label: "Heritage renovation / Colombo",
	},
	{
		src: "/images/projects/lobby-area.jpg",
		label: "Hospitality-grade interiors",
	},
	{
		src: "/images/projects/site-01.jpg",
		label: "Tropical residential structure",
	},
	{
		src: "/images/projects/site-03.jpg",
		label: "Commercial build discipline",
	},
];

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<section className="v3-hero">
					<div className="v3-hero-media">
						<Image
							src="/images/projects/past-projects-banner.jpg"
							alt="SIEM tropical construction project"
							fill
							priority
							sizes="100vw"
						/>
					</div>
					<div className="container-site v3-hero-grid">
						<div className="v3-hero-copy">
							<p className="eyebrow">siem-nextgen / concept v3</p>
							<h1>
								The build partner architects call before the client panics.
							</h1>
						</div>
						<div className="v3-hero-note">
							<p>
								SIEM is one of Sri Lanka&apos;s premier civil construction firms,
								established in 1993. This version moves the brand from contractor
								brochure to architectural confidence: tropical homes, boutique
								hotels, commercial works and colonial renovation for clients who
								notice proportion, silence and detail.
							</p>
							<div className="v3-actions">
								<Link href="/past-projects" className="btn btn-light">
									Project Index <ArrowUpRight size={16} />
								</Link>
								<Link href="/contact-us" className="btn btn-outline v3-outline">
									Private Brief
								</Link>
							</div>
						</div>
					</div>
					<div className="container-site v3-proof-strip">
						{proof.map(([value, label]) => (
							<div key={label}>
								<strong>{value}</strong>
								<span>{label}</span>
							</div>
						))}
					</div>
				</section>

				<section className="v3-black">
					<div className="container-site v3-manifesto">
						<p className="eyebrow">For Colombo, Singapore, Hong Kong, Malaysia and the Gulf</p>
						<h2>
							Not a builder shouting for attention. A contractor fluent in
							architectural restraint.
						</h2>
						<p>
							High-net-worth buyers are not buying concrete. They are buying a
							place that feels inevitable: shaded, quiet, tactile, private and
							well made. Architects are buying a site partner who understands that
							the drawing is not decoration. It is a promise.
						</p>
					</div>
					<div className="container-site v3-signal-grid">
						{architectSignals.map((item) => {
							const Icon = item.icon;
							return (
								<article key={item.title} className="v3-signal">
									<Icon size={25} />
									<h3>{item.title}</h3>
									<p>{item.text}</p>
								</article>
							);
						})}
					</div>
				</section>

				<section className="v3-atelier">
					<div className="container-site v3-atelier-grid">
						<div>
							<p className="eyebrow">Material Theatre</p>
							<h2>
								Stone, timber, marble, rainwater, shadow, old walls, new steel.
							</h2>
							<p>
								The radical move is not louder colour. It is making SIEM feel
								like the contractor behind places that appear effortless:
								verandas that breathe, corridors that stay cool, colonial fabric
								that still has dignity, imported finishes installed without fuss.
							</p>
						</div>
						<div className="v3-image-stack">
							{imageStack.map((image, index) => (
								<figure key={image.src} className={`v3-stack-card card-${index + 1}`}>
									<Image src={image.src} alt={image.label} fill sizes="45vw" />
									<figcaption>{image.label}</figcaption>
								</figure>
							))}
						</div>
					</div>
				</section>

				<section className="v3-map">
					<div className="container-site v3-map-grid">
						<div>
							<p className="eyebrow">The buyer psychology</p>
							<h2>Discretion sells better than spectacle.</h2>
						</div>
						<div className="v3-buyer-grid">
							<article>
								<span>01</span>
								<h3>Sri Lankan HNW families</h3>
								<p>
									They see continuity: Colombo credibility, tropical craft, and a
									firm that can build a serious home without making the process
									feel noisy.
								</p>
							</article>
							<article>
								<span>02</span>
								<h3>Foreign buyers and returnees</h3>
								<p>
									They read the cues of boutique hospitality, privacy, climate
									intelligence and heritage without needing local construction
									context.
								</p>
							</article>
							<article>
								<span>03</span>
								<h3>Architects overseas</h3>
								<p>
									They want a contractor who looks literate in drawings,
									materials, sequencing and restraint. This site signals taste
									before the first meeting.
								</p>
							</article>
						</div>
					</div>
				</section>

				<section className="v3-contact">
					<div className="container-site v3-contact-grid">
						<h2>Bring the architect. Bring the impossible site. Bring the old wall.</h2>
						<div>
							<p>
								Head office: 51/1, Gregory&apos;s Road, Colombo 07, Sri Lanka.
								<br />
								Call +94 718 419 419 or +94 714 429 429.
								<br />
								Email info@siem.lk.
							</p>
							<div className="v3-actions">
								<a href="mailto:info@siem.lk" className="btn btn-light">
									Send the Brief
								</a>
								<a href="tel:+94718419419" className="btn btn-outline v3-outline">
									Call Colombo
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
			<SiteFooter />
		</>
	);
}
