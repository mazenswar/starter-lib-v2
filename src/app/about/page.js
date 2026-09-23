import site from "../../../config/site";
import { generateMeta } from "../../../config/metadata";
import PageHeroLeft from "../components/sections/pageHeroLeft/PageHeroLeft";
import TwoColumnText from "../components/sections/twoColumnText/TwoColumnText";
import FeatureGridAccent from "../components/sections/featureGridAccent/FeatureGridAccent";
import CTABannerBrand from "../components/sections/ctaBannerBrand/CTABannerBrand";

export const metadata = generateMeta({
	title: "About",
	description: `Learn about ${site.name}, a group practice of licensed therapists from diverse backgrounds offering care in person and online.`,
	path: "/about",
});

const aboutHeroConfig = {
	eyebrow: "About us",
	heading: "A practice built on connection",
	subheading: `${site.name} is a group practice of licensed therapists who believe the right relationship is at the heart of good care.`,
};

const storyConfig = {
	id: "our-story",
	eyebrow: "Our story",
	heading: "Why we started",
	paragraphs: [
		"Juniper Grove began with a simple frustration: too many people reach out for help and end up with a therapist who does not understand their culture, identity, or the life they are living. Finding the right fit should not take months of trial and error.",
		"So we built a practice around fit. Our clinicians come from a wide range of backgrounds, speak several languages, and train in different approaches — which means we can match each client with someone who truly gets them.",
		"Today our team supports individuals, couples, families, and teens in our office and online across the state.",
	],
	list: [
		"Licensed, experienced clinicians",
		"Care in English, Spanish, Arabic, Mandarin, and Hebrew",
		"In-person and virtual sessions",
		"Evening appointments available",
	],
};

const valuesConfig = {
	id: "our-values",
	heading: "What we believe",
	subheading: "These values guide how we work with clients and with each other.",
	features: [
		{
			id: "fit",
			title: "Fit comes first",
			description:
				"The relationship between client and therapist matters most. We take time to match you with the right clinician.",
		},
		{
			id: "belonging",
			title: "Everyone belongs here",
			description:
				"We are LGBTQ+ affirming, culturally responsive, and committed to care that honors every part of who you are.",
		},
		{
			id: "evidence",
			title: "Grounded in evidence",
			description:
				"Our clinicians use approaches backed by research, tailored to your goals rather than applied one-size-fits-all.",
		},
		{
			id: "access",
			title: "Care should be accessible",
			description:
				"Virtual sessions, evening hours, insurance options, and clear pricing make it easier to get the help you need.",
		},
	],
};

const privacyConfig = {
	id: "privacy",
	eyebrow: "Your privacy",
	heading: "Confidential by design",
	paragraphs: [
		"What you share in therapy stays private, with a few legal exceptions your therapist will explain in your first session.",
		"Scheduling, intake forms, messaging, and video sessions all happen through our secure, HIPAA-compliant client portal. Our general contact form is not secure, so please do not use it to share health information.",
	],
};

const ctaBannerConfig = {
	heading: "Meet the team",
	subheading:
		"Browse our therapists' profiles to learn about their training, specialties, and approach.",
	cta: { text: "Meet our therapists", href: "/therapists", variant: "primary" },
	secondaryCta: {
		text: "Request a consultation",
		href: site.clientPortal,
		variant: "secondary",
		external: true,
	},
};

export default function AboutPage() {
	return (
		<main id="main-content" className="about__page">
			<PageHeroLeft {...aboutHeroConfig} />
			<TwoColumnText {...storyConfig} classNames="blockTint" />
			<FeatureGridAccent {...valuesConfig} />
			<TwoColumnText {...privacyConfig} classNames="blockTint" />
			<CTABannerBrand {...ctaBannerConfig} />
		</main>
	);
}
