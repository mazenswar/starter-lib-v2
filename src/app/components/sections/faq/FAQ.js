// components/sections/faq/FAQ.js
"use client";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import FadeUp from "../../ui/fadeUp/FadeUp";
import "./faq.scss";

function useDebounced(value, ms = 200) {
	const [v, setV] = useState(value);
	useEffect(() => {
		const t = setTimeout(() => setV(value), ms);
		return () => clearTimeout(t);
	}, [value, ms]);
	return v;
}

export default function FAQ({
	id = "faq",
	heading,
	subheading,
	contact,
	groups,
	searchable = false,
	searchLabel,
	searchPlaceholder,
	showToc = false,
	tocTitle,
	noResultsText,
	noResultsHint,
	clearSearchText,
}) {
	const [query, setQuery] = useState("");
	const debounced = useDebounced(query, 200);

	const filteredGroups = useMemo(() => {
		const q = debounced.trim().toLowerCase();
		if (!q) return groups;
		return groups
			.map((g) => {
				const items = g.items.filter((item) => {
					const hay =
						`${item.q} ${item.a} ${(item.tags || []).join(" ")}`.toLowerCase();
					return hay.includes(q);
				});
				return items.length ? { ...g, items } : null;
			})
			.filter(Boolean);
	}, [debounced, groups]);

	// Deep link: open and scroll to the item named in the URL hash
	useEffect(() => {
		const hash = window.location.hash.replace("#", "");
		if (!hash) return;
		const el = document.getElementById(hash);
		if (el?.tagName === "DETAILS") {
			el.setAttribute("open", "");
			setTimeout(
				() => el.scrollIntoView({ behavior: "smooth", block: "start" }),
				60,
			);
		}
	}, []);

	return (
		<section className="block faq" aria-labelledby={`${id}-heading`} id={id}>
			<div className="block__content container">
				<FadeUp as="div" className="faq__header">
					<h2 id={`${id}-heading`}>{heading}</h2>
					{subheading && (
						<p className="faq__sub">
							{subheading}{" "}
							{contact && (
								<Link href={contact.href} className="link">
									{contact.text}
								</Link>
							)}
						</p>
					)}
					{searchable && (
						<div className="faq__search">
							<label htmlFor="faq-search" className="sr-only">
								{searchLabel}
							</label>
							<input
								id="faq-search"
								type="search"
								placeholder={searchPlaceholder}
								value={query}
								onChange={(e) => setQuery(e.target.value)}
							/>
						</div>
					)}
				</FadeUp>

				<div className={`faq__layout ${showToc ? "has-toc" : ""}`}>
					{showToc && (
						<nav className="faq__toc" aria-label={tocTitle}>
							<p className="faq__toc-title">{tocTitle}</p>
							{/* Same-page fragment links — plain a tags, not route navigation */}
							<ul role="list">
								{groups.map((g) => (
									<li key={g.id}>
										<a href={`#${g.id}`} className="faq__toc-link">
											{g.title}
										</a>
									</li>
								))}
							</ul>
						</nav>
					)}

					<div className="faq__content">
						{filteredGroups.length === 0 ? (
							<div className="faq__empty" role="status">
								<p>
									{noResultsText} <strong>{debounced}</strong>. {noResultsHint}
								</p>
								<button
									type="button"
									className="btnGhost"
									onClick={() => setQuery("")}
								>
									{clearSearchText}
								</button>
							</div>
						) : (
							filteredGroups.map((group) => (
								<section
									key={group.id}
									id={group.id}
									className="faq__group"
									aria-labelledby={`${group.id}-title`}
								>
									<h3 id={`${group.id}-title`} className="faq__group-title">
										{group.title}
									</h3>
									{/* Native details/summary exposes expanded state to assistive tech */}
									<div className="faq__accordion">
										{group.items.map((item) => (
											<details key={item.id} id={item.id} className="faq__item">
												<summary className="faq__question">
													<span>{item.q}</span>
													<span className="faq__icon" aria-hidden="true" />
												</summary>
												<div
													className="faq__answer"
													dangerouslySetInnerHTML={{ __html: item.a }}
												/>
											</details>
										))}
									</div>
								</section>
							))
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
