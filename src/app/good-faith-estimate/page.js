import site from "../../../config/site";
import { generateMeta } from "../../../config/metadata";
import PageHeroLeft from "../components/sections/pageHeroLeft/PageHeroLeft";
import LegalDocument from "../components/sections/legalDocument/LegalDocument";

// TEMPLATE LANGUAGE — the "Your right to a Good Faith Estimate" section
// follows the CMS standard notice under the No Surprises Act. Confirm the
// current wording at cms.gov/nosurprises before publishing.

export const metadata = generateMeta({
	title: "Good Faith Estimate",
	description:
		"Your right to a Good Faith Estimate of the cost of care if you do not have insurance or are not using insurance.",
	path: "/good-faith-estimate",
});

const heroConfig = {
	eyebrow: "No Surprises Act",
	heading: "Good Faith Estimate",
	subheading:
		"If you are paying for therapy yourself, you have the right to know what it is expected to cost before you begin.",
};

const documentConfig = {
	updatedLabel: "Last updated:",
	updated: "January 1, 2026",
	sections: [
		{
			id: "your-right",
			heading: "Your right to a Good Faith Estimate",
			paragraphs: [
				"You have the right to receive a “Good Faith Estimate” explaining how much your medical care will cost.",
				"Under the law, health care providers need to give patients who don't have insurance or who are not using insurance an estimate of the bill for medical items and services.",
			],
			list: [
				"You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency items or services. This includes related costs like medical tests, prescription drugs, equipment, and hospital fees.",
				"Make sure your health care provider gives you a Good Faith Estimate in writing at least 1 business day before your medical service or item. You can also ask your health care provider, and any other provider you choose, for a Good Faith Estimate before you schedule an item or service.",
				"If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill.",
				"Make sure to save a copy or picture of your Good Faith Estimate.",
			],
		},
		{
			id: "in-our-practice",
			heading: "What this means for therapy with us",
			paragraphs: [
				`If you are self-pay or choose not to use insurance, ${site.name} will give you a written Good Faith Estimate before your first session. It will list your therapist's session fee, the expected number and frequency of sessions, and the estimated total cost.`,
				"Because therapy is ongoing and every client's needs are different, the number of sessions is an estimate. Your therapist will talk with you about your treatment plan and will provide an updated estimate if your care changes significantly. You may request a new estimate at any time.",
			],
		},
		{
			id: "questions",
			heading: "Questions",
			paragraphs: [
				`For questions about your estimate, contact us at ${site.email}.`,
				"For questions or more information about your right to a Good Faith Estimate, visit the CMS website or call 1-800-985-3059.",
			],
			links: [
				{
					text: "cms.gov/nosurprises",
					href: "https://www.cms.gov/nosurprises",
				},
			],
		},
	],
};

export default function GoodFaithEstimatePage() {
	return (
		<main id="main-content" className="legal__page">
			<PageHeroLeft {...heroConfig} />
			<LegalDocument {...documentConfig} />
		</main>
	);
}
