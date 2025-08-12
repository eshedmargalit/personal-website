import type React from "react";
import { SubtleLink } from "@/components/SubtleLink";
import { CVContent, CVDate, CVItem, CVMain } from "./CVComponents";
import { CVSection } from "./CVSection";

interface AwardItem {
	name: string;
	years: string;
	description?: string;
	url?: string;
}

interface AwardsSectionProps {
	items: AwardItem[];
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({ items }) => {
	return (
		<CVSection title="Awards and Honors" show={items.length > 0}>
			{items.map((award) => (
				<CVItem key={`${award.name}-${award.years}`}>
					<CVContent>
						<CVMain>
							<h3>
								{award.url ? (
									<SubtleLink href={award.url} external>
										{award.name}
									</SubtleLink>
								) : (
									award.name
								)}
							</h3>
							{award.description && (
								<p className="description">{award.description}</p>
							)}
						</CVMain>
						<CVDate>{award.years}</CVDate>
					</CVContent>
				</CVItem>
			))}
		</CVSection>
	);
};
