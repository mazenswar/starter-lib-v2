import site from "../../../config/site";
import { generateMeta } from "../../../config/metadata";
import PageHeroLeft from "../components/sections/pageHeroLeft/PageHeroLeft";
import LegalDocument from "../components/sections/legalDocument/LegalDocument";

// TEMPLATE LANGUAGE — covers this website only. Clinical records are
// covered by the Notice of Privacy Practices. Have an attorney review it
// and update the list of service providers to match what the site uses.

export const metadata = generateMeta({
	title: "Privacy Policy",
	description: `How the ${site.name} website collects, uses, and protects information.`,
	path: "/privacy-policy",
});

const heroConfig = {
	eyebrow: "Website privacy",
	heading: "Privacy Policy",
	subheading:
		"This policy explains what information our website collects and how we use it. For how we protect your health information as a client, see our Notice of Privacy Practices.",
};

const documentConfig = {
	updatedLabel: "Last updated:",
	updated: "January 1, 2026",
	tocTitle: "In this policy",
	intro: [
		`This Privacy Policy applies to ${site.url.replace("https://", "")} (the “website”), operated by ${site.name} (“we,” “us”). It does not cover the secure client portal or the clinical services we provide, which are governed by our Notice of Privacy Practices and HIPAA.`,
	],
	sections: [
		{
			id: "information-we-collect",
			heading: "Information we collect",
			paragraphs: [
				"Information you give us: if you use our contact form, we collect your name, email address, and the message you send.",
				"Information collected automatically: like most websites, we collect limited technical information such as your browser type, device, pages visited, and approximate location, using cookies and analytics tools.",
			],
		},
		{
			id: "contact-form",
			heading: "Our contact form is not secure",
			paragraphs: [
				"Messages sent through our contact form are delivered by regular email and are not protected under HIPAA. Please do not include health information — such as symptoms, diagnoses, medications, or treatment history — in the contact form. To request a consultation or share health information, use our secure client portal.",
			],
		},
		{
			id: "how-we-use",
			heading: "How we use information",
			list: [
				"To respond to your questions",
				"To operate, maintain, and improve the website",
				"To understand how visitors use the website, in aggregate",
				"To protect the website against misuse and to comply with the law",
			],
			paragraphs: [
				"We do not sell or rent your personal information, and we do not use it for advertising.",
			],
		},
		{
			id: "sharing",
			heading: "Who we share information with",
			paragraphs: [
				"We share information only with service providers that help us run the website, and only as needed for them to do so. These include our website host, our email delivery provider for contact form messages, and our website analytics provider. We may also disclose information if required by law.",
			],
		},
		{
			id: "cookies",
			heading: "Cookies and analytics",
			paragraphs: [
				"We may use cookies and analytics tools, such as Google Analytics, to understand how the website is used. You can block or delete cookies in your browser settings, and you can opt out of Google Analytics with Google's browser add-on.",
			],
			links: [
				{
					text: "Google Analytics opt-out browser add-on",
					href: "https://tools.google.com/dlpage/gaoptout",
				},
			],
		},
		{
			id: "retention-and-security",
			heading: "Retention and security",
			paragraphs: [
				"We keep contact form messages only as long as needed to respond and for reasonable business records. We use reasonable safeguards to protect information, but no method of transmission over the internet is completely secure.",
			],
		},
		{
			id: "children",
			heading: "Children's privacy",
			paragraphs: [
				"The website is not directed to children under 13, and we do not knowingly collect personal information from them through the website. Parents or guardians seeking care for a minor should contact us by phone or through the client portal.",
			],
		},
		{
			id: "your-choices",
			heading: "Your choices",
			paragraphs: [
				"You can ask us to access, correct, or delete personal information you have sent through the website by contacting us. Depending on where you live, you may have additional rights under state law.",
			],
		},
		{
			id: "changes",
			heading: "Changes to this policy",
			paragraphs: [
				"We may update this policy from time to time. The “Last updated” date above shows when it was last changed.",
			],
		},
		{
			id: "contact-us",
			heading: "Contact us",
			paragraphs: [
				`Questions about this policy? Email ${site.email} or write to us at ${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}.`,
			],
		},
	],
};

export default function PrivacyPolicyPage() {
	return (
		<main id="main-content" className="legal__page">
			<PageHeroLeft {...heroConfig} />
			<LegalDocument {...documentConfig} />
		</main>
	);
}
