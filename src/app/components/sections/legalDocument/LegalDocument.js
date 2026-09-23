// components/sections/legalDocument/LegalDocument.js
import "./LegalDocument.scss";

// Long-form policy page: last-updated line, optional intro, a sticky
// table of contents, and titled sections of paragraphs, bullet lists,
// and external links. Pair it with a page hero that holds the h1.
export default function LegalDocument({
	updatedLabel,
	updated,
	intro,
	tocTitle,
	sections,
}) {
	return (
		<div className="block legal-doc">
			<div className="block__content container">
				<div className={`legal-doc__layout ${tocTitle ? "has-toc" : ""}`}>
					{tocTitle && (
						<nav className="legal-doc__toc" aria-label={tocTitle}>
							<p className="legal-doc__toc-title">{tocTitle}</p>
							{/* Same-page fragment links — plain a tags, not route navigation */}
							<ol role="list">
								{sections.map((section) => (
									<li key={section.id}>
										<a href={`#${section.id}`} className="legal-doc__toc-link">
											{section.heading}
										</a>
									</li>
								))}
							</ol>
						</nav>
					)}

					<div className="legal-doc__content">
						<p className="legal-doc__updated">
							{updatedLabel} {updated}
						</p>

						{intro?.map((para, i) => (
							<p key={i} className="legal-doc__intro">
								{para}
							</p>
						))}

						{sections.map((section) => (
							<section
								key={section.id}
								id={section.id}
								className="legal-doc__section"
								aria-labelledby={`${section.id}-heading`}
							>
								<h2 id={`${section.id}-heading`}>{section.heading}</h2>
								{section.paragraphs?.map((para, i) => (
									<p key={i}>{para}</p>
								))}
								{section.list?.length > 0 && (
									<ul className="legal-doc__list">
										{section.list.map((item, i) => (
											<li key={i}>{item}</li>
										))}
									</ul>
								)}
								{section.links?.length > 0 && (
									<ul className="legal-doc__links" role="list">
										{section.links.map((link) => (
											<li key={link.href}>
												<a
													href={link.href}
													className="link"
													target="_blank"
													rel="noopener noreferrer"
													aria-label={`${link.text} (opens in a new tab)`}
												>
													{link.text}
												</a>
											</li>
										))}
									</ul>
								)}
							</section>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
