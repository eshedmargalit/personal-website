import type React from "react";
import styles from "@/app/cv/cv.module.css";
import { SubtleLink } from "@/components/SubtleLink";
import { CVContent, CVDate, CVItem, CVMain } from "./CVComponents";
import { CVSection } from "./CVSection";
import { highlightName } from "./utils";

interface PresentationItem {
	title: string;
	authors: string[];
	journal: string;
	year: string;
	url?: string;
}

interface PresentationsSectionProps {
	invited: PresentationItem[];
	orals: PresentationItem[];
	posters: PresentationItem[];
	formatAuthors: (authors: string[]) => string;
}

const PresentationSubsection: React.FC<{
	title: string;
	items: PresentationItem[];
	formatAuthors: (authors: string[]) => string;
	keyPrefix: string;
}> = ({ title, items, formatAuthors, keyPrefix }) => {
	if (items.length === 0) return null;

	return (
		<>
			<h3 className={styles.subsectionTitle}>{title}</h3>
			{items.map((item) => (
				<CVItem
					key={`${keyPrefix}-${item.title.substring(0, 30)}-${item.year}`}
					className={`${styles.cvItem} ${styles.publication}`}
				>
					<CVContent>
						<CVMain>
							<p className={styles.pubTitle}>
								{item.url ? (
									<SubtleLink href={item.url} external>
										{item.title}
									</SubtleLink>
								) : (
									item.title
								)}
							</p>
							<p className={styles.pubAuthors}>
								{highlightName(formatAuthors(item.authors))}
							</p>
							<p className={styles.pubJournal}>
								<em>{item.journal}</em>
							</p>
						</CVMain>
						<CVDate>{item.year}</CVDate>
					</CVContent>
				</CVItem>
			))}
		</>
	);
};

export const PresentationsSection: React.FC<PresentationsSectionProps> = ({
	invited,
	orals,
	posters,
	formatAuthors,
}) => {
	const hasContent =
		invited.length > 0 || orals.length > 0 || posters.length > 0;

	return (
		<CVSection title="Presentations" show={hasContent}>
			<PresentationSubsection
				title="Invited Talks"
				items={invited}
				formatAuthors={formatAuthors}
				keyPrefix="invited"
			/>
			<PresentationSubsection
				title="Oral Presentations"
				items={orals}
				formatAuthors={formatAuthors}
				keyPrefix="oral"
			/>
			<PresentationSubsection
				title="Posters"
				items={posters}
				formatAuthors={formatAuthors}
				keyPrefix="poster"
			/>
		</CVSection>
	);
};
