import styles from "./PostBody.module.css";

interface PostBodyProps {
	content: string;
}

export function PostBody({ content }: PostBodyProps) {
	return (
		<div className={styles.content}>
			<div
				className={styles.markdown}
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
	);
}
