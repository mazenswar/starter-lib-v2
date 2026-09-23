// components/sections/galleryBeforeAfter/GalleryBeforeAfter.js
import Image from "next/image";
import "./GalleryBeforeAfter.scss";

// Side-by-side before and after image pairs
export default function GalleryBeforeAfter({
	heading,
	subheading,
	pairs,
	beforeLabel,
	afterLabel,
}) {
	return (
		<section className="block gallery" aria-labelledby="gallery-heading">
			<div className="block__content container">
				<div className="gallery__header">
					<h2 id="gallery-heading">{heading}</h2>
					{subheading && <p className="gallery__sub">{subheading}</p>}
				</div>

				<div className="gallery__before-after-list">
					{pairs.map((pair) => (
						<div key={pair.id} className="gallery__before-after">
							{pair.label && (
								<h3 className="gallery__before-after-label">{pair.label}</h3>
							)}
							<div className="gallery__before-after-grid">
								<figure className="gallery__before-after-item">
									<div className="gallery__before-after-badge" aria-hidden="true">
										{beforeLabel}
									</div>
									<Image
										src={pair.before.src}
										alt={pair.before.alt}
										width={pair.before.width}
										height={pair.before.height}
										sizes="(max-width: 768px) 90vw, 45vw"
									/>
									<figcaption className="sr-only">
										{beforeLabel}: {pair.before.alt}
									</figcaption>
								</figure>
								<figure className="gallery__before-after-item">
									<div
										className="gallery__before-after-badge is-after"
										aria-hidden="true"
									>
										{afterLabel}
									</div>
									<Image
										src={pair.after.src}
										alt={pair.after.alt}
										width={pair.after.width}
										height={pair.after.height}
										sizes="(max-width: 768px) 90vw, 45vw"
									/>
									<figcaption className="sr-only">
										{afterLabel}: {pair.after.alt}
									</figcaption>
								</figure>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
