// components/sections/bookingCTA/BookingCTA.js
import Button from "../../ui/Button";
import FadeUp from "../../ui/fadeUp/FadeUp";
import StaggerGrid from "../../ui/staggerGrid/StaggerGrid";
import "./bookingcta.scss";

export default function BookingCTA({
	heading,
	subheading,
	steps,
	cardLabel,
	cta,
	note,
}) {
	return (
		<section className="block booking-cta" aria-labelledby="booking-heading">
			<div className="block__content container">
				<div className="booking-cta__layout">
					{/* Left: heading, subheading, steps */}
					<FadeUp as="div" className="booking-cta__intro" delay={0}>
						<h2 id="booking-heading">{heading}</h2>
						<p className="booking-cta__sub">{subheading}</p>

						{steps?.length > 0 && (
							<StaggerGrid
								as="ol"
								itemAs="li"
								className="booking-cta__steps"
								role="list"
								baseDelay={150}
								stagger={100}
							>
								{steps.map((step) => (
									<div key={step.number} className="booking-cta__step">
										<span
											className="booking-cta__step-number"
											aria-hidden="true"
										>
											{step.number}
										</span>
										<span className="booking-cta__step-text">{step.text}</span>
									</div>
								))}
							</StaggerGrid>
						)}
					</FadeUp>

					{/* Right: CTA card */}
					<FadeUp as="div" className="booking-cta__card" delay={100}>
						<div className="booking-cta__card-inner">
							<p className="booking-cta__card-label">{cardLabel}</p>
							<Button
								text={cta.text}
								href={cta.href}
								variant={cta.variant ?? "primary"}
								external={cta.external ?? true}
								trackEvent={cta.trackEvent}
							/>
							{note && <p className="booking-cta__note">{note}</p>}
						</div>
					</FadeUp>
				</div>
			</div>
		</section>
	);
}
