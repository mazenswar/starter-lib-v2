// components/sections/testimonialsGrid/TestimonialsGrid.js
import "./TestimonialsGrid.scss";

function StarRating({ count }) {
	return (
		<div
			className="testimonial__stars"
			role="img"
			aria-label={`${count} out of 5 stars`}
		>
			{Array.from({ length: 5 }).map((_, i) => (
				<span
					key={i}
					className={`testimonial__star ${i < count ? "is-filled" : ""}`}
					aria-hidden="true"
				>
					★
				</span>
			))}
		</div>
	);
}

// Testimonials — all testimonials in an equal three-column grid
export default function TestimonialsGrid({ heading, subheading, testimonials }) {
	return (
		<section
			className="block blockTint testimonials"
			aria-labelledby="testimonials-heading"
		>
			<div className="block__content container">
				<div className="testimonials__header">
					<h2 id="testimonials-heading">{heading}</h2>
					{subheading && <p className="testimonials__sub">{subheading}</p>}
				</div>

				<div className="testimonials__grid">
					{testimonials.map((t) => (
						<figure key={t.id} className="testimonial">
							{t.rating && <StarRating count={t.rating} />}
							<blockquote className="testimonial__quote">
								&ldquo;{t.quote}&rdquo;
							</blockquote>
							<figcaption className="testimonial__footer">
								<p className="testimonial__name">{t.name}</p>
								{t.title && <p className="testimonial__title">{t.title}</p>}
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	);
}
