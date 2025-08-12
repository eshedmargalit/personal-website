import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./SubtleLink.module.css";

interface SubtleLinkProps {
	href: string;
	children: ReactNode;
	external?: boolean;
	className?: string;
}

export function SubtleLink({
	href,
	children,
	external = false,
	className,
}: SubtleLinkProps) {
	const linkClassName = `${styles.subtleLink} ${className || ""}`.trim();

	if (external) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={linkClassName}
			>
				{children}
			</a>
		);
	}

	return (
		<Link href={href} className={linkClassName}>
			{children}
		</Link>
	);
}
