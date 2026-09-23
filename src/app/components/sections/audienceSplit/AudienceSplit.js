// components/sections/audienceSplit/AudienceSplit.js
import Button from "../../ui/Button";
import FadeUp from "../../ui/fadeUp/FadeUp";
import StaggerGrid from "../../ui/staggerGrid/StaggerGrid";
import "./AudienceSplit.scss";

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

// Audience — heading and body left, checklist card right. Both columns animate in parallel.
export default function AudienceSplit({ id = "audience", heading, body, items, cta }) {
	return (
		<section
			className="block audience audience--split"
			aria-labelledby={`${id}-heading`}
			id={id}
		>
			<div className="block__content container">
				<div className="audience__split">
					<FadeUp as="div" className="audience__left" delay={0}>
						<h2 id={`${id}-heading`}>{heading}</h2>
						{body && <p className="audience__body">{body}</p>}
						{cta && (
							<div className="audience__cta">
								<Button
									text={cta.text}
									href={cta.href}
									variant={cta.variant ?? "primary"}
									external={cta.external ?? false}
								/>
							</div>
						)}
					</FadeUp>
					<FadeUp as="div" className="audience__right" delay={50}>
						<StaggerGrid
							as="ul"
							itemAs="li"
							className="audience__list"
							role="list"
							baseDelay={150}
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
					</FadeUp>
				</div>
			</div>
		</section>
	);
}
