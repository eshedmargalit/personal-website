import Image from "next/image";
import { useState } from "react";
import styles from "./GalleryItem.module.css";

interface ImageData {
	title: string;
	url: string;
	alt: string;
	description: string;
}

interface GalleryItemProps {
	image: ImageData;
	index: number;
}

export default function GalleryItem({ image, index }: GalleryItemProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleDescription = () => {
		setIsExpanded((prev) => !prev);
	};

	return (
		<div>
			<div className={styles.titleRow}>
				<h2>{image.title}</h2>
				<button
					type="button"
					className={styles.toggleButton}
					onClick={toggleDescription}
					aria-expanded={isExpanded}
					title="What is this?"
				>
					?
				</button>
			</div>
			<div
				className={`${styles.description} ${isExpanded ? styles.expanded : ""}`}
			>
				<p>{image.description}</p>
			</div>
			<div className={styles.imageContainer}>
				<Image
					src={image.url}
					alt={image.alt}
					width={800}
					height={600}
					className={styles.galleryImage}
					priority={index < 2}
				/>
			</div>
		</div>
	);
}
