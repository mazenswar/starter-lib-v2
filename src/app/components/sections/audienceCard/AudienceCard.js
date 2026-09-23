// components/sections/audienceCard/AudienceCard.js
import Button from "../../ui/Button";
import FadeUp from "../../ui/fadeUp/FadeUp";
import "./AudienceCard.scss";

function IconCheck() {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2.2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			focusable="false"
		>
			<path d="M4 12l6 6L20 6" />
		</svg>
	);
}

// Audience — checklist inside a single card that fades in as a unit
export default function AudienceCard({ id = "audience", heading, body, items, cta }) {
	return (
		<section
			className="block audience audience--card"
			aria-labelledby={`${id}-heading`}
			id={id}
		>
			<div className="block__content container">
				<div className="audience__card-wrap">
					<FadeUp as="h2" id={`${id}-heading`} delay={0}>
						{heading}
					</FadeUp>
					{body && (
						<FadeUp as="p" className="audience__body" delay={100}>
							{body}
						</FadeUp>
					)}
					<FadeUp as="div" className="audience__card" delay={200}>
						<ul className="audience__list" role="list">
							{items.map((item) => (
								<li key={item.id} className="audience__item">
									<span className="audience__check" aria-hidden="true">
										<IconCheck />
									</span>
									<span>{item.text}</span>
								</li>
							))}
						</ul>
					</FadeUp>
					{cta && (
						<FadeUp as="div" className="audience__cta" delay={300}>
							<Button
								text={cta.text}
								href={cta.href}
								variant={cta.variant ?? "primary"}
								external={cta.external ?? false}
							/>
						</FadeUp>
					)}
				</div>
			</div>
		</section>
	);
}
