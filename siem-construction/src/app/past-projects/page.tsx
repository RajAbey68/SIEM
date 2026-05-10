import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
	title: "Past Projects | SIEM",
	description:
		"A selection of past construction projects by SIEM (Pvt) Ltd across Sri Lanka.",
};

const projects = [
	{
		img: "/images/projects/sbi-after.jpg",
		title: "Bank Heritage Renovation",
		type: "Colonial renovation",
		location: "Colombo",
		note: "Interior renovation of a heritage bank building with before-and-after transformation.",
	},
	{
		img: "/images/projects/sbi-hall.jpg",
		title: "Banking Hall Fit-Out",
		type: "Commercial fit-out",
		location: "Colombo",
		note: "Main banking hall works including MEP, finishes and joinery coordination.",
	},
	{
		img: "/images/projects/site-01.jpg",
		title: "Luxury Residential Works",
		type: "Residential",
		location: "Colombo",
		note: "Multi-storey residential development with structural and fit-out works.",
	},
	{
		img: "/images/projects/site-03.jpg",
		title: "Commercial Development",
		type: "Commercial",
		location: "Colombo 2",
		note: "Commercial office and data centre development.",
	},
	{
		img: "/images/projects/lobby-area.jpg",
		title: "Lobby and Reception Fit-Out",
		type: "Hospitality-grade interiors",
		location: "Colombo",
		note: "Premium lobby and reception area fit-out.",
	},
	{
		img: "/images/projects/site-04.jpg",
		title: "Mid-Rise Residential",
		type: "Residential",
		location: "Sri Lanka",
		note: "Structural construction of a mid-rise residential block.",
	},
];

export default function PastProjects() {
	return (
		<PageLayout
			title="Projects"
			intro="A future presentation of SIEM's project proof, shaped around tropical residences, commercial works, boutique-style interiors and heritage renovation."
			breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
		>
			<div className="content-grid">
				{projects.map((project) => (
					<article className="project-card" key={project.title}>
						<div className="project-image">
							<Image src={project.img} alt={project.title} fill sizes="50vw" />
						</div>
						<div className="project-body">
							<p className="eyebrow">
								{project.type} / {project.location}
							</p>
							<h3>{project.title}</h3>
							<p>{project.note}</p>
						</div>
					</article>
				))}
			</div>
		</PageLayout>
	);
}
