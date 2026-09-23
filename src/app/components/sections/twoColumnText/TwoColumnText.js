// components/sections/twoColumnText/TwoColumnText.js
import Button from "../../ui/Button";
import FadeUp from "../../ui/fadeUp/FadeUp";
import "./TwoColumnText.scss";

// Two columns — copy left, bulleted list right, no image
export default function TwoColumnText({
	id = "two-col",
	eyebrow,
	heading,
	subheading,
	paragraphs,
	list,
	cta,
	classNames = "",
}) {
	return (
		<section
			className={`block two-col-section ${classNames}`.trim()}
			aria-labelledby={`${id}-heading`}
			id={id}
		>
			<div className="block__content container">
				<div className="two-col-section__layout no-image">
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
				</div>
			</div>
		</section>
	);
}
