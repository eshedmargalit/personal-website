import type React from "react";
import { SubtleLink } from "@/components/SubtleLink";
import { CVContent, CVDate, CVItem, CVMain } from "./CVComponents";
import { CVSection } from "./CVSection";

interface TrainingItem {
	labName: string;
	pi: string;
	description: string;
	start: string;
	end: string;
	url?: string;
}

interface TrainingSectionProps {
	items: TrainingItem[];
}

export const TrainingSection: React.FC<TrainingSectionProps> = ({ items }) => {
	return (
		<CVSection title="Training" show={items.length > 0}>
			{items.map((item) => (
				<CVItem key={`${item.labName}-${item.start}-${item.end}`}>
					<CVContent>
						<CVMain>
							<h3>
								{item.url ? (
									<SubtleLink href={item.url} external>
										{item.labName}
									</SubtleLink>
								) : (
									item.labName
								)}
							</h3>
							<p className="pi">PI: {item.pi}</p>
							<p className="description">{item.description}</p>
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
