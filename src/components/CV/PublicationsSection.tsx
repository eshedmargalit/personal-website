import type React from "react";
import styles from "@/app/cv/cv.module.css";
import { SubtleLink } from "@/components/SubtleLink";
import { CVContent, CVDate, CVItem, CVMain } from "./CVComponents";
import { CVSection } from "./CVSection";
import { highlightName } from "./utils";

interface PublicationItem {
	title: string;
	authors: string[];
	journal: string;
	year: string;
	url?: string;
	volume?: string;
	pages?: string;
}

interface PublicationsSectionProps {
	publications: PublicationItem[];
	preprints: PublicationItem[];
	formatAuthors: (authors: string[]) => string;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({
	publications,
	preprints,
	formatAuthors,
}) => {
	const hasContent = publications.length > 0 || preprints.length > 0;

	return (
		<CVSection title="Publications" show={hasContent}>
			{publications.length > 0 && (
				<>
					<h3 className={styles.subsectionTitle}>Peer-Reviewed</h3>
					{publications.map((pub) => (
						<CVItem
							key={`${pub.title.substring(0, 30)}-${pub.year}`}
							className={`${styles.cvItem} ${styles.publication}`}
						>
							<CVContent>
								<CVMain>
									<p className={styles.pubTitle}>
										{pub.url ? (
											<SubtleLink href={pub.url} external>
												{pub.title}
											</SubtleLink>
										) : (
											pub.title
										)}
									</p>
									<p className={styles.pubAuthors}>
										{highlightName(formatAuthors(pub.authors))}
									</p>
									<p className={styles.pubJournal}>
										<em>{pub.journal}</em>
										{pub.volume && <span>{pub.volume}</span>}
										{pub.pages && <span>{pub.pages}</span>}
									</p>
								</CVMain>
								<CVDate>{pub.year}</CVDate>
							</CVContent>
						</CVItem>
					))}
				</>
			)}

			{preprints.length > 0 && (
				<>
					<h3 className={styles.subsectionTitle}>Preprints</h3>
					{preprints.map((preprint) => (
						<CVItem
							key={`${preprint.title.substring(0, 30)}-${preprint.year}`}
							className={`${styles.cvItem} ${styles.publication}`}
						>
							<CVContent>
								<CVMain>
									<p className={styles.pubTitle}>
										{preprint.url ? (
											<SubtleLink href={preprint.url} external>
												{preprint.title}
											</SubtleLink>
										) : (
											preprint.title
										)}
									</p>
									<p className={styles.pubAuthors}>
										{highlightName(formatAuthors(preprint.authors))}
									</p>
									<p className={styles.pubJournal}>
										<em>{preprint.journal}</em>
									</p>
								</CVMain>
								<CVDate>{preprint.year}</CVDate>
							</CVContent>
						</CVItem>
					))}
				</>
			)}
		</CVSection>
	);
};
