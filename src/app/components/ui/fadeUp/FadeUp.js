"use client";

import { useEffect, useRef, useState } from "react";
import "./fadeup.scss";

function getPrefersReduced() {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function FadeUp({
	children,
	delay = 0,
	className = "",
	as: Tag = "div",
	id,
}) {
	const ref = useRef(null);
	const [prefersReduced, setPrefersReduced] = useState(getPrefersReduced);
	const [visible, setVisible] = useState(getPrefersReduced);

	useEffect(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const handler = (e) => setPrefersReduced(e.matches);
		mq.addEventListener("change", handler);
		return () => mq.removeEventListener("change", handler);
	}, []);

	useEffect(() => {
		if (prefersReduced) return;

		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.15 },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [prefersReduced]);

	// The delay is a per-instance runtime value, so it is handed to
	// fadeup.scss as a custom property. All styling lives in the SCSS.
	const delayVar = prefersReduced ? undefined : { "--fadeup-delay": `${delay}ms` };

	return (
		<Tag
			ref={ref}
			id={id}
			className={`fadeup ${visible ? "fadeup--visible" : ""} ${className}`.trim()}
			style={delayVar}
		>
			{children}
		</Tag>
	);
}
