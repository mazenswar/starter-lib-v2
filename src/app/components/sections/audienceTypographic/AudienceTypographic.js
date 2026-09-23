// components/sections/audienceTypographic/AudienceTypographic.js
import Button from "../../ui/Button";
import FadeUp from "../../ui/fadeUp/FadeUp";
import StaggerGrid from "../../ui/staggerGrid/StaggerGrid";
import "./AudienceTypographic.scss";

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

// Audience — large heading and ruled checklist that sequence top to bottom
export default function AudienceTypographic({ id = "audience", heading, body, items, cta }) {
	return (
		<section
			className="block audience audience--typographic"
			aria-labelledby={`${id}-heading`}
			id={id}
		>
			<div className="block__content container">
				<div className="audience__typographic">
					<FadeUp as="h2" id={`${id}-heading`} delay={0}>
						{heading}
					</FadeUp>
					{body && (
						<FadeUp as="p" className="audience__body" delay={100}>
							{body}
						</FadeUp>
					)}
					<StaggerGrid
						as="ul"
						itemAs="li"
						className="audience__list"
						role="list"
						baseDelay={200}
						stagger={80}
					>
						{items.map((item) => (
							<div key={item.id} className="audience__item">
								<span className="audience__check" aria-hidden="true">
									<IconCheck />
								</span>
								<span>{item.text}</span>
							</div>
						))}
					</StaggerGrid>
					{cta && (
						<FadeUp
							as="div"
							className="audience__cta"
							delay={200 + items.length * 80}
						>
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
