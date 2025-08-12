import type React from "react";
import { SubtleLink } from "@/components/SubtleLink";
import { CVContent, CVItem, CVMain } from "./CVComponents";
import { CVSection } from "./CVSection";

interface ScicommItem {
	title: string;
	description: string;
	url?: string;
}

interface ScicommSectionProps {
	items: ScicommItem[];
}

export const ScicommSection: React.FC<ScicommSectionProps> = ({ items }) => {
	return (
		<CVSection title="Scientific Communication" show={items.length > 0}>
			{items.map((item) => (
				<CVItem
					key={`${item.title.substring(0, 30)}-${item.description.substring(0, 20)}`}
				>
					<CVContent>
						<CVMain>
							<h3>
								{item.url ? (
									<SubtleLink href={item.url} external>
										{item.title}
									</SubtleLink>
								) : (
									item.title
								)}
							</h3>
							<p className="description">{item.description}</p>
						</CVMain>
					</CVContent>
				</CVItem>
			))}
		</CVSection>
	);
};
