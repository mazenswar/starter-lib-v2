// components/sections/cardGrid/CardGrid.js
import Link from "next/link";
import Button from "../../ui/Button";
import "./cardgrid.scss";

export default function CardGrid({ heading, subheading, cards, cta }) {
	return (
		<section
			className="block blockTint card-grid"
			aria-labelledby="card-grid-heading"
		>
			<div className="block__content container">
				<div className="card-grid__header">
					<h2 id="card-grid-heading">{heading}</h2>
					{subheading && <p className="card-grid__sub">{subheading}</p>}
				</div>

				<div className="card-grid__grid">
					{cards.map((card) => (
						<Link key={card.href} href={card.href} className="card">
							<div className="card__inner">
								<h3 className="card__title">{card.title}</h3>
								<p className="card__description">{card.description}</p>
								{card.cta && (
									<span className="card__cta" aria-hidden="true">
										{card.cta} →
									</span>
								)}
							</div>
						</Link>
					))}
				</div>

				{cta && (
					<div className="card-grid__footer">
						<Button
							text={cta.text}
							href={cta.href}
							variant={cta.variant ?? "secondary"}
							external={cta.external ?? false}
						/>
					</div>
				)}
			</div>
		</section>
	);
}
