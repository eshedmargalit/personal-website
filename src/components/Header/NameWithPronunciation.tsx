import styles from "./NameWithPronunciation.module.css";

interface NameWithPronunciationProps {
	children: React.ReactNode;
	pronunciation: string;
}

export function NameWithPronunciation({
	children,
	pronunciation,
}: NameWithPronunciationProps) {
	return (
		<span className={styles.nameContainer}>
			<span className={styles.name}>{children}</span>
			<span className={styles.tooltip}>{pronunciation}</span>
		</span>
	);
}
