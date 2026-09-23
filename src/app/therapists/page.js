import site from "../../../config/site";
import { generateMeta } from "../../../config/metadata";
import therapists from "../../../config/therapists";
import PageHeroLeft from "../components/sections/pageHeroLeft/PageHeroLeft";
import TherapistGrid from "../components/sections/therapistGrid/TherapistGrid";
import CTABannerBrand from "../components/sections/ctaBannerBrand/CTABannerBrand";

export const metadata = generateMeta({
	title: "Our Therapists",
	description:
		"Meet our team of licensed therapists. Find a clinician who fits your needs, identity, and schedule.",
	path: "/therapists",
});

const pageHeroConfig = {
	eyebrow: "Our team",
	heading: "Find the right therapist for you",
	subheading:
		"Our clinicians bring a range of backgrounds, identities, languages, and specialties. Browse their profiles, or reach out and we will help you find a good fit.",
};

const therapistGridConfig = {
	heading: "Our clinicians",
	subheading:
		"Filter by specialty to see who focuses on what you are looking for.",
	therapists,
	filterable: true,
	filterLabel: "Filter by specialty",
	allLabel: "All specialties",
	resultsTemplate: "Showing {shown} of {total} therapists",
	acceptingLabel: "Accepting new clients",
	waitlistLabel: "Waitlist",
	specialtiesLabel: "Specialties",
	profileLinkText: "View profile",
};

const ctaBannerConfig = {
	heading: "Not sure where to start?",
	subheading:
		"Tell us a little about what you are looking for and our intake coordinator will match you with a therapist.",
	cta: {
		text: "Request a consultation",
		href: site.clientPortal,
		variant: "primary",
		external: true,
	},
};

export default function TherapistsPage() {
	return (
		<main id="main-content" className="therapists__page">
			<PageHeroLeft {...pageHeroConfig} />
			<TherapistGrid {...therapistGridConfig} />
			<CTABannerBrand {...ctaBannerConfig} />
		</main>
	);
}
