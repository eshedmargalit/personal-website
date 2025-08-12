import type React from "react";
import styles from "@/app/cv/cv.module.css";
import { CVContent, CVDate, CVItem, CVMain } from "./CVComponents";
import { CVSection } from "./CVSection";

interface EducationItem {
	degree: string;
	topic: string;
	institution: string;
	start: string;
	end: string;
	details?: string[];
}

interface EducationSectionProps {
	items: EducationItem[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({
	items,
}) => {
	return (
		<CVSection title="Education" show={items.length > 0}>
			{items.map((item) => (
				<CVItem key={`${item.degree}-${item.institution}-${item.start}`}>
					<CVContent>
						<CVMain>
							<h3>
								{item.degree} in {item.topic}
							</h3>
							<p className={styles.institution}>{item.institution}</p>
							{item.details?.map((detail, idx) => (
								<p
									key={`${detail.substring(0, 20)}-${idx}`}
									className={styles.detail}
								>
									{detail}
								</p>
							))}
						</CVMain>
						<CVDate>
							{item.start} - {item.end}
						</CVDate>
					</CVContent>
				</CVItem>
			))}
		</CVSection>
	);
};
