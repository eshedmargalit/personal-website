import type React from "react";
import styles from "@/app/cv/cv.module.css";

interface CVSectionProps {
	title: string;
	children: React.ReactNode;
	show?: boolean;
}

export const CVSection: React.FC<CVSectionProps> = ({
	title,
	children,
	show = true,
}) => {
	if (!show) return null;

	return (
		<section className={styles.cvSection}>
			<h2>
				<span>{title}</span>
			</h2>
			{children}
		</section>
	);
};
