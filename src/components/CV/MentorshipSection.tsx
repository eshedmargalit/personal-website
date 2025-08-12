import type React from "react";
import { CVContent, CVDate, CVItem, CVMain } from "./CVComponents";
import { CVSection } from "./CVSection";

interface MentorshipItem {
	role: string;
	start: string;
	end: string;
}

interface MentorshipSectionProps {
	items: MentorshipItem[];
}

export const MentorshipSection: React.FC<MentorshipSectionProps> = ({
	items,
}) => {
	return (
		<CVSection title="Mentorship" show={items.length > 0}>
			{items.map((item) => (
				<CVItem key={`mentorship-${item.role}-${item.start}-${item.end}`}>
					<CVContent>
						<CVMain>
							<h3>{item.role}</h3>
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
