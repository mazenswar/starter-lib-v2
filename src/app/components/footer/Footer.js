// components/footer/Footer.js
import Link from "next/link";
import Image from "next/image";
import "./footer.scss";

/* =========================
   SOCIAL ICONS
   ========================= */

function SocialIcon({ icon }) {
	if (icon === "instagram")
		return (
			<svg
				width="18"
				height="18"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
				aria-hidden="true"
				focusable="false"
			>
				<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
				<circle cx="12" cy="12" r="4" />
				<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
			</svg>
		);
	if (icon === "linkedin")
		return (
			<svg
				width="18"
				height="18"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
				aria-hidden="true"
				focusable="false"
			>
				<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
				<rect x="2" y="9" width="4" height="12" />
				<circle cx="4" cy="4" r="2" />
			</svg>
		);
	if (icon === "facebook")
		return (
			<svg
				width="18"
				height="18"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
				aria-hidden="true"
				focusable="false"
			>
				<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
			</svg>
		);
	return null;
}

/* =========================
   COMPONENT
   ========================= */

export default function Footer({
	labels,
	contact,
	navLinks,
	badges,
	social,
	legalLinks,
	seoLine,
	copyright,
}) {
	const year = new Date().getFullYear();
	const hasContact =
		contact.phone || contact.email || contact.address || contact.virtual;
	const hasBadges = badges.length > 0;
	const hasSocial = social.length > 0;

	return (
		<footer className="footer">
			<div className="footer__main">
				<div className="container footer__grid">
					{/* Col 1 — Contact info */}
					{hasContact && (
						<div className="footer__col">
							<p className="footer__col-label">{labels.contact}</p>
							<ul className="footer__contact-list" role="list">
								{contact.phone && (
									<li>
										<a
											href={`tel:${contact.phone.replace(/\D/g, "")}`}
											className="footer__link"
										>
											{contact.phone}
										</a>
									</li>
								)}
								{contact.email && (
									<li>
										<a
											href={`mailto:${contact.email}`}
											className="footer__link"
										>
											{contact.email}
										</a>
									</li>
								)}
								{contact.address && (
									<li className="footer__address">{contact.address}</li>
								)}
								{contact.virtual && (
									<li className="footer__virtual">{contact.virtual}</li>
								)}
							</ul>
						</div>
					)}

					{/* Col 2 — Nav links */}
					<nav className="footer__col" aria-label={labels.navigate}>
						<p className="footer__col-label">{labels.navigate}</p>
						<ul className="footer__nav-list" role="list">
							{navLinks.map((item) => (
								<li key={item.href}>
									<Link href={item.href} className="footer__link">
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/* Col 3 — Badges + Social */}
					<div className="footer__col">
						{hasBadges && (
							<>
								<p className="footer__col-label">{labels.badges}</p>
								<ul className="footer__badges" role="list">
									{badges.map((badge) => (
										<li key={badge.href}>
											<a
												href={badge.href}
												className="footer__badge-link"
												target="_blank"
												rel="noopener noreferrer"
												aria-label={`${badge.label} (opens in a new tab)`}
											>
												{badge.src ? (
													<Image
														src={badge.src}
														alt=""
														className="footer__badge-img"
														width={120}
														height={40}
													/>
												) : (
													<span
														className="footer__badge-text"
														aria-hidden="true"
													>
														{badge.label}
													</span>
												)}
											</a>
										</li>
									))}
								</ul>
							</>
						)}

						{hasSocial && (
							<>
								<p
									className={`footer__col-label ${hasBadges ? "footer__col-label--spaced" : ""}`}
								>
									{labels.social}
								</p>
								<ul className="footer__social" role="list">
									{social.map((item) => (
										<li key={item.href}>
											<a
												href={item.href}
												className="footer__social-link"
												target="_blank"
												rel="noopener noreferrer"
												aria-label={`${item.label} (opens in a new tab)`}
											>
												<SocialIcon icon={item.icon} />
											</a>
										</li>
									))}
								</ul>
							</>
						)}
					</div>
				</div>

				{seoLine && (
					<div className="container">
						<p className="footer__seo-line">{seoLine}</p>
					</div>
				)}
			</div>

			{/* Bottom bar */}
			<div className="footer__bottombar">
				<div className="container footer__bottombar-inner">
					<p className="footer__copy">
						© {year} {copyright.name}. {copyright.notice}{" "}
						{copyright.creditHref && (
							<a
								href={copyright.creditHref}
								className="footer__link"
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${copyright.creditText} (opens in a new tab)`}
							>
								{copyright.creditText}
							</a>
						)}
					</p>
					{legalLinks.length > 0 && (
						<ul className="footer__legal" role="list">
							{legalLinks.map((item) => (
								<li key={item.href}>
									<Link href={item.href} className="footer__link">
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</footer>
	);
}
