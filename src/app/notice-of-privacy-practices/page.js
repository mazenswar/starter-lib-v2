import site from "../../../config/site";
import { generateMeta } from "../../../config/metadata";
import PageHeroLeft from "../components/sections/pageHeroLeft/PageHeroLeft";
import LegalDocument from "../components/sections/legalDocument/LegalDocument";

// TEMPLATE LANGUAGE — follows the structure of the HHS model Notice of
// Privacy Practices. Have a healthcare attorney review and adapt it to
// your state's laws before publishing.

export const metadata = generateMeta({
	title: "Notice of Privacy Practices",
	description: `How ${site.name} may use and disclose your health information, and your rights under HIPAA.`,
	path: "/notice-of-privacy-practices",
});

const address = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;
const phone = "(555) 123-4567";

const heroConfig = {
	eyebrow: "HIPAA",
	heading: "Notice of Privacy Practices",
	subheading:
		"This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.",
};

const documentConfig = {
	updatedLabel: "Effective date:",
	updated: "January 1, 2026",
	tocTitle: "In this notice",
	intro: [
		`${site.name} is required by law to protect the privacy of your health information, to give you this notice of our legal duties and privacy practices, and to follow the terms of the notice currently in effect.`,
		"Este aviso está disponible en español. Pida una copia a nuestro personal.",
	],
	sections: [
		{
			id: "your-rights",
			heading: "Your rights",
			paragraphs: [
				"When it comes to your health information, you have certain rights. You can:",
			],
			list: [
				"Get an electronic or paper copy of your health record. We will usually provide it within 30 days and may charge a reasonable, cost-based fee.",
				"Ask us to correct health information you think is incorrect or incomplete. We may say no, but we will tell you why in writing within 60 days.",
				"Ask us to contact you in a specific way (for example, a cell phone instead of a home phone) or to send mail to a different address. We will say yes to all reasonable requests.",
				"Ask us not to use or share certain health information for treatment, payment, or our operations. If you pay for a service in full out of pocket, you can ask us not to share that information with your health insurer.",
				"Ask for a list of the times we have shared your health information in the six years before your request, who we shared it with, and why.",
				"Get a paper copy of this notice at any time, even if you agreed to receive it electronically.",
				"Choose someone, such as a legal guardian or someone with medical power of attorney, to act for you.",
				"File a complaint if you feel your rights have been violated (see “Questions and complaints” below).",
			],
		},
		{
			id: "your-choices",
			heading: "Your choices",
			paragraphs: [
				"For certain health information, you can tell us your choices about what we share. You have both the right and the choice to tell us whether to share information with your family, close friends, or others involved in your care. If you are not able to tell us your preference — for example, if you are unconscious — we may share your information if we believe it is in your best interest, or when needed to lessen a serious and imminent threat to health or safety.",
				"We will never share your information for marketing purposes or sell your information unless you give us written permission.",
			],
		},
		{
			id: "how-we-use",
			heading: "How we use and share your information",
			paragraphs: ["We typically use or share your health information to:"],
			list: [
				"Treat you — for example, coordinating with your physician or psychiatrist about your care.",
				"Run our practice — for example, scheduling, quality review, and training.",
				"Bill for your services — for example, sending information to your health insurance plan so it will pay for your care.",
			],
		},
		{
			id: "other-uses",
			heading: "Other ways we may share your information",
			paragraphs: [
				"We are allowed or required to share your information in other ways — usually in ways that contribute to the public good. We have to meet many conditions in the law before we can share your information for these purposes:",
			],
			list: [
				"Preventing or reducing a serious threat to anyone's health or safety.",
				"Reporting suspected abuse or neglect of a child, elder, or dependent adult, as required by state law.",
				"Complying with the law, including if the Department of Health and Human Services wants to confirm we are complying with federal privacy law.",
				"Responding to a court or administrative order, or a lawfully issued subpoena.",
				"Addressing workers' compensation claims, health oversight activities, and special government functions, as permitted by law.",
			],
		},
		{
			id: "psychotherapy-notes",
			heading: "Psychotherapy notes",
			paragraphs: [
				"Psychotherapy notes are notes your therapist may keep separately from the rest of your record to document or analyze the contents of a session. They receive extra protection under federal law. We will not share psychotherapy notes without your written authorization, except in the limited situations the law allows.",
			],
		},
		{
			id: "our-responsibilities",
			heading: "Our responsibilities",
			list: [
				"We are required by law to maintain the privacy and security of your protected health information.",
				"We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information.",
				"We must follow the duties and privacy practices described in this notice and give you a copy of it.",
				"We will not use or share your information other than as described here unless you tell us we can in writing. If you tell us we can, you may change your mind at any time by letting us know in writing.",
			],
		},
		{
			id: "changes",
			heading: "Changes to this notice",
			paragraphs: [
				"We can change the terms of this notice, and the changes will apply to all information we have about you. The new notice will be available on request, in our office, and on our website.",
			],
		},
		{
			id: "questions-and-complaints",
			heading: "Questions and complaints",
			paragraphs: [
				`To exercise any of these rights or ask a question, contact our Privacy Officer at ${phone}, ${site.email}, or ${address}.`,
				"You can also file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights. We will not retaliate against you for filing a complaint.",
			],
			links: [
				{
					text: "File a complaint with the HHS Office for Civil Rights",
					href: "https://www.hhs.gov/ocr/complaints/index.html",
				},
			],
		},
	],
};

export default function NoticeOfPrivacyPracticesPage() {
	return (
		<main id="main-content" className="legal__page">
			<PageHeroLeft {...heroConfig} />
			<LegalDocument {...documentConfig} />
		</main>
	);
}
