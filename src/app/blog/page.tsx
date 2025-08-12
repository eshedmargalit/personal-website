import type { Metadata } from "next";
import FeaturedPost from "@/components/blog/FeaturedPost";
import ListedPost from "@/components/blog/ListedPost";
import { getAllPosts } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import styles from "./blog.module.css";

export const metadata: Metadata = {
	title: "Blog | Eshed Margalit",
	description:
		"Thoughts on computational neuroscience, AI research, and programming.",
};

export default async function BlogIndex() {
	const allPosts = getAllPosts();

	// the first post is featured; the rest get rendered separately
	const [featuredPost, ...otherPosts] = allPosts;
	const featuredContent = await markdownToHtml(
		featuredPost.tagline || `${featuredPost.content.slice(0, 300)}...`,
	);

	// Get taglines for other posts
	const otherPostsWithContent = await Promise.all(
		otherPosts.map(async (post) => ({
			...post,
			taglineHtml: await markdownToHtml(
				post.tagline || `${post.content.slice(0, 200)}...`,
			),
		})),
	);

	return (
		<main className="page">
			<h2 className={styles.sectionTitle}>Latest Post</h2>
			<FeaturedPost post={featuredPost} contentHtml={featuredContent} />

			{/* Other Posts List */}
			{otherPostsWithContent.length > 0 && (
				<section className={styles.postsSection}>
					<hr />
					<div className={styles.postsGrid}>
						{otherPostsWithContent.map((post) => (
							<ListedPost key={post.slug} post={post} />
						))}
					</div>
				</section>
			)}
		</main>
	);
}
