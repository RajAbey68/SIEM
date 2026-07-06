"use client";

import Image from "next/image";
import PageLayout from "@/components/PageLayout";

const galleryImages = [
	{ src: "/images/projects/anilana-pasikudah.jpg", alt: "Anilana, Pasikudah" },
	{ src: "/images/projects/ravana-gardens.jpg", alt: "Boutique Hotel, Ravana Gardens" },
	{ src: "/images/projects/house-digana.jpg", alt: "House, Digana" },
	{ src: "/images/projects/colombo-courtyard.jpg", alt: "Colombo Courtyard" },
	{ src: "/images/projects/swimming-club.jpg", alt: "Colombo Swimming Club" },
	{ src: "/images/projects/hayleys-house.jpg", alt: "Hayley's House, Galle Fort" },
	{ src: "/images/projects/cinnamon-lakeside-7th.jpg", alt: "7th Floor, Cinnamon Lakeside" },
	{ src: "/images/projects/prima-apartments.jpg", alt: "Prima Apartments, Colombo" },
	{ src: "/images/projects/cinnamon-lakeside.jpg", alt: "Cinnamon Lakeside, Colombo" },
	{ src: "/images/projects/victoria-golf.jpg", alt: "Victoria Golf Course" },
	{ src: "/images/projects/wrey-house.jpg", alt: "Wrey House" },
	{ src: "/images/projects/south-point-villa.jpg", alt: "South Point Villa, Kathaluwa" },
	{ src: "/images/projects/bagatalle-road.jpg", alt: "Building, Bagatalle Road, Colombo" },
	{ src: "/images/projects/mirihana-house.jpg", alt: "House in Mirihana" },
	{ src: "/images/projects/amarasekara-house.jpg", alt: "Amarasekara House, Wadduwa" },
	{ src: "/images/projects/state-bank.jpg", alt: "State Bank of India Building, Colombo" },
	{ src: "/images/projects/braganza-villa.jpg", alt: "Braganza Villa, Talpe" },
	{ src: "/images/projects/ani-art-academies.jpg", alt: "Luxury House for Ani Art Academies, Dickwella" },
	{ src: "/images/projects/lolc-negombo.jpg", alt: "Office Building for LOLC, Negombo" },
	{ src: "/images/projects/crystal-sands.png", alt: "Crystal Sands Apartments, Rathgama" },
	{ src: "/images/projects/midigama-villa.jpg", alt: "Boutique Villa, Midigama" },
	// New gallery additions from June 30 update
	{ src: "/images/gallery/gallery-new-01.png", alt: "SIEM Project Gallery 01" },
	{ src: "/images/gallery/gallery-new-02.jpg", alt: "SIEM Project Gallery 02" },
	{ src: "/images/gallery/gallery-new-03.jpg", alt: "SIEM Project Gallery 03" },
	{ src: "/images/gallery/gallery-new-04.jpg", alt: "SIEM Project Gallery 04" },
	{ src: "/images/gallery/gallery-new-05.jpg", alt: "SIEM Project Gallery 05" },
	{ src: "/images/gallery/gallery-new-06.jpg", alt: "SIEM Project Gallery 06" },
	{ src: "/images/gallery/gallery-new-07.jpg", alt: "SIEM Project Gallery 07" },
	{ src: "/images/gallery/gallery-new-08.jpg", alt: "SIEM Project Gallery 08" },
	{ src: "/images/gallery/gallery-new-09.jpg", alt: "SIEM Project Gallery 09" },
	{ src: "/images/gallery/gallery-new-10.jpg", alt: "SIEM Project Gallery 10" },
	{ src: "/images/gallery/gallery-new-11.jpeg", alt: "SIEM Project Gallery 11" },
	{ src: "/images/gallery/gallery-new-12.jpeg", alt: "SIEM Project Gallery 12" },
	{ src: "/images/gallery/gallery-new-13.jpeg", alt: "SIEM Project Gallery 13" },
];

export default function Gallery() {
	return (
		<PageLayout
			title="Gallery"
			breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
		>
			<p
				style={{
					color: "var(--brand-body)",
					marginBottom: "1.5rem",
					fontFamily: "var(--font-ui)",
					fontSize: "0.88rem",
				}}
			>
				A selection of photographs from our construction and renovation projects across Sri Lanka.
			</p>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
					gap: "0.75rem",
				}}
				className="gallery-grid"
			>
				{galleryImages.map((img) => (
					<div
						key={img.src}
						style={{
							position: "relative",
							aspectRatio: "4/3",
							overflow: "hidden",
							borderRadius: "2px",
							border: "1px solid #e5e5e5",
						}}
					>
						<Image
							src={img.src}
							alt={img.alt}
							fill
							sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
							style={{ objectFit: "cover" }}
						/>
					</div>
				))}
			</div>
			<style>{`
        @media (max-width: 768px) { .gallery-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .gallery-grid { grid-template-columns: 1fr !important; } }
      `}</style>
		</PageLayout>
	);
}
