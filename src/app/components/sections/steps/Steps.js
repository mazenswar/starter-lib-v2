// components/sections/steps/Steps.js
import Button from "../../ui/Button";
import FadeUp from "../../ui/fadeUp/FadeUp";
import StaggerGrid from "../../ui/staggerGrid/StaggerGrid";
import "./steps.scss";

export default function Steps({ heading, subheading, steps, cta, classNames = "" }) {
	return (
		<section
			className={`block steps ${classNames}`.trim()}
			aria-labelledby="steps-heading"
		>
			<div className="block__content container">
				<FadeUp as="div" className="steps__header">
					<h2 id="steps-heading">{heading}</h2>
					{subheading && <p className="steps__sub">{subheading}</p>}
				</FadeUp>

				<StaggerGrid
					as="ol"
					itemAs="li"
					className="steps__list"
					role="list"
					stagger={120}
				>
					{steps.map((step, index) => (
						<div key={step.id} className="steps__item">
							<div className="steps__number" aria-hidden="true">
								{index + 1}
							</div>
							<div className="steps__content">
								<h3 className="steps__title">{step.title}</h3>
								<p className="steps__description">{step.description}</p>
							</div>
						</div>
					))}
				</StaggerGrid>

				{/* Outside the ol so the list only contains steps */}
				{cta && (
					<FadeUp
						as="div"
						className="steps__footer"
						delay={steps.length * 120}
					>
						<Button
							className="steps__cta"
							text={cta.text}
							href={cta.href}
							variant={cta.variant ?? "secondary"}
							external={cta.external ?? false}
						/>
					</FadeUp>
				)}
			</div>
		</section>
	);
}
