import site from "../../../config/site";
import { generateMeta } from "../../../config/metadata";
import PageHeroLeft from "../components/sections/pageHeroLeft/PageHeroLeft";
import ChipNav from "../components/ui/chipNav/ChipNav";
import TwoColumnText from "../components/sections/twoColumnText/TwoColumnText";
import FeatureGridCard from "../components/sections/featureGridCard/FeatureGridCard";
import CTABannerBrand from "../components/sections/ctaBannerBrand/CTABannerBrand";

export const metadata = generateMeta({
	title: "Services",
	description:
		"Individual, couples, family, teen, group, and virtual therapy. Learn how our therapists can help and what we treat.",
	path: "/services",
});

const pageHeroConfig = {
	eyebrow: "Services",
	heading: "Care for every stage of life",
	subheading:
		"We offer therapy for individuals, couples, families, and teens — in person at our office and online across the state. Every client is matched with a clinician whose training fits their needs.",
};

// Section ids match the links on the home page cards (/services#...)
const services = [
	{
		id: "individual-therapy",
		eyebrow: "For adults",
		heading: "Individual Therapy",
		paragraphs: [
			"Individual therapy is a confidential space to understand what you are going through and build tools to move forward. Your therapist will work with you to set goals and choose an approach that fits.",
			"Sessions are typically 50 minutes, weekly or every other week.",
		],
		list: [
			"Anxiety, stress, and burnout",
			"Depression and low mood",
			"Trauma and difficult life experiences",
			"Grief, loss, and life transitions",
			"Identity, self-esteem, and relationships",
		],
	},
	{
		id: "couples-therapy",
		eyebrow: "For partners",
		heading: "Couples Therapy",
		paragraphs: [
			"Couples therapy helps partners break out of painful patterns, communicate more openly, and feel like a team again. You do not need to be in crisis — many couples come in to strengthen a relationship that is already working.",
			"We work with couples of all backgrounds, identities, and relationship structures.",
		],
		list: [
			"Communication and recurring conflict",
			"Rebuilding trust after a breach",
			"Intimacy and emotional connection",
			"Major decisions and life changes",
			"Premarital counseling",
		],
	},
	{
		id: "family-therapy",
		eyebrow: "For families",
		heading: "Family Therapy",
		paragraphs: [
			"Family therapy brings members together to understand each other and change the patterns that keep conflict going. Sessions may include the whole family or smaller groups, depending on your goals.",
		],
		list: [
			"Parent and child conflict",
			"Blended families and co-parenting",
			"Adjusting to divorce, loss, or a move",
			"Supporting a family member through a mental health challenge",
		],
	},
	{
		id: "teens-and-young-adults",
		eyebrow: "Ages 13–25",
		heading: "Teens and Young Adults",
		paragraphs: [
			"Adolescence and early adulthood bring big changes. Our clinicians help teens and young adults manage stress, understand their emotions, and navigate school, identity, and independence.",
			"For clients under 18, parents or guardians are involved in the intake process, and we talk openly about how confidentiality works.",
		],
		list: [
			"Anxiety and academic pressure",
			"Depression and self-harm",
			"Identity, including LGBTQ+ affirming care",
			"Social and family stress",
			"College and career transitions",
		],
	},
	{
		id: "group-therapy",
		eyebrow: "Small groups",
		heading: "Group Therapy",
		paragraphs: [
			"Our clinician-led groups meet weekly with six to ten members. Groups are a supportive, affordable way to learn skills and connect with others who understand what you are going through.",
			"Group offerings change throughout the year. Ask our intake coordinator what is currently running.",
		],
		list: [
			"DBT skills group",
			"Grief and loss support group",
			"Anxiety management group",
			"New parents group",
		],
	},
	{
		id: "virtual-therapy",
		eyebrow: "Online",
		heading: "Virtual Therapy",
		paragraphs: [
			"Most of our therapists offer sessions over secure, HIPAA-compliant video. Virtual therapy is as effective as in-person care for many concerns and can make it easier to fit therapy into your life.",
			"You must be located in the state during your session.",
		],
		list: [
			"Secure video through our client portal",
			"Available on phone, tablet, or computer",
			"Evening appointments available",
			"Easy to combine with occasional in-person sessions",
		],
	},
];

const chipNavConfig = {
	label: "Jump to a service",
	chips: [
		...services.map((s) => ({ id: s.id, label: s.heading })),
		{ id: "what-we-treat", label: "What we treat" },
		{ id: "fees-and-insurance", label: "Fees and insurance" },
	],
};

const specialtiesConfig = {
	id: "what-we-treat",
	heading: "What we treat",
	subheading:
		"Our clinicians have training across a wide range of concerns. Browse our therapists to see who specializes in what.",
	features: [
		{
			id: "anxiety",
			title: "Anxiety and OCD",
			description:
				"Worry, panic, social anxiety, phobias, and obsessive-compulsive patterns.",
		},
		{
			id: "depression",
			title: "Depression",
			description:
				"Low mood, loss of motivation, and feeling disconnected from yourself or others.",
		},
		{
			id: "trauma",
			title: "Trauma and PTSD",
			description:
				"Healing from single events or long-term experiences, at a pace that feels safe.",
		},
		{
			id: "relationships",
			title: "Relationships",
			description:
				"Conflict, communication, trust, and connection with partners and family.",
		},
		{
			id: "grief",
			title: "Grief and loss",
			description:
				"Support after the death of a loved one, a breakup, or another significant loss.",
		},
		{
			id: "perinatal",
			title: "Perinatal and parenting",
			description:
				"Pregnancy, postpartum, fertility challenges, and the stress of raising children.",
		},
		{
			id: "identity",
			title: "Identity and culture",
			description:
				"LGBTQ+ affirming care, gender identity, and navigating cultural expectations.",
		},
		{
			id: "life-transitions",
			title: "Life transitions",
			description:
				"Career changes, moves, divorce, and other moments of uncertainty.",
		},
	],
	cta: { text: "Find a therapist", href: "/therapists", variant: "secondary" },
};

const feesConfig = {
	id: "fees-and-insurance",
	eyebrow: "Fees",
	heading: "Fees and insurance",
	paragraphs: [
		"Many of our therapists are in network with major insurance plans. Each therapist's profile lists the plans they accept. For out-of-network care, we provide superbills you can submit for reimbursement.",
		"If you are paying out of pocket, you have the right to a Good Faith Estimate of the expected cost of your care before your first session.",
	],
	list: [
		"Free 15-minute phone consultation",
		"In-network with select insurance plans",
		"Superbills for out-of-network reimbursement",
		"HSA and FSA cards accepted",
	],
};

const ctaBannerConfig = {
	heading: "Ready to get started?",
	subheading:
		"Request a free consultation and we will match you with a therapist who fits your needs.",
	cta: {
		text: "Request a consultation",
		href: site.clientPortal,
		variant: "primary",
		external: true,
	},
	secondaryCta: { text: "Meet our therapists", href: "/therapists", variant: "secondary" },
};

export default function ServicesPage() {
	return (
		<main id="main-content" className="services__page">
			<PageHeroLeft {...pageHeroConfig} />
			<ChipNav {...chipNavConfig} />
			{services.map((service, i) => (
				<TwoColumnText
					key={service.id}
					{...service}
					classNames={i % 2 === 0 ? "blockTint" : ""}
				/>
			))}
			<FeatureGridCard {...specialtiesConfig} />
			<TwoColumnText {...feesConfig} classNames="blockTint" />
			<CTABannerBrand {...ctaBannerConfig} />
		</main>
	);
}
