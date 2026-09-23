// components/sections/twoColumnImageRight/TwoColumnImageRight.js
import Image from "next/image";
import Button from "../../ui/Button";
import FadeUp from "../../ui/fadeUp/FadeUp";
import "./TwoColumnImageRight.scss";

// Two columns — copy left, image right
export default function TwoColumnImageRight({
	id = "two-col",
	eyebrow,
	heading,
	subheading,
	paragraphs,
	list,
	cta,
	image,
	classNames = "",
}) {
	return (
		<section
			className={`block two-col-section ${classNames}`.trim()}
			aria-labelledby={`${id}-heading`}
			id={id}
		>
			<div className="block__content container">
				<div className="two-col-section__layout">
					<FadeUp as="div" className="two-col-section__copy" delay={0}>
						{eyebrow && (
							<p className="label two-col-section__eyebrow">{eyebrow}</p>
						)}
						<h2 id={`${id}-heading`}>{heading}</h2>
						{subheading && <p className="two-col-section__sub">{subheading}</p>}
						{paragraphs?.map((para, i) => (
							<p key={i}>{para}</p>
						))}
						{cta && (
							<div className="two-col-section__actions">
								<Button
									text={cta.text}
									href={cta.href}
									variant={cta.variant ?? "secondary"}
									external={cta.external ?? false}
								/>
							</div>
						)}
					</FadeUp>

					{list?.length > 0 && (
						<FadeUp as="ul" className="two-col-section__list" delay={150}>
							{list.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</FadeUp>
					)}

					<FadeUp as="figure" className="two-col-section__media" delay={150}>
						<Image
							src={image.src}
							alt={image.alt}
							width={image.width}
							height={image.height}
							sizes="(max-width: 768px) 92vw, 420px"
						/>
					</FadeUp>
				</div>
			</div>
		</section>
	);
}
