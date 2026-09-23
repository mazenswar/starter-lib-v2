// components/sections/heroCentered/HeroCentered.js
import Image from "next/image";
import Button from "../../ui/Button";
import FadeUp from "../../ui/fadeUp/FadeUp";
import "./HeroCentered.scss";

// Centered — copy centered above a wide image

export default function HeroCentered({
	eyebrow,
	heading,
	subheading,
	cta,
	ctaSecondary,
	image,
}) {
	return (
		<section
			className="hero hero--centered block"
			aria-labelledby="hero-heading"
		>
			<div className="container hero__inner">
				<div className="hero__copy hero__copy--centered">
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
							className="hero__actions hero__actions--centered"
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
				{image && (
					<div className="hero__media hero__media--wide">
						<Image
							src={image.src}
							alt={image.alt}
							width={900}
							height={480}
							priority
							sizes="(max-width: 768px) 100vw, 900px"
						/>
					</div>
				)}
			</div>
		</section>
	);
}
