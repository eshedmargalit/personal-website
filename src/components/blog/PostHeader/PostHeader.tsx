import Image from "next/image";
import styles from "./PostHeader.module.css";

interface PostHeaderProps {
	title: string;
	coverImage?: string;
	date: string;
	tagline?: string;
}

export function PostHeader({
	title,
	coverImage,
	date,
	tagline,
}: PostHeaderProps) {
	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<header className={styles.header}>
			{coverImage && (
				<div className={styles.coverImageContainer}>
					<Image
						src={coverImage}
						alt={`Cover image for ${title}`}
						width={800}
						height={400}
						className={styles.coverImage}
						priority
					/>
				</div>
			)}
			<div className={styles.content}>
				<h1 className={styles.title}>{title}</h1>
				{tagline && (
					<p className={styles.tagline}>
						<em>{tagline}</em>
					</p>
				)}
				<time className={styles.date} dateTime={date}>
					{formattedDate}
				</time>
			</div>
		</header>
	);
}
