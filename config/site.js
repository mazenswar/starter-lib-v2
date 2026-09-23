// config/site.js

const site = {
	// =========================
	// EDIT THIS PER PROJECT
	// =========================
	name: "Juniper Grove Counseling",
	tagline: "Therapy with a team that understands you",
	description:
		"Juniper Grove Counseling is a group practice of licensed therapists offering individual, couples, family, and teen therapy in person and online.",
	url: "https://www.junipergrovecounseling.com",
	locale: "en_US",
	// Analytics
	analytics: {
		ga4: null, // "G-XXXXXXXXXX" or null to disable
		gtm: null, // "GTM-XXXXXXX" or null
	},
	// Contact
	email: "hello@junipergrovecounseling.com",
	phone: "+15551234567",
	address: {
		street: "123 Main Street, Suite 200",
		city: "Anytown",
		state: "ST",
		zip: "00000",
		country: "US",
	},

	// Secure client portal (SimplePractice or other EHR).
	// Every "Request a consultation" button links here.
	clientPortal: "https://junipergrove.clientsecure.me",

	// Branding
	logo: {
		src: "/logo/juniper-grove.svg", // place in /public
		width: 240,
		height: 48,
		alt: "Juniper Grove Counseling",
	},

	// OG image defaults
	og: {
		width: 1200,
		height: 630,
		// Brand colors used in dynamic OG image
		background: "#2b2118", // deep cocoa
		accent: "#f4a261", // light terracotta — readable on the dark background
		text: "#ffffff",
	},

	// Social
	social: {
		twitter: null, // "@handle"
		instagram: null, // "handle"
		linkedin: null, // "handle"
	},

	// Business type for JSON-LD
	// See: https://schema.org/LocalBusiness subtypes
	// Common: "LocalBusiness" | "MedicalBusiness" | "ProfessionalService"
	businessType: "MedicalBusiness",

	// Operating hours for JSON-LD (optional)
	// hours: [
	// 	{ days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], open: "09:00", close: "17:00" },
	// ],
	hours: null,

	// Price range for JSON-LD (optional)
	// "$" | "$$" | "$$$" | "$$$$"
	priceRange: "$$",
};

export default site;
