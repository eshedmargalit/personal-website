"use client";

import { FaFilePdf } from "react-icons/fa6";
import { Skill, skills } from "@/components/resume/Skill";
import { SubtleLink } from "@/components/SubtleLink";
import styles from "./resume.module.css";

export default function ResumePage() {
	return (
		<div className="page resume">
			<h1 className={styles.resumeTitle}>Resume</h1>
			<div className={styles.resumeDownload}>
				<a
					href="/202507_Resume.pdf"
					className={styles.resumeDownloadLink}
					title="Download Resume PDF"
				>
					<FaFilePdf className={styles.downloadIcon} />
					View as PDF
				</a>
			</div>

			<div className={styles.resumeLinks}>
				<SubtleLink href="/cv">View full academic CV instead</SubtleLink>
			</div>

			<div className={styles.resumeContent}>
				<section className={styles.resumeSection}>
					<p className={styles.centeredText}>
						I am an AI scientist focused on understanding and interfacing with
						biological systems. I develop novel neural network architectures and
						apply them to complex spatial data in vision and biology. In my PhD,
						I developed neural networks that predict the structure, function,
						and development of the brain&apos;s visual system. I&apos;ve also
						worked as the Principal AI Scientist at a stealth research startup
						building flexible and queryable self-supervised learning systems.
					</p>
				</section>

				{/* Experience Section */}
				<section className={styles.resumeSection}>
					<h2>
						<span>Professional Experience</span>
					</h2>

					{/* Noetik */}
					<div className={styles.resumeItem}>
						<div className={styles.resumeItemHeader}>
							<div className={styles.resumeItemTitle}>
								<h3>Principal Machine Learning Scientist</h3>
								<h4>Noetik, Inc.</h4>
							</div>
							<div className={styles.resumeDate}>2023 - Present</div>
						</div>
						<div className={styles.resumeItemDetails}>
							<ul>
								<li>
									Developing novel Transformer-based models to learn from
									large-scale multimodal biological data and applying those
									models to propose precision immunotherapies
								</li>
								<li>
									Designed and wrote a flexible, scalable ML framework for
									distributed model training with PyTorch, Ray, and a custom
									train loop
								</li>
								<li>
									Leading AI interpretability work, including integration with
									SAEs, LLMs and custom web UIs for data exploration and model
									inference
								</li>
							</ul>
						</div>
					</div>

					{/* Stealth Startup */}
					<div className={styles.resumeItem}>
						<div className={styles.resumeItemHeader}>
							<div className={styles.resumeItemTitle}>
								<h3>Principal AI Scientist</h3>
								<h4>Stealth Startup</h4>
							</div>
							<div className={styles.resumeDate}>2023</div>
						</div>
						<div className={styles.resumeItemDetails}>
							<ul>
								<li>
									Founding engineer; developed experimental self-supervised ML
									systems alongside full-stack web applications for interfacing
									with trained models.
								</li>
							</ul>
						</div>
					</div>

					{/* Stanford */}
					<div className={styles.resumeItem}>
						<div className={styles.resumeItemHeader}>
							<div className={styles.resumeItemTitle}>
								<h3>Researcher</h3>
								<h4>Stanford University</h4>
							</div>
							<div className={styles.resumeDate}>2016-2023</div>
						</div>
						<div className={styles.resumeItemDetails}>
							<ul>
								<li>
									Invented topographic deep artificial neural networks (TDANNs),
									the first models to predict the functional organization of
									visual cortex by discovering brain-like constraints
								</li>
								<li>
									Published 16 papers and preprints in computational
									neuroscience and machine learning, cited by 700+. Presented at
									leading conferences while working with profs. Dan Yamins,
									Kalanit Grill-Spector, and Irving Biederman
								</li>
							</ul>
						</div>
					</div>

					{/* ANC */}
					<div className={styles.resumeItem}>
						<div className={styles.resumeItemHeader}>
							<div className={styles.resumeItemTitle}>
								<h3>Lead Research Scientist</h3>
								<h4>ANC Group, LLC</h4>
							</div>
							<div className={styles.resumeDate}>2019-2023</div>
						</div>
						<div className={styles.resumeItemDetails}>
							<ul>
								<li>
									Sole developer of a scalable, cost-effective solution for
									tracking passengers in airports using a custom ML processing
									pipeline. Includes face detection, OCR, design and detection
									of custom 3D-printed barcodes in CT scans, real-time
									dashboards, and ML-based timeseries clustering
								</li>
								<li>
									Ran dev-ops, orchestrated cloud resources, recruited and
									supervised ML/stats interns, generated reports for Department
									of Homeland Security, secured funding
								</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Skills Section */}
				<section className={styles.resumeSection}>
					<h2>
						<span>Skills</span>
					</h2>
					<div className={styles.skillsGrid}>
						{skills.map((skill) => (
							<Skill key={skill.name} name={skill.name} icon={skill.icon} />
						))}
					</div>
				</section>

				{/* Education Section */}
				<section className={styles.resumeSection}>
					<h2>
						<span>Education</span>
					</h2>
					<div className={styles.resumeItem}>
						<div className={styles.resumeItemHeader}>
							<div className={styles.resumeItemTitle}>
								<h3>PhD in Neurosciences</h3>
								<h4>Stanford University</h4>
							</div>
							<div className={styles.resumeDate}>2016-2022</div>
						</div>
						<div className={styles.resumeItemDetails}>
							<p>
								Dissertation: A Unified Model of the Structure and Function of
								Primate Visual Cortex
							</p>
							<p>Advisors: Profs. Dan Yamins and Kalanit Grill-Spector</p>
						</div>
					</div>
					<div className={styles.resumeItem}>
						<div className={styles.resumeItemHeader}>
							<div className={styles.resumeItemTitle}>
								<h3>BS in Computational Neuroscience</h3>
								<h4>Minor in Computer Science</h4>
								<h4> University of Southern California</h4>
							</div>
							<div className={styles.resumeDate}>2016-2022</div>
						</div>
					</div>
				</section>

				{/* Awards and Hobbies Section */}
				<section className={styles.resumeSection}>
					<h2>
						<span>Awards and Hobbies</span>
					</h2>
					<div className={styles.resumeItemDetails}>
						<ul>
							<li>
								Co-author of NVIDIA Best Paper in NeuroAI Award, SVRHM @ NeurIPS
								2022
							</li>
							<li>
								Grew personal habit-tracker into open-source website where 300+
								users share their notes on academic papers. Personally reviewed
								200+ papers in neuroscience and ML (1/wk for 4 years)
							</li>
							<li>
								Highest GPA in USC class of 2016, 2x USC Best Neuroscience
								Student, NSF GRFP Winner
							</li>
							<li>
								Triathlete, guitarist, trail runner, rock climber, unix + vim
								enthusiast
							</li>
						</ul>
					</div>
				</section>
			</div>
		</div>
	);
}
