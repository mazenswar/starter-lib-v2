// components/sections/heroBackground/HeroBackground.js
import Image from "next/image";
import Button from "../../ui/Button";
import FadeUp from "../../ui/fadeUp/FadeUp";
import "./HeroBackground.scss";

// Background — full-width image with a text overlay.
// The section is labeled by the h1 via aria-labelledby. Pass alt: ""
// when the image is decorative.

export default function HeroBackground({
	eyebrow,
	heading,
	subheading,
	cta,
	ctaSecondary,
	image,
}) {
	return (
		<section className="hero hero--background" aria-labelledby="hero-heading">
			{image && (
				<div className="hero__bg-image">
					<Image src={image.src} alt={image.alt} fill priority sizes="100vw" />
				</div>
			)}
			<div className="hero__bg-overlay" aria-hidden="true" />
			<div className="container hero__bg-content">
				<div className="hero__copy hero__copy--light">
					{eyebrow && (
						<FadeUp as="p" delay={0} className="hero__eyebrow label">
							{eyebrow}
						</FadeUp>
					)}
					<FadeUp
						as="h1"
						id="hero-heading"
						delay={eyebrow ? 100 : 0}
						className="hero__heading"
					>
						{heading}
					</FadeUp>
					{subheading && (
						<FadeUp
							as="p"
							delay={eyebrow ? 200 : 100}
							className="hero__subheading lead"
						>
							{subheading}
						</FadeUp>
					)}
					{cta && (
						<FadeUp
							as="div"
							delay={eyebrow ? 300 : 200}
							className="hero__actions"
						>
							<Button
								text={cta.text}
								href={cta.href}
								variant={cta.variant ?? "primary"}
								external={cta.external ?? false}
							/>
							{ctaSecondary && (
								<Button
									text={ctaSecondary.text}
									href={ctaSecondary.href}
									variant={ctaSecondary.variant ?? "secondary"}
									external={ctaSecondary.external ?? false}
								/>
							)}
						</FadeUp>
					)}
				</div>
			</div>
		</section>
	);
}
