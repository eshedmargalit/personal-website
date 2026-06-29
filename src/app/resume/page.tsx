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
					href="/202607_Resume.pdf"
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
						worked as the founding Principal AI Scientist at a stealth research startup
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
							<h3>NOETIK, Inc.</h3>
							<div className={styles.resumeDate}>2023 - Present</div>
						</div>
						{/* Vice President, AI Research */}
						<div className={styles.resumeRoleGroup}>
							<div className={styles.resumeRole}>
								<h4>Vice President, AI Research</h4>
								<div className={styles.resumeDate}>2026 - Present</div>
							</div>
							<div className={styles.resumeItemDetails}>
								<ul>
										<li>Responsible for the direction and execution of Noetik&apos;s AI research agenda, leading a team of exceptional scientists</li>
								</ul>
							</div>
						</div>

						{/* Director, Machine Learning Research */}
						<div className={styles.resumeRoleGroup}>
							<div className={styles.resumeRole}>
								<h4>Director, Machine Learning Research</h4>
								<div className={styles.resumeDate}>2026</div>
							</div>
							<div className={styles.resumeItemDetails}>
								<ul>
									<li>
											Led training and analysis of{" "}
											<SubtleLink
												href="https://www.noetik.blog/p/tario-2-a-whole-transcriptome-foundation"
												external
											>
												TARIO-2
											</SubtleLink>
											, a multimodal model trained to predict spatial
											transcriptomics from H&amp;E images
										</li>
									<li>Oversaw application of internal foundation models to predict response to drug treatment from pre-treatment clinical samples</li>
									<li>Created internal tools integrating visualization of model inference with internal agentic AI co-scientists</li>
								</ul>
							</div>
						</div>

						{/* Machine Learning Scientist */}
						<div className={styles.resumeRoleGroup}>
							<div className={styles.resumeRole}>
								<h4>Principal Machine Learning Scientist</h4>
								<div className={styles.resumeDate}>2023 - 2025</div>
							</div>
							<div className={styles.resumeItemDetails}>
								<ul>
									<li>
										Promoted twice, to Senior then Principal, in under 1.5 years
									</li>
									<li>
										Designed and wrote from scratch a flexible, scalable ML framework for
										distributed model training with PyTorch, Ray, and a custom
										train loop that underlies all ML work at Noetik
									</li>
									<li>
										Developed{" "}
										<SubtleLink href="https://www.noetik.ai/octo" external>
											OCTO
										</SubtleLink>
										,{" "}
										<SubtleLink href="https://www.noetik.ai/octo-vc" external>
											OCTO-vc
										</SubtleLink>
										, and{" "}
										<SubtleLink
											href="https://www.noetik.blog/p/scaling-behavior-of-tario"
											external
										>
											TARIO
										</SubtleLink>
										, a family of novel and proprietary multimodal models trained on large-scale patient data. Applied these models to generate insights into patient stratification and target discovery
									</li>
									<li>
										Led AI interpretability work, including the design and training of hierarchical and counterfactual sparse autoencoders (SAEs)
									</li>
								</ul>
							</div>
						</div>
					</div>

					<hr className={styles.employerDivider} />

					{/* Stealth Startup */}
					<div className={styles.resumeItem}>
						<div className={styles.resumeItemHeader}>
							<div className={styles.resumeItemTitle}>
								<h3>Stealth Startup</h3>
								<h4>Principal AI Scientist</h4>
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

					<hr className={styles.employerDivider} />

					{/* Stanford */}
					<div className={styles.resumeItem}>
						<div className={styles.resumeItemHeader}>
							<div className={styles.resumeItemTitle}>
								<h3>Stanford University</h3>
								<h4>Researcher</h4>
							</div>
							<div className={styles.resumeDate}>2016 - 2023</div>
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

					<hr className={styles.employerDivider} />

					{/* ANC */}
					<div className={styles.resumeItem}>
						<div className={styles.resumeItemHeader}>
							<div className={styles.resumeItemTitle}>
								<h3>ANC Group, LLC</h3>
								<h4>Lead Research Scientist</h4>
							</div>
							<div className={styles.resumeDate}>2019 - 2023</div>
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
							<div className={styles.resumeDate}>2016 - 2022</div>
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
							<div className={styles.resumeDate}>2016 - 2022</div>
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
