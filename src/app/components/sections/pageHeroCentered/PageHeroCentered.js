// components/sections/pageHeroCentered/PageHeroCentered.js
import Image from "next/image";
import "./PageHeroCentered.scss";

// Interior page hero — copy centered, optional image or illustration
export default function PageHeroCentered({
	eyebrow,
	heading,
	subheading,
	image,
	illustration,
}) {
	return (
		<section
			className="block page-hero page-hero--centered"
			aria-labelledby="page-hero-heading"
		>
			<div className="block__content container">
				<div
					className={`page-hero__layout ${image ? "has-image" : ""} ${illustration ? "has-illustration" : ""}`}
				>
					<div className="page-hero__copy">
						{eyebrow && <p className="page-hero__eyebrow label">{eyebrow}</p>}
						<h1 id="page-hero-heading">{heading}</h1>
						{subheading && <p className="lead">{subheading}</p>}
					</div>

					{image && (
						<figure className="page-hero__media">
							<Image
								src={image.src}
								alt={image.alt}
								width={image.width}
								height={image.height}
								priority
								sizes="(max-width: 768px) 90vw, 420px"
							/>
						</figure>
					)}

					{illustration && !image && (
						<figure className="page-hero__media" aria-hidden="true">
							{illustration}
						</figure>
					)}
				</div>
			</div>
		</section>
	);
}
