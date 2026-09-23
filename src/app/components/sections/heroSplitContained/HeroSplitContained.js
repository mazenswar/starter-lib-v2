// components/sections/heroSplitContained/HeroSplitContained.js
import Image from "next/image";
import Button from "../../ui/Button";
import FadeUp from "../../ui/fadeUp/FadeUp";
import "./HeroSplitContained.scss";

// Split Contained — circular portrait, copy left

export default function HeroSplitContained({
	eyebrow,
	heading,
	subheading,
	cta,
	ctaSecondary,
	image,
	caption,
}) {
	return (
		<section
			className="hero hero--split-contained block"
			aria-labelledby="hero-heading"
		>
			<div className="container hero__inner">
				<div className="hero__copy">
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
				{image && (
					<div className="hero__media hero__media--circle">
						<Image
							src={image.src}
							alt={image.alt}
							width={500}
							height={500}
							priority
							sizes="(max-width: 768px) 90vw, 480px"
						/>
						{caption && (
							<div className="hero__caption">
								{caption.name && <p className="hero__caption-name">{caption.name}</p>}
								{caption.title && (
									<p className="hero__caption-title">{caption.title}</p>
								)}
							</div>
						)}
					</div>
				)}
			</div>
		</section>
	);
}
