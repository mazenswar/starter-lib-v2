import site from "../../../../config/site";
import { notFound } from "next/navigation";
import { generateMeta } from "../../../../config/metadata";
import therapists from "../../../../config/therapists";
import TherapistProfile from "../../components/sections/therapistProfile/TherapistProfile";
import CTABannerBrand from "../../components/sections/ctaBannerBrand/CTABannerBrand";

// Only the slugs in config/therapists.js exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
	return therapists.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const therapist = therapists.find((t) => t.slug === slug);
	if (!therapist) return {};

	return generateMeta({
		title: `${therapist.name}, ${therapist.credentials}`,
		description: `${therapist.name} is a ${therapist.title} specializing in ${therapist.specialties
			.slice(0, 3)
			.join(", ")
			.toLowerCase()}.`,
		path: `/therapists/${therapist.slug}`,
	});
}

const profileLabels = {
	accepting: "Accepting new clients",
	waitlist: "Currently waitlisted",
	about: "About",
	specialties: "Specialties",
	approaches: "Approaches",
	populations: "Who I work with",
	details: "Session details",
	sessionFormats: "Sessions",
	location: "Location",
	languages: "Languages",
	insurance: "Insurance",
};

const backLink = { text: "All therapists", href: "/therapists" };

const ctaBannerConfig = {
	heading: "Not sure who is the right fit?",
	subheading:
		"Our intake coordinator can talk through what you are looking for and recommend a therapist.",
	cta: {
		text: "Request a consultation",
		href: site.clientPortal,
		variant: "primary",
		external: true,
	},
	secondaryCta: { text: "Meet the team", href: "/therapists", variant: "secondary" },
};

export default async function TherapistPage({ params }) {
	const { slug } = await params;
	const therapist = therapists.find((t) => t.slug === slug);
	if (!therapist) notFound();

	const cta = {
		text: therapist.acceptingClients
			? `Request a consultation with ${therapist.firstName}`
			: `Join ${therapist.firstName}'s waitlist`,
		href: site.clientPortal,
		variant: "primary",
		external: true,
	};

	return (
		<main id="main-content" className="therapist__page">
			<TherapistProfile
				name={therapist.name}
				credentials={therapist.credentials}
				pronouns={therapist.pronouns}
				title={therapist.title}
				photo={therapist.photo}
				acceptingClients={therapist.acceptingClients}
				bio={therapist.bio}
				specialties={therapist.specialties}
				approaches={therapist.approaches}
				populations={therapist.populations}
				languages={therapist.languages}
				sessionFormats={therapist.sessionFormats}
				location={therapist.location}
				insurance={therapist.insurance}
				labels={profileLabels}
				backLink={backLink}
				cta={cta}
			/>
			<CTABannerBrand {...ctaBannerConfig} />
		</main>
	);
}
