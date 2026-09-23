// components/sections/testimonialsFeatured/TestimonialsFeatured.js
import "./TestimonialsFeatured.scss";

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

// Testimonials — first testimonial large, the rest in a smaller grid below
export default function TestimonialsFeatured({ heading, subheading, testimonials }) {
	const [featured, ...rest] = testimonials;

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

				{featured && (
					<figure className="testimonial testimonial--featured">
						{featured.rating && <StarRating count={featured.rating} />}
						<blockquote className="testimonial__quote">
							&ldquo;{featured.quote}&rdquo;
						</blockquote>
						<figcaption className="testimonial__footer">
							<p className="testimonial__name">{featured.name}</p>
							{featured.title && <p className="testimonial__title">{featured.title}</p>}
						</figcaption>
					</figure>
				)}

				<div className="testimonials__grid is-secondary">
					{rest.map((t) => (
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
