import FAQ from "../components/sections/faq/FAQ";

// Generic group practice content — replace per project
const faqConfig = {
	heading: "Frequently Asked Questions",
	subheading: "Answers to the questions we hear most often.",
	contact: { text: "Still have questions? Get in touch.", href: "/contact" },
	searchable: true,
	searchLabel: "Search frequently asked questions",
	searchPlaceholder: "Search questions...",
	showToc: true,
	tocTitle: "On this page",
	noResultsText: "No results for",
	noResultsHint: "Try a different search term.",
	clearSearchText: "Clear search",
	groups: [
		{
			id: "getting-started",
			title: "Getting started",
			items: [
				{
					id: "how-to-start",
					q: "How do I get started?",
					a: "<p>Use the Request a consultation button to reach our secure client portal, or give us a call. Our intake coordinator will set up a free 15-minute phone consultation to learn what you are looking for. Please do not share health information through our general contact form — it is not secure.</p>",
					tags: ["start", "begin", "intake", "consultation"],
				},
				{
					id: "choose-therapist",
					q: "How do I choose a therapist?",
					a: "<p>You can browse our therapists and request someone specific, or let our intake coordinator recommend a clinician based on your needs, preferences, and schedule.</p>",
					tags: ["match", "fit", "therapist"],
				},
				{
					id: "first-session",
					q: "What happens in the first session?",
					a: "<p>Your first session is a chance to talk about what brings you in, your history, and your goals. It is also a chance for you to decide whether the therapist feels like a good fit.</p>",
					tags: ["first", "intake", "session"],
				},
			],
		},
		{
			id: "fees-and-insurance",
			title: "Fees and insurance",
			items: [
				{
					id: "insurance",
					q: "Do you take insurance?",
					a: "<p>Many of our therapists are in network with major insurance plans. Each therapist's profile lists the plans they accept. We can also provide paperwork for out-of-network reimbursement.</p>",
					tags: ["insurance", "cost", "in network", "out of network"],
				},
				{
					id: "fees",
					q: "What if I am paying out of pocket?",
					a: "<p>Self-pay rates vary by clinician. You have the right to receive a Good Faith Estimate of the expected cost of your care before your first session.</p>",
					tags: ["cost", "fees", "self-pay", "good faith estimate"],
				},
				{
					id: "cancellation",
					q: "What is your cancellation policy?",
					a: "<p>Please give at least 24 hours' notice if you need to cancel or reschedule. Late cancellations may be charged the full session fee.</p>",
					tags: ["cancel", "reschedule", "policy"],
				},
			],
		},
		{
			id: "sessions",
			title: "Sessions",
			items: [
				{
					id: "virtual",
					q: "Do you offer virtual sessions?",
					a: "<p>Yes. Most of our clinicians offer secure video sessions to clients anywhere in the state.</p>",
					tags: ["virtual", "online", "telehealth", "video"],
				},
				{
					id: "confidentiality",
					q: "Is what I share confidential?",
					a: "<p>Yes, with a few legal exceptions — for example, if there is a risk of serious harm to you or someone else. Your therapist will review confidentiality with you in your first session.</p>",
					tags: ["privacy", "confidential", "hipaa"],
				},
				{
					id: "crisis",
					q: "What if I am in crisis?",
					a: "<p>We are not a crisis service. If you are in immediate danger, call 911. For urgent emotional support, call or text 988 to reach the Suicide and Crisis Lifeline, available 24/7.</p>",
					tags: ["crisis", "emergency", "988", "urgent"],
				},
			],
		},
	],
};

export default function FAQPage() {
	return (
		<main id="main-content" className="faq__page">
			<h1 className="sr-only">Frequently Asked Questions</h1>
			<FAQ {...faqConfig} />
		</main>
	);
}
