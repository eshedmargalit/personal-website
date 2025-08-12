import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostBody } from "@/components/blog/PostBody";
import { PostHeader } from "@/components/blog/PostHeader";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function Post(props: Params) {
	const params = await props.params;
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	const content = await markdownToHtml(post.content || "");

	return (
		<main className="page">
			<article>
				<PostHeader
					title={post.title}
					coverImage={post.coverImage}
					date={post.date}
					tagline={post.tagline}
				/>
				<PostBody content={content} />
			</article>
		</main>
	);
}

type Params = {
	params: Promise<{
		slug: string;
	}>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
	const params = await props.params;
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	const title = `${post.title} | Eshed Margalit`;

	return {
		title,
		openGraph: {
			title,
			images: [post.ogImage.url],
		},
	};
}

export async function generateStaticParams() {
	const posts = getAllPosts();

	return posts.map((post) => ({
		slug: post.slug,
	}));
}
