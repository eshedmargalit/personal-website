import type React from "react";
import { CVContent, CVDate, CVItem, CVMain } from "./CVComponents";
import { CVSection } from "./CVSection";

interface ServiceItem {
	role: string;
	years: string;
}

interface ServiceSectionProps {
	items: ServiceItem[];
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({ items }) => {
	return (
		<CVSection title="Service" show={items.length > 0}>
			{items.map((item) => (
				<CVItem key={`${item.role}-${item.years}`}>
					<CVContent>
						<CVMain>
							<h3>{item.role}</h3>
						</CVMain>
						<CVDate>{item.years}</CVDate>
					</CVContent>
				</CVItem>
			))}
		</CVSection>
	);
};
