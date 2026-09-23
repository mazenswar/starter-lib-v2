// components/sections/therapistGrid/TherapistGrid.js
"use client";
import { useId, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../ui/Button";
import FadeUp from "../../ui/fadeUp/FadeUp";
import StaggerGrid from "../../ui/staggerGrid/StaggerGrid";
import "./TherapistGrid.scss";

function getInitials(name) {
	const parts = name.trim().split(/\s+/);
	return `${parts[0][0]}${parts.length > 1 ? parts[parts.length - 1][0] : ""}`;
}

// Clinician cards with an optional filter by specialty.
// Each card links to /therapists/[slug].
export default function TherapistGrid({
	id = "therapists",
	eyebrow,
	heading,
	subheading,
	therapists,
	filterable = false,
	filterLabel,
	allLabel,
	resultsTemplate, // e.g. "Showing {shown} of {total} therapists"
	acceptingLabel,
	waitlistLabel,
	specialtiesLabel,
	profileLinkText,
	cta,
}) {
	const [specialty, setSpecialty] = useState("all");
	const selectId = useId();

	const specialties = useMemo(
		() =>
			[...new Set(therapists.flatMap((t) => t.specialties))].sort((a, b) =>
				a.localeCompare(b),
			),
		[therapists],
	);

	const shown =
		specialty === "all"
			? therapists
			: therapists.filter((t) => t.specialties.includes(specialty));

	return (
		<section
			className="block therapist-grid"
			aria-labelledby={`${id}-heading`}
			id={id}
		>
			<div className="block__content container">
				<FadeUp as="div" className="therapist-grid__header">
					{eyebrow && <p className="label therapist-grid__eyebrow">{eyebrow}</p>}
					<h2 id={`${id}-heading`}>{heading}</h2>
					{subheading && <p className="therapist-grid__sub">{subheading}</p>}
				</FadeUp>

				{filterable && (
					<div className="therapist-grid__filter">
						<label htmlFor={selectId} className="therapist-grid__filter-label">
							{filterLabel}
						</label>
						<select
							id={selectId}
							className="therapist-grid__select"
							value={specialty}
							onChange={(e) => setSpecialty(e.target.value)}
						>
							<option value="all">{allLabel}</option>
							{specialties.map((s) => (
								<option key={s} value={s}>
									{s}
								</option>
							))}
						</select>
						<p className="therapist-grid__results" role="status">
							{resultsTemplate
								.replace("{shown}", shown.length)
								.replace("{total}", therapists.length)}
						</p>
					</div>
				)}

				<StaggerGrid
					as="ul"
					itemAs="li"
					className="therapist-grid__list"
					role="list"
					stagger={80}
				>
					{shown.map((t) => (
						<article
							key={t.slug}
							className="therapist-card"
							aria-labelledby={`${id}-${t.slug}-name`}
						>
							<div className="therapist-card__media">
								{t.photo ? (
									<Image
										src={t.photo.src}
										alt={t.photo.alt}
										width={t.photo.width}
										height={t.photo.height}
										sizes="(max-width: 480px) 90vw, (max-width: 1024px) 45vw, 360px"
									/>
								) : (
									<span className="therapist-card__initials" aria-hidden="true">
										{getInitials(t.name)}
									</span>
								)}
							</div>

							<div className="therapist-card__body">
								<h3 id={`${id}-${t.slug}-name`} className="therapist-card__name">
									{/* The link covers the whole card via ::after */}
									<Link href={`/therapists/${t.slug}`} className="therapist-card__link">
										{t.name}, {t.credentials}
									</Link>
								</h3>
								<p className="therapist-card__meta">
									{t.pronouns} · {t.title}
								</p>
								<p
									className={`therapist-card__status ${t.acceptingClients ? "is-accepting" : ""}`}
								>
									<span className="therapist-card__dot" aria-hidden="true" />
									{t.acceptingClients ? acceptingLabel : waitlistLabel}
								</p>
								<ul
									className="therapist-card__tags"
									role="list"
									aria-label={specialtiesLabel}
								>
									{t.specialties.slice(0, 3).map((s) => (
										<li key={s} className="therapist-card__tag">
											{s}
										</li>
									))}
								</ul>
								<span className="therapist-card__cta" aria-hidden="true">
									{profileLinkText} →
								</span>
							</div>
						</article>
					))}
				</StaggerGrid>

				{cta && (
					<div className="therapist-grid__footer">
						<Button
							text={cta.text}
							href={cta.href}
							variant={cta.variant ?? "secondary"}
							external={cta.external ?? false}
						/>
					</div>
				)}
			</div>
		</section>
	);
}
