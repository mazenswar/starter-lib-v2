import { Children, isValidElement } from "react";
import FadeUp from "../fadeUp/FadeUp";

// Wraps each child in a FadeUp item with an increasing delay.
// FadeUp handles prefers-reduced-motion, so every child is always
// wrapped in itemAs — this keeps list markup valid (ul > li).
export default function StaggerGrid({
	children,
	baseDelay = 0,
	stagger = 100,
	as: Tag = "div",
	itemAs = "div",
	className = "",
	role,
}) {
	return (
		<Tag className={className || undefined} role={role}>
			{Children.map(children, (child, i) =>
				isValidElement(child) ? (
					<FadeUp as={itemAs} delay={baseDelay + i * stagger}>
						{child}
					</FadeUp>
				) : (
					child
				),
			)}
		</Tag>
	);
}
