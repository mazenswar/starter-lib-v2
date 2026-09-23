// components/sections/therapistProfile/TherapistProfile.js
import Image from "next/image";
import Link from "next/link";
import Button from "../../ui/Button";
import FadeUp from "../../ui/fadeUp/FadeUp";
import "./TherapistProfile.scss";

function getInitials(name) {
	const parts = name.trim().split(/\s+/);
	return `${parts[0][0]}${parts.length > 1 ? parts[parts.length - 1][0] : ""}`;
}

// Full profile for one clinician: header with photo and booking CTA,
// bio and clinical focus in the main column, practical details in the sidebar.
export default function TherapistProfile({
	name,
	credentials,
	pronouns,
	title,
	photo,
	acceptingClients,
	bio,
	specialties,
	approaches,
	populations,
	languages,
	sessionFormats,
	location,
	insurance,
	labels,
	backLink,
	cta,
}) {
	return (
		<article className="block therapist-profile" aria-labelledby="therapist-name">
			<div className="block__content container">
				<Link href={backLink.href} className="therapist-profile__back">
					<span aria-hidden="true">←</span> {backLink.text}
				</Link>

				{/* Header
				   -------------------------------------------- */}
				<FadeUp as="header" className="therapist-profile__header">
					<div className="therapist-profile__photo">
						{photo ? (
							<Image
								src={photo.src}
								alt={photo.alt}
								width={photo.width}
								height={photo.height}
								priority
								sizes="(max-width: 768px) 60vw, 280px"
							/>
						) : (
							<span className="therapist-profile__initials" aria-hidden="true">
								{getInitials(name)}
							</span>
						)}
					</div>

					<div className="therapist-profile__intro">
						<h1 id="therapist-name" className="therapist-profile__name">
							{name}, {credentials}
						</h1>
						<p className="therapist-profile__meta">
							{pronouns} · {title}
						</p>
						<p
							className={`therapist-profile__status ${acceptingClients ? "is-accepting" : ""}`}
						>
							<span className="therapist-profile__dot" aria-hidden="true" />
							{acceptingClients ? labels.accepting : labels.waitlist}
						</p>
						<div className="therapist-profile__actions">
							<Button
								text={cta.text}
								href={cta.href}
								variant={cta.variant ?? "primary"}
								external={cta.external ?? false}
							/>
						</div>
					</div>
				</FadeUp>

				<div className="therapist-profile__layout">
					{/* Main column
					   -------------------------------------------- */}
					<div className="therapist-profile__main">
						<section aria-labelledby="therapist-about">
							<h2 id="therapist-about">{labels.about}</h2>
							{bio.map((para, i) => (
								<p key={i}>{para}</p>
							))}
						</section>

						<section aria-labelledby="therapist-specialties">
							<h2 id="therapist-specialties">{labels.specialties}</h2>
							<ul className="therapist-profile__tags" role="list">
								{specialties.map((s) => (
									<li key={s} className="therapist-profile__tag">
										{s}
									</li>
								))}
							</ul>
						</section>

						<section aria-labelledby="therapist-approaches">
							<h2 id="therapist-approaches">{labels.approaches}</h2>
							<ul className="therapist-profile__list">
								{approaches.map((a) => (
									<li key={a}>{a}</li>
								))}
							</ul>
						</section>

						<section aria-labelledby="therapist-populations">
							<h2 id="therapist-populations">{labels.populations}</h2>
							<ul className="therapist-profile__list">
								{populations.map((p) => (
									<li key={p}>{p}</li>
								))}
							</ul>
						</section>
					</div>

					{/* Sidebar — practical details
					   -------------------------------------------- */}
					<aside
						className="therapist-profile__aside"
						aria-labelledby="therapist-details"
					>
						<h2 id="therapist-details" className="therapist-profile__aside-title">
							{labels.details}
						</h2>
						<dl className="therapist-profile__facts">
							<div>
								<dt>{labels.sessionFormats}</dt>
								<dd>{sessionFormats.join(", ")}</dd>
							</div>
							<div>
								<dt>{labels.location}</dt>
								<dd>{location}</dd>
							</div>
							<div>
								<dt>{labels.languages}</dt>
								<dd>{languages.join(", ")}</dd>
							</div>
							<div>
								<dt>{labels.insurance}</dt>
								<dd>{insurance.join(", ")}</dd>
							</div>
						</dl>
					</aside>
				</div>
			</div>
		</article>
	);
}
