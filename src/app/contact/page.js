import { generateMeta } from "../../../config/metadata";
import ContactForm from "../components/sections/contactForm/ContactForm";

export const metadata = generateMeta({
	title: "Contact",
	description:
		"Questions about our practice? Send us a general message. To request a consultation, use our secure client portal.",
	path: "/contact",
});

// General questions only. Consultation requests go through the secure
// client portal (site.clientPortal), which is HIPAA compliant — this form is not.
const formConfig = {
	heading: "Contact us",
	subheading:
		"Have a general question about our practice, fees, or availability? Send us a message and we will reply within one business day. To request a consultation or share anything about your health, please use the Request a consultation button to reach our secure client portal. If you are in crisis, call or text 988 or call 911.",
	privacyNotice: {
		title: "This form is not secure",
		text: "Messages sent through this form are delivered by regular email and are not protected under HIPAA. Do not include protected health information (PHI) — such as symptoms, diagnoses, medications, treatment history, or insurance details.",
	},
	acknowledgmentLabel:
		"I understand this form is not secure, and I confirm I am not including any protected health information (PHI) in my message.",
	fields: {
		name: { label: "Your name", placeholder: "Jane Smith" },
		email: { label: "Email address", placeholder: "jane@example.com" },
		message: {
			label: "Message",
			placeholder:
				"General questions only — for example, office hours, fees, or whether a therapist is taking new clients.",
		},
	},
	errorMessages: {
		name: "Please enter your name.",
		email: "Please enter your email address.",
		emailInvalid: "Please enter a valid email address.",
		message: "Please enter a message.",
		acknowledgment:
			"Please confirm you understand this form is not secure and you are not sharing PHI.",
	},
	submitText: "Send message",
	loadingText: "Sending...",
	requiredNote: "* Required fields",
	successHeading: "Message received",
	successMessage:
		"Thank you for reaching out. We will reply within one business day.",
	resetText: "Send another message",
};

export default function ContactPage() {
	return (
		<main id="main-content" className="contact__page">
			<h1 className="sr-only">Contact</h1>
			<ContactForm {...formConfig} />
		</main>
	);
}
