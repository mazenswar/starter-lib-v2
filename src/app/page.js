import site from "../../config/site";
import therapists from "../../config/therapists";
import HeroBackground from "./components/sections/heroBackground/HeroBackground";
import CardGrid from "./components/sections/cardGrid/CardGrid";
import TwoColumnImageRight from "./components/sections/twoColumnImageRight/TwoColumnImageRight";
import TherapistGrid from "./components/sections/therapistGrid/TherapistGrid";
import Steps from "./components/sections/steps/Steps";
import FAQ from "./components/sections/faq/FAQ";
import BookingCTA from "./components/sections/bookingCTA/BookingCTA";

// To change the hero layout, import a different hero variant
// (e.g. HeroSplitContained) and update data-style in app/layout.js.
const heroConfig = {
	eyebrow: "Now welcoming new clients",
	heading: "Therapy with a team that understands you.",
	subheading:
		`${site.name} is a group practice of licensed therapists offering individual, couples, family, and teen therapy — in person and online.`,
	cta: { text: "Find a therapist", href: "/therapists", variant: "primary" },
	ctaSecondary: {
		text: "Request a consultation",
		href: site.clientPortal,
		variant: "secondary",
		external: true,
	},
	image: { src: "/hero/variant-e.jpg", alt: "" },
};

const servicesConfig = {
	heading: "How we can help",
	subheading:
		"Support for individuals, relationships, and families at every stage of life.",
	cta: { text: "Explore our services", href: "/services", variant: "secondary" },
	cards: [
		{
			title: "Individual Therapy",
			description:
				"One-on-one support for anxiety, depression, trauma, life transitions, and more.",
			href: "/services#individual-therapy",
			cta: "Learn more",
		},
		{
			title: "Couples Therapy",
			description:
				"Rebuild trust, improve communication, and reconnect with your partner.",
			href: "/services#couples-therapy",
			cta: "Learn more",
		},
		{
			title: "Family Therapy",
			description:
				"Work through conflict and strengthen relationships as a family.",
			href: "/services#family-therapy",
			cta: "Learn more",
		},
		{
			title: "Teens and Young Adults",
			description:
				"Care for adolescents and young adults navigating school, identity, and independence.",
			href: "/services#teens-and-young-adults",
			cta: "Learn more",
		},
		{
			title: "Group Therapy",
			description:
				"Small, clinician-led groups where you can learn skills and feel less alone.",
			href: "/services#group-therapy",
			cta: "Learn more",
		},
		{
			title: "Virtual Therapy",
			description:
				"Secure video sessions from anywhere in the state, on a schedule that works for you.",
			href: "/services#virtual-therapy",
			cta: "Learn more",
		},
	],
};

const aboutConfig = {
	id: "our-practice",
	eyebrow: "Our practice",
	heading: "The right fit makes all the difference",
	paragraphs: [
		"Research consistently shows that the relationship between client and therapist is one of the strongest predictors of progress. That is why we built a team with a wide range of backgrounds, identities, languages, and specialties.",
		"When you reach out, our intake coordinator takes the time to understand what you are looking for and matches you with a clinician who is a good fit — not just whoever has the next opening.",
	],
	list: [
		"Licensed clinicians from diverse backgrounds and identities",
		"Evidence-based care tailored to your goals",
		"In-person and virtual sessions, including evenings",
		"LGBTQ+ affirming and culturally responsive",
	],
	cta: { text: "About our practice", href: "/about", variant: "secondary" },
	image: {
		src: "/assets/nurture.jpg",
		alt: "Cupped hands holding a small green seedling in soil",
		width: 3555,
		height: 3555,
	},
};

const teamPreviewConfig = {
	id: "meet-our-therapists",
	eyebrow: "Our team",
	heading: "Meet some of our therapists",
	subheading:
		"Each of our clinicians brings their own training, experience, and perspective.",
	therapists: therapists.slice(0, 3),
	acceptingLabel: "Accepting new clients",
	waitlistLabel: "Waitlist",
	specialtiesLabel: "Specialties",
	profileLinkText: "View profile",
	cta: { text: "Meet the full team", href: "/therapists", variant: "secondary" },
};

const stepsConfig = {
	heading: "Getting started",
	subheading: "Reaching out is the hardest part. Here is what happens next.",
	steps: [
		{
			id: "step-reach-out",
			title: "Reach out",
			description:
				"Request a consultation through our secure client portal, or give us a call. Tell us a little about what brings you in.",
		},
		{
			id: "step-consultation",
			title: "Free 15-minute consultation",
			description:
				"Our intake coordinator will call you to learn about your needs, availability, and insurance.",
		},
		{
			id: "step-match",
			title: "Get matched",
			description:
				"We recommend a therapist whose specialties, approach, and schedule fit you — or you can choose your own.",
		},
		{
			id: "step-first-session",
			title: "Begin therapy",
			description:
				"Meet your therapist in person or online. Your first session is a chance to talk about your goals and see how it feels.",
		},
	],
	cta: { text: "Find a therapist", href: "/therapists", variant: "secondary" },
};

const faqConfig = {
	id: "common-questions",
	heading: "Common questions",
	subheading: "Answers to what people ask us most.",
	contact: { text: "See all FAQs", href: "/faq" },
	groups: [
		{
			id: "home-faq",
			title: "Before you start",
			items: [
				{
					id: "home-faq-insurance",
					q: "Do you take insurance?",
					a: "<p>Many of our therapists are in network with major insurance plans, and all of them can provide paperwork for out-of-network reimbursement. Each therapist's profile lists the plans they accept.</p>",
				},
				{
					id: "home-faq-virtual",
					q: "Do you offer virtual sessions?",
					a: "<p>Yes. Most of our clinicians offer secure video sessions to clients anywhere in the state, and some see clients virtually only.</p>",
				},
				{
					id: "home-faq-choose",
					q: "How do I choose a therapist?",
					a: "<p>You are welcome to browse our therapists and request someone specific. If you are not sure, our intake coordinator will recommend a clinician based on what you share with us.</p>",
				},
				{
					id: "home-faq-crisis",
					q: "What if I am in crisis?",
					a: "<p>We are not a crisis service. If you are in immediate danger, call 911. For urgent emotional support, call or text 988 to reach the Suicide and Crisis Lifeline, available 24/7.</p>",
				},
			],
		},
	],
};

const bookingConfig = {
	heading: "Ready to take the first step?",
	subheading:
		"We offer a free 15-minute phone consultation so you can ask questions and get matched with the right therapist. No commitment required.",
	steps: [
		{ number: "01", text: "Request a consultation through our secure client portal" },
		{ number: "02", text: "Talk with our intake coordinator" },
		{ number: "03", text: "Get matched and schedule your first session" },
	],
	cardLabel: "Free 15-minute consultation",
	cta: {
		text: "Request a consultation",
		href: site.clientPortal,
		variant: "primary",
		external: true,
	},
	note: "Not for emergencies. If you are in crisis, call or text 988 or call 911.",
};

export default function Home() {
	return (
		<main id="main-content" className="home__page">
			<HeroBackground {...heroConfig} />
			<CardGrid {...servicesConfig} />
			<TwoColumnImageRight {...aboutConfig} />
			<TherapistGrid {...teamPreviewConfig} />
			<Steps {...stepsConfig} />
			<FAQ {...faqConfig} />
			<BookingCTA {...bookingConfig} />
		</main>
	);
}
