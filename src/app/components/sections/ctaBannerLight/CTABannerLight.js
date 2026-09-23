// components/sections/ctaBannerLight/CTABannerLight.js
import Button from "../../ui/Button";
import FadeUp from "../../ui/fadeUp/FadeUp";
import "./CTABannerLight.scss";

// Full-width call to action — light background
export default function CTABannerLight({
	heading,
	subheading,
	cta,
	secondaryCta,
	classNames = "",
}) {
	return (
		<section
			className={`block cta-banner cta-banner--light ${classNames}`.trim()}
			aria-labelledby="cta-banner-heading"
		>
			<div className="block__content container">
				<div className="cta-banner__inner">
					<FadeUp as="div" className="cta-banner__copy" delay={0}>
						<h2 id="cta-banner-heading">{heading}</h2>
						{subheading && <p className="cta-banner__sub">{subheading}</p>}
					</FadeUp>
					<FadeUp as="div" className="cta-banner__actions" delay={150}>
						<Button
							text={cta.text}
							href={cta.href}
							variant={cta.variant ?? "primary"}
							external={cta.external ?? false}
							trackEvent={cta.trackEvent}
						/>
						{secondaryCta && (
							<Button
								text={secondaryCta.text}
								href={secondaryCta.href}
								variant={secondaryCta.variant ?? "ghost"}
								external={secondaryCta.external ?? false}
							/>
						)}
					</FadeUp>
				</div>
			</div>
		</section>
	);
}
