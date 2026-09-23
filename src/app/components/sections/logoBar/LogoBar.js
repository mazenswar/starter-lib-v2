// components/sections/logoBar/LogoBar.js
import Image from "next/image";
import Link from "next/link";
import "./logobar.scss";

function LogoItem({ logo }) {
	// No link — image carries the alt text directly
	if (!logo.href) {
		return (
			<Image
				src={logo.src}
				alt={logo.alt}
				width={logo.width || 120}
				height={44}
				className="logo-bar__img"
			/>
		);
	}

	// Image inside a link — link carries the label, image is decorative
	const image = (
		<Image
			src={logo.src}
			alt=""
			width={logo.width || 120}
			height={44}
			className="logo-bar__img"
		/>
	);

	// External link — bare a tag with new tab notice
	if (logo.href.startsWith("http")) {
		return (
			<a
				href={logo.href}
				className="logo-bar__link"
				target="_blank"
				rel="noopener noreferrer"
				aria-label={`${logo.alt} (opens in a new tab)`}
			>
				{image}
			</a>
		);
	}

	// Internal link — Next Link
	return (
		<Link href={logo.href} className="logo-bar__link" aria-label={logo.alt}>
			{image}
		</Link>
	);
}

export default function LogoBar({ heading, logos }) {
	if (!logos?.length) return null;

	return (
		<section
			className="logo-bar block"
			aria-label={heading || "Partner logos"}
		>
			<div className="container logo-bar__inner">
				{heading && <p className="logo-bar__heading label">{heading}</p>}
				<ul className="logo-bar__list" role="list">
					{logos.map((logo) => (
						<li key={logo.alt} className="logo-bar__item">
							<LogoItem logo={logo} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
