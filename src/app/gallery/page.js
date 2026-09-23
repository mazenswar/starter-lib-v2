import GalleryGrid from "../components/sections/galleryGrid/GalleryGrid";
import CTABannerBrand from "../components/sections/ctaBannerBrand/CTABannerBrand";

const galleryConfig = {
	heading: "Our Work",
	subheading: "A look at some of the projects we are proud of.",
	filterable: true,
	columns: 3, // 2 | 3 | 4
	viewLabel: "View",
	categories: [
		{ id: "all", label: "All" },
		{ id: "lawn", label: "Lawn Care" },
		{ id: "landscaping", label: "Landscaping" },
		{ id: "cleanup", label: "Cleanups" },
	],
	images: [
		{
			id: "g1",
			src: "/gallery/assets/1.jpg",
			alt: "Freshly mowed lawn with clean edges",
			category: "lawn",
			width: 800,
			height: 600,
		},
		{
			id: "g2",
			src: "/gallery/assets/2.jpg",
			alt: "Landscaped front yard with flower beds",
			category: "landscaping",
			width: 800,
			height: 600,
		},
		{
			id: "g3",
			src: "/gallery/assets/3.jpg",
			alt: "Fall cleanup with leaf removal",
			category: "cleanup",
			width: 800,
			height: 600,
		},
		{
			id: "g4",
			src: "/gallery/assets/4.jpg",
			alt: "Backyard lawn maintenance",
			category: "lawn",
			width: 800,
			height: 600,
		},
		{
			id: "g5",
			src: "/gallery/assets/5.jpg",
			alt: "Garden bed installation",
			category: "landscaping",
			width: 800,
			height: 600,
		},
		{
			id: "g6",
			src: "/gallery/assets/6.jpg",
			alt: "Spring cleanup and mulching",
			category: "cleanup",
			width: 800,
			height: 600,
		},
	],
};

const ctaBannerConfig = {
	heading: "Ready to get started?",
	subheading:
		"Let us build something great together. Reach out today and we will get back to you within one business day.",
	cta: {
		text: "Get in touch",
		href: "/contact",
		variant: "secondary",
	},
};

export default function GalleryPage() {
	return (
		<main id="main-content">
			<h1 className="sr-only">Gallery</h1>
			<GalleryGrid {...galleryConfig} />
			<CTABannerBrand {...ctaBannerConfig} />
		</main>
	);
}
