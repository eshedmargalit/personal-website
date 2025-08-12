"use client";

import { usePathname } from "next/navigation";
import { SubtleLink } from "@/components/SubtleLink";
import styles from "./Navbar.module.css";

export function Navbar() {
	const pathname = usePathname();
	const isHomePage = pathname === "/";

	return (
		<nav className={styles.navbar}>
			<div
				className={`${styles.navbarContainer} ${isHomePage ? styles.homePageLayout : styles.defaultLayout}`}
			>
				{/* Home link is only shown on the home page */}
				{!isHomePage && (
					<div className={styles.homeLink}>
						<SubtleLink href="/">home</SubtleLink>
					</div>
				)}

				{/* Remaining links are always visible */}
				<ul>
					<li>
						<SubtleLink href="/cv">cv</SubtleLink>
					</li>
					<li>
						<SubtleLink href="/resume">resume</SubtleLink>
					</li>
					<li>
						<SubtleLink href="/art">sci-art</SubtleLink>
					</li>
					<li>
						<SubtleLink href="/blog">blog</SubtleLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}
