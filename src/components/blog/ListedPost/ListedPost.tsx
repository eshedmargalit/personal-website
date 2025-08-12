import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/interfaces/post";
import styles from "./ListedPost.module.css";

interface PostWithTaglineHtml extends Post {
	taglineHtml: string;
}

interface ListedPostProps {
	post: PostWithTaglineHtml;
}

export default function ListedPost({ post }: ListedPostProps) {
	return (
		<Link href={`/blog/${post.slug}`}>
			<article className={styles.postCard}>
				<div className={styles.postCardContent}>
					<h3 className={styles.postCardTitle}>{post.title}</h3>
					<div
						className={styles.postCardExcerpt}
						dangerouslySetInnerHTML={{ __html: post.taglineHtml }}
					/>
				</div>
				{post.coverImage && (
					<div className={styles.postCardImageContainer}>
						<Image
							src={post.coverImage}
							alt={post.title}
							width={300}
							height={120}
							className={styles.postCardImage}
						/>
					</div>
				)}
				<time className={styles.postCardDate} dateTime={post.date}>
					{new Date(post.date).toLocaleDateString("en-US", {
						year: "numeric",
						month: "short",
						day: "numeric",
					})}
				</time>
			</article>
		</Link>
	);
}
