import type React from "react";
import styles from "@/app/cv/cv.module.css";

export function highlightName(text: string): React.JSX.Element {
	const parts = text.split(/(Margalit, E\.)/g);
	return (
		<>
			{parts.map((part, index) =>
				part === "Margalit, E." ? (
					<span
						key={`highlight-${part}-${index}-${parts.length}`}
						className={styles.highlightedName}
					>
						{part}
					</span>
				) : (
					<span key={`text-${part}-${index}-${parts.length}`}>{part}</span>
				),
			)}
		</>
	);
}
