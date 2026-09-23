// app/layout.js
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { generateMeta, generateJsonLd } from "../../config/metadata";
import {
	warmBody,
	warmHeading,
	cleanBody,
	cleanHeading,
	boldBody,
	boldHeading,
	earthBody,
	earthHeading,
	minimalBody,
	minimalHeading,
} from "../../config/fonts";
import site from "../../config/site";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import "./styles/index.scss";

/* =========================
   THEME
   The active color palette. Applied below as data-theme on the html
   element, where it matches a [data-theme="..."] block in styles/themes/.

   To add a new theme:
   1. Create a new SCSS file in styles/themes/ — e.g. styles/themes/ocean.scss
      containing a [data-theme="ocean"] { ... } block that sets the color
      tokens (copy an existing theme file as a starting point).
   2. Import it in styles/index.scss:  @use "./themes/ocean";
   3. Change the theme constant below to the new name:  const theme = "ocean";
   ========================= */
const theme = "earth";

// Root metadata — applies to all pages unless overridden
export const metadata = generateMeta({
	path: "/",
});

// Every font is loaded at build time; data-font picks the active pairing
const fontClasses = [
	warmBody.variable,
	warmHeading.variable,
	cleanBody.variable,
	cleanHeading.variable,
	boldBody.variable,
	boldHeading.variable,
	earthBody.variable,
	earthHeading.variable,
	minimalBody.variable,
	minimalHeading.variable,
].join(" ");

/* =========================
   NAV AND FOOTER CONTENT
   ========================= */

const navConfig = {
	logo: site.logo,
	links: [
		{ label: "Therapists", href: "/therapists" },
		{ label: "Services", href: "/services" },
		{ label: "About", href: "/about" },
		{ label: "FAQ", href: "/faq" },
		{ label: "Contact", href: "/contact" },
	],
	cta: {
		text: "Request a consultation",
		href: site.clientPortal,
		variant: "primary",
		external: true,
	},
	homeHref: "/",
};

const footerConfig = {
	labels: {
		contact: "Contact",
		navigate: "Navigate",
		badges: "Find us on",
		social: "Follow",
	},
	contact: {
		phone: "(555) 123-4567",
		email: site.email,
		address: "123 Main Street, Suite 200, Anytown, ST 00000",
		virtual: "Virtual sessions available statewide",
	},
	navLinks: [
		{ label: "Home", href: "/" },
		{ label: "Therapists", href: "/therapists" },
		{ label: "Services", href: "/services" },
		{ label: "About", href: "/about" },
		{ label: "FAQ", href: "/faq" },
		{ label: "Contact", href: "/contact" },
	],
	badges: [
		{
			label: "Psychology Today",
			href: "https://www.psychologytoday.com",
			src: "/badges/psychology-today.png",
		},
	],
	social: [
		{
			label: "Instagram",
			href: "https://instagram.com/junipergrovecounseling",
			icon: "instagram",
		},
		{
			label: "LinkedIn",
			href: "https://linkedin.com/company/junipergrovecounseling",
			icon: "linkedin",
		},
		{
			label: "Facebook",
			href: "https://facebook.com/junipergrovecounseling",
			icon: "facebook",
		},
	],
	legalLinks: [
		{ label: "Privacy Policy", href: "/privacy-policy" },
		{
			label: "Notice of Privacy Practices",
			href: "/notice-of-privacy-practices",
		},
		{ label: "Good Faith Estimate", href: "/good-faith-estimate" },
	],
	seoLine:
		"We are not a crisis service. If you are in crisis, call or text 988 to reach the Suicide and Crisis Lifeline, or call 911.",
	copyright: {
		name: site.name,
		notice: "All rights reserved.",
	},
};

/* =========================
   HTML DATA ATTRIBUTES
   The html element carries five data attributes that drive the design system:

   data-theme   — Color palette. Set from the theme constant above; matches a
                  [data-theme] block in styles/themes/.
   data-font    — Font pairing. Maps --font-heading and --font-body to loaded
                  fonts in styles/design/fonts.scss.
                  Options: editorial | friendly | clinical | expressive | modern | grounded
   data-style   — Name of the site style. It labels which hero variant the site
                  uses (the hero itself is the component imported in app/page.js).
                  No CSS reads it.
                  Options: split-contained | split-rectangular | full-bleed |
                           asymmetric | centered | background-hero
   data-shape   — Border radius scale in styles/design/shape.scss.
                  Options: sharp | soft | round
   data-spacing — Vertical rhythm (the larger spacing tokens) in
                  styles/design/spacing.scss.
                  Options: compact | balanced | airy
   ========================= */

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			data-theme={theme}
			data-font="editorial"
			data-style="background-hero"
			data-shape="round"
			data-spacing="airy"
			className={fontClasses}
		>
			<body>
				{/* JSON-LD structured data */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: generateJsonLd() }}
				/>

				{/* Skip navigation — first focusable element, targets main#main-content on every page */}
				<a href="#main-content" className="skip-nav">
					Skip to main content
				</a>

				<Nav {...navConfig} />

				{children}

				<Footer {...footerConfig} />
			</body>
			{/* Analytics — only renders if IDs are set */}
			{site.analytics?.ga4 && <GoogleAnalytics gaId={site.analytics.ga4} />}
			{site.analytics?.gtm && <GoogleTagManager gtmId={site.analytics.gtm} />}
		</html>
	);
}
