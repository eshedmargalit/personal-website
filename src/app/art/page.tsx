"use client";

import GalleryItem from "@/components/art/GalleryItem";
import imagesData from "@/data/images.json";
import styles from "./art.module.css";

interface ImageData {
	title: string;
	url: string;
	alt: string;
	description: string;
}

export default function Art() {
	return (
		<main className="page">
			<header className={styles.header}>
				<h1>sci-art</h1>
				<p>
					Plots and figures made while doing research that I thought were
					pretty.
				</p>
			</header>
			<section className={styles.gallery}>
				{imagesData.map((image: ImageData, index: number) => (
					<GalleryItem
						key={`${image.title}-${index}`}
						image={image}
						index={index}
					/>
				))}
			</section>
		</main>
	);
}
