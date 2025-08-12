"use client";

import Image from "next/image";
import styles from "./ClickableImage.module.css";

interface ClickableImageProps {
	src: string;
	alt: string;
	url?: string;
	className?: string;
	width?: number;
	height?: number;
	isDark?: boolean;
}

export const ClickableImage = ({
	src,
	alt,
	url,
	className,
	width = 400,
	height = 300,
	isDark = false,
}: ClickableImageProps) => {
	if (!url) {
		return (
			<div
				className={`${styles.container} ${className || ""} ${isDark ? styles.dark : styles.light}`}
			>
				<Image
					src={src}
					alt={alt}
					width={width}
					height={height}
					className={styles.image}
				/>
			</div>
		);
	}

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className={`${styles.container} ${className || ""} ${styles.clickable} ${isDark ? styles.dark : styles.light}`}
			aria-label={`Click to open: ${alt}`}
		>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className={styles.image}
			/>
			<div className={styles.overlay}>
				<svg
					className={styles.externalIcon}
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<title>External link</title>
					<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
					<polyline points="15,3 21,3 21,9" />
					<line x1="10" y1="14" x2="21" y2="3" />
				</svg>
			</div>
		</a>
	);
};

export default ClickableImage;
