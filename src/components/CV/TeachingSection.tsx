import type React from "react";
import { CVContent, CVDate, CVItem, CVMain } from "./CVComponents";
import { CVSection } from "./CVSection";

interface TeachingItem {
	role: string;
	course: string;
	year: string;
}

interface TeachingSectionProps {
	items: TeachingItem[];
}

export const TeachingSection: React.FC<TeachingSectionProps> = ({ items }) => {
	return (
		<CVSection title="Teaching" show={items.length > 0}>
			{items.map((item) => (
				<CVItem key={`${item.role}-${item.course}-${item.year}`}>
					<CVContent>
						<CVMain>
							<h3>{item.role}</h3>
							<p className="course">{item.course}</p>
						</CVMain>
						<CVDate>{item.year}</CVDate>
					</CVContent>
				</CVItem>
			))}
		</CVSection>
	);
};
