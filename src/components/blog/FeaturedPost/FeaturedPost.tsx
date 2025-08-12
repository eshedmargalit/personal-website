import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/interfaces/post";
import styles from "./FeaturedPost.module.css";

interface FeaturedPostProps {
	post: Post;
	contentHtml: string;
}

export default function FeaturedPost({ post, contentHtml }: FeaturedPostProps) {
	return (
		<section className={styles.featuredSection}>
			<Link href={`/blog/${post.slug}`}>
				<article className={styles.featuredPost}>
					<div className={styles.featuredContent}>
						<h2 className={styles.featuredTitle}>{post.title}</h2>
						<time className={styles.featuredDate} dateTime={post.date}>
							{new Date(post.date).toLocaleDateString("en-US", {
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</time>
						<div
							className={styles.featuredExcerpt}
							dangerouslySetInnerHTML={{ __html: contentHtml }}
						/>
						<span className={styles.readMore}>Read more →</span>
					</div>
					{post.coverImage && (
						<div className={styles.featuredImageContainer}>
							<Image
								src={post.coverImage}
								alt={post.title}
								width={200}
								height={150}
								className={styles.featuredImage}
							/>
						</div>
					)}
				</article>
			</Link>
		</section>
	);
}
