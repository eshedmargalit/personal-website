import Image from "next/image";
import LinkSection from "@/components/LinkSection";
import { SubtleLink } from "@/components/SubtleLink";
import styles from "./Header.module.css";
import { NameWithPronunciation } from "./NameWithPronunciation";

export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.profileCol}>
				<Image
					src="/headshot.jpg"
					alt="Eshed sitting outdoors with a golden retriever puppy on his lap"
					width={200}
					height={200}
					className={styles.profileImg}
				/>
				<LinkSection />
			</div>
			<div className={styles.infoCol}>
				<h1>
					<NameWithPronunciation pronunciation="Pronounced EH-shed Marg-uh-LEET">
						Eshed Margalit
					</NameWithPronunciation>
					, PhD
				</h1>
				<h2 className={styles.subtitle}>
					Computational Neuroscience and AI Researcher
				</h2>
				<p>
					I work on machine learning for cancer immunotherapy at{" "}
					<SubtleLink href="https://noetik.ai" external>
						Noetik
					</SubtleLink>
					. My background is in computational neuroscience, computer vision, and
					Neuro-AI. I also like creating tools for scientists and sharing
					educational resources for programming and statistics.
				</p>
				<p>
					I&apos;m broadly interested in discovering how complex systems
					(especially brains!) develop, and how to understand their function and
					dysfunction with machine learning.
				</p>
				<p>
					You can find my <SubtleLink href="/cv">academic CV</SubtleLink> or{" "}
					<SubtleLink href="/resume">professional resume</SubtleLink> here,
					along with my <SubtleLink href="/blog">blog</SubtleLink>.
				</p>
			</div>
		</header>
	);
}
