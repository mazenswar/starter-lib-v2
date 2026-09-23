// components/sections/heroFullBleed/HeroFullBleed.js
import Image from "next/image";
import Button from "../../ui/Button";
import FadeUp from "../../ui/fadeUp/FadeUp";
import "./HeroFullBleed.scss";

// Full Bleed — copy left, image fills the right half.
// The section is labeled by the h1 via aria-labelledby. Pass alt: ""
// when the image is decorative.

export default function HeroFullBleed({
	eyebrow,
	heading,
	subheading,
	cta,
	ctaSecondary,
	image,
}) {
	return (
		<section className="hero hero--full-bleed" aria-labelledby="hero-heading">
			<div className="hero__inner">
				<div className="hero__bleed-copy">
					<div className="hero__bleed-copy-inner">
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
				{image && (
					<div className="hero__bleed-image">
						<Image src={image.src} alt={image.alt} fill priority sizes="50vw" />
					</div>
				)}
			</div>
		</section>
	);
}
