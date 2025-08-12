"use client";

import { FaFilePdf } from "react-icons/fa6";
import {
	AwardsSection,
	EducationSection,
	MentorshipSection,
	PresentationsSection,
	PublicationsSection,
	ScicommSection,
	ServiceSection,
	TeachingSection,
	TrainingSection,
} from "@/components/CV";
import { SubtleLink } from "@/components/SubtleLink";
import awards from "@/data/cv/awards.json";
import education from "@/data/cv/education.json";
import invited from "@/data/cv/invited.json";
import mentorship from "@/data/cv/mentorship.json";
import orals from "@/data/cv/orals.json";
import posters from "@/data/cv/posters.json";
import preprints from "@/data/cv/preprints.json";
import publications from "@/data/cv/publications.json";
import scicomm from "@/data/cv/scicomm.json";
import service from "@/data/cv/service.json";
import teaching from "@/data/cv/teaching.json";
import training from "@/data/cv/training.json";
import styles from "./cv.module.css";

function formatAuthors(authors: string[]): string {
	if (authors.length === 1) {
		return authors[0];
	} else if (authors.length === 2) {
		return `${authors[0]} and ${authors[1]}`;
	} else {
		const lastAuthor = authors[authors.length - 1];
		const otherAuthors = authors.slice(0, -1).join(", ");
		return `${otherAuthors} and ${lastAuthor}`;
	}
}

export default function CVPage() {
	return (
		<div className="page cv">
			<h1 className={styles.cvTitle}>Curriculum Vitae</h1>
			<div className={styles.cvDownload}>
				<a
					href="/202507_CV.pdf"
					className={styles.cvDownloadLink}
					title="Download CV PDF"
				>
					<FaFilePdf className={styles.downloadIcon} />
					View as PDF
				</a>
			</div>

			<div className={styles.cvLinks}>
				<SubtleLink href="/resume">View professional resume instead</SubtleLink>
			</div>

			<EducationSection items={education} />
			<TrainingSection items={training} />
			<PublicationsSection
				publications={publications}
				preprints={preprints}
				formatAuthors={formatAuthors}
			/>
			<AwardsSection items={awards} />
			<PresentationsSection
				invited={invited}
				orals={orals}
				posters={posters}
				formatAuthors={formatAuthors}
			/>
			<TeachingSection items={teaching} />
			<MentorshipSection items={mentorship} />
			<ServiceSection items={service} />
			<ScicommSection items={scicomm} />
		</div>
	);
}
