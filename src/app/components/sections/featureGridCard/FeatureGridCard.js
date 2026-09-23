// components/sections/featureGridCard/FeatureGridCard.js
import Button from "../../ui/Button";
import FadeUp from "../../ui/fadeUp/FadeUp";
import StaggerGrid from "../../ui/staggerGrid/StaggerGrid";
import FeatureIcon from "../../illustrations/FeatureIcon";
import "./FeatureGridCard.scss";

// Feature grid — four-column bordered cards
export default function FeatureGridCard({
	id = "feature-grid",
	heading,
	subheading,
	features,
	cta,
	classNames = "",
}) {
	return (
		<section
			className={`block feature-grid feature-grid--card ${classNames}`.trim()}
			aria-labelledby={`${id}-heading`}
			id={id}
		>
			<div className="block__content container">
				<FadeUp as="div" className="feature-grid__header">
					<h2 id={`${id}-heading`}>{heading}</h2>
					{subheading && <p className="feature-grid__sub">{subheading}</p>}
				</FadeUp>

				<StaggerGrid
					as="ul"
					itemAs="li"
					className="feature-grid__list"
					role="list"
					stagger={100}
				>
					{features.map((feature) => (
						<div key={feature.id} className="feature-grid__item">
							<div className="feature-grid__content">
								{feature.icon && (
									<div className="feature-grid__icon" aria-hidden="true">
										<FeatureIcon name={feature.icon} />
									</div>
								)}
								<h3 className="feature-grid__title">{feature.title}</h3>
								<p className="feature-grid__description">
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</StaggerGrid>

				{cta && (
					<FadeUp
						as="div"
						className="feature-grid__footer"
						delay={features.length * 100}
					>
						<Button
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
