// components/sections/heroAsymmetric/HeroAsymmetric.js
import Image from "next/image";
import Button from "../../ui/Button";
import FadeUp from "../../ui/fadeUp/FadeUp";
import "./HeroAsymmetric.scss";

// Asymmetric — landscape image left, tall copy right

export default function HeroAsymmetric({
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
			className="hero hero--asymmetric block"
			aria-labelledby="hero-heading"
		>
			<div className="container hero__inner">
				{image && (
					<div className="hero__media hero__media--landscape">
						<Image
							src={image.src}
							alt={image.alt}
							width={560}
							height={380}
							priority
							sizes="(max-width: 768px) 90vw, 560px"
						/>
					</div>
				)}
				<div className="hero__copy hero__copy--tall">
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
					{caption && (
						<div className="hero__caption">
							{caption.name && <p className="hero__caption-name">{caption.name}</p>}
							{caption.title && (
								<p className="hero__caption-title">{caption.title}</p>
							)}
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
