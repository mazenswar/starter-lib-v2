// components/ui/Button.js
"use client";
import Link from "next/link";

/**
 * Unified Button component
 *
 * Props:
 * - text: string (required)
 * - href: string (required for link buttons)
 * - variant: "primary" | "secondary" | "ghost" (default: "primary")
 * - onClick: function (optional)
 * - external: boolean (bare <a> that opens in a new tab, default: false)
 * - trackEvent: object (optional GTM dataLayer push before navigation)
 *     { event: "event_name", ...additionalData }
 * - disabled: boolean (default: false)
 * - className: string (optional additional classes)
 * - type: "button" | "submit" | "reset" (only used when no href)
 */

const variantMap = {
	primary: "btnPrimary",
	secondary: "btnSecondary",
	ghost: "btnGhost",
};

export default function Button({
	text,
	href,
	variant = "primary",
	onClick,
	external = false,
	trackEvent,
	disabled = false,
	className = "",
	type = "button",
}) {
	const baseClass = variantMap[variant] ?? "btnPrimary";
	const classes = [baseClass, className].filter(Boolean).join(" ");

	// GTM tracking handler for link buttons
	function handleLinkClick(e) {
		if (trackEvent) {
			e.preventDefault();
			try {
				window.dataLayer = window.dataLayer || [];
				window.dataLayer.push({
					...trackEvent,
					button_text: text,
					button_url: href,
				});
			} catch {
				// no-op if dataLayer unavailable
			}
			setTimeout(() => {
				window.location.href = href;
			}, 200);
			return;
		}

		if (onClick) onClick(e);
	}

	// Render as plain button if no href
	if (!href) {
		return (
			<button
				type={type}
				className={classes}
				onClick={onClick}
				disabled={disabled}
			>
				{text}
			</button>
		);
	}

	// Disabled links block navigation and are removed from the tab order
	if (disabled) {
		return (
			<span className={classes} aria-disabled="true" role="link">
				{text}
			</span>
		);
	}

	// External link — bare a tag, new tab, announced to screen readers
	if (external) {
		return (
			<a
				href={href}
				className={classes}
				onClick={handleLinkClick}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={`${text} (opens in a new tab)`}
			>
				{text}
			</a>
		);
	}

	// Internal link
	return (
		<Link href={href} className={classes} onClick={handleLinkClick}>
			{text}
		</Link>
	);
}
