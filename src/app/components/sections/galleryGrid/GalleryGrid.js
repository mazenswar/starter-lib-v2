// components/sections/galleryGrid/GalleryGrid.js
"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import "./GalleryGrid.scss";

/* =========================
   LIGHTBOX
   ========================= */

function Lightbox({ image, onClose }) {
	const dialogRef = useRef(null);
	const closeRef = useRef(null);
	const triggerRef = useRef(null);

	useEffect(() => {
		triggerRef.current = document.activeElement;
		dialogRef.current?.showModal();
		requestAnimationFrame(() => closeRef.current?.focus());

		return () => {
			triggerRef.current?.focus();
		};
	}, []);

	const handleKeyDown = useCallback(
		(e) => {
			if (e.key === "Escape") {
				e.preventDefault();
				onClose();
				return;
			}
			if (e.key !== "Tab") return;
			e.preventDefault();
			closeRef.current?.focus();
		},
		[onClose],
	);

	return (
		<dialog
			ref={dialogRef}
			className="gallery__lightbox"
			onClick={(e) => e.target === e.currentTarget && onClose()}
			onKeyDown={handleKeyDown}
			aria-label={image.alt}
			aria-modal="true"
		>
			<div className="gallery__lightbox-inner">
				<button
					ref={closeRef}
					type="button"
					className="gallery__lightbox-close"
					onClick={onClose}
					aria-label="Close image"
				>
					<span aria-hidden="true">✕</span>
				</button>
				<figure className="gallery__lightbox-figure">
					<Image
						src={image.src}
						alt={image.alt}
						width={image.width}
						height={image.height}
						priority
					/>
					{image.alt && (
						<figcaption className="gallery__lightbox-caption">
							{image.alt}
						</figcaption>
					)}
				</figure>
			</div>
		</dialog>
	);
}

/* =========================
   COMPONENT
   ========================= */

// Photo grid with optional category filters and a lightbox
export default function GalleryGrid({
	heading,
	subheading,
	filterable = false,
	columns = 3,
	categories = [],
	images,
	viewLabel,
}) {
	const [activeCategory, setActiveCategory] = useState("all");
	const [lightboxImage, setLightboxImage] = useState(null);

	const filteredImages =
		activeCategory === "all"
			? images
			: images.filter((img) => img.category === activeCategory);

	return (
		<section className="block gallery" aria-labelledby="gallery-heading">
			<div className="block__content container">
				<div className="gallery__header">
					<h2 id="gallery-heading">{heading}</h2>
					{subheading && <p className="gallery__sub">{subheading}</p>}
				</div>

				{filterable && (
					<div
						className="gallery__filters"
						role="group"
						aria-label="Filter gallery by category"
					>
						{categories.map((cat) => (
							<button
								key={cat.id}
								type="button"
								aria-pressed={activeCategory === cat.id}
								className={`gallery__filter ${activeCategory === cat.id ? "is-active" : ""}`}
								onClick={() => setActiveCategory(cat.id)}
							>
								{cat.label}
							</button>
						))}
					</div>
				)}

				<div className={`gallery__grid gallery__grid--cols-${columns}`}>
					{filteredImages.map((image) => (
						<button
							key={image.id}
							type="button"
							className="gallery__item"
							onClick={() => setLightboxImage(image)}
							aria-label={`View larger: ${image.alt}`}
						>
							<Image
								src={image.src}
								alt=""
								width={image.width}
								height={image.height}
								sizes="(max-width: 768px) 90vw, 33vw"
							/>
							<div className="gallery__item-overlay" aria-hidden="true">
								<span>{viewLabel}</span>
							</div>
						</button>
					))}
				</div>
			</div>

			{lightboxImage && (
				<Lightbox
					image={lightboxImage}
					onClose={() => setLightboxImage(null)}
				/>
			)}
		</section>
	);
}
