import { ClickableImage } from "@/components/ClickableImage";
import { SubtleLink } from "@/components/SubtleLink";
import styles from "./RecentNews.module.css";

interface RecentNewsProps {
	className?: string;
}

export const RecentNews = ({ className }: RecentNewsProps) => {
	return (
		<div className={`${styles.container} ${className || ""}`}>
			<h2>What&apos;s new:</h2>
			<div className={styles.content}>
				<ul>
					{/* CS25 Talk */}
					<li>
						<div className={styles.newsItem}>
							<div className={styles.newsContent}>
								<div className={styles.newsText}>
									I gave a lecture on multimodal world modeling, and how
									we&apos;re using it at Noetik, at Stanford&apos;s CS25&nbsp;
									<em>Transformer&apos;s United V5</em> course. You can&nbsp;
									<SubtleLink
										href="https://youtu.be/8kXIaUM3h1E?si=tTB5yiEXyaAJasNp"
										external={true}
									>
										watch it on YouTube
									</SubtleLink>
									&nbsp; or&nbsp;
									<SubtleLink
										href="/20250520.Stanford.CS25.pdf"
										external={true}
									>
										view the slides
									</SubtleLink>
									.
								</div>
								<div className={styles.newsDate}>May 2025</div>
							</div>
							<ClickableImage
								src="/news/cs25_talk_slide.png"
								alt="CS25 Stanford lecture slide preview"
								url="https://youtu.be/8kXIaUM3h1E?si=tTB5yiEXyaAJasNp"
								width={600}
								height={400}
								className={styles.newsImage}
								isDark
							/>
						</div>
					</li>

					{/* OCTO Report 2*/}
					<li>
						<div className={styles.newsItem}>
							<div className={styles.newsContent}>
								<div className={styles.newsText}>
									We (Noetik) released a technical report on our virtual cell
									work,&nbsp;
									<SubtleLink
										href="https://www.noetik.ai/octo-vc"
										external={true}
									>
										<em>
											Simulating Spatial Biology with Virtual Cells and Cellular
											Systems
										</em>
									</SubtleLink>
									, alongside a&nbsp;
									<SubtleLink
										href="https://celleporter.noetik.ai/"
										external={true}
									>
										companion app, <em>Celleporter</em>
									</SubtleLink>
									, that I developed.
								</div>
								<div className={styles.newsDate}>Dec 2024</div>
							</div>
							<ClickableImage
								src="/news/celleporter_frame.jpg"
								alt="OCTO virtual cell report preview"
								url="https://www.noetik.ai/octo-vc"
								width={600}
								height={400}
								className={styles.newsImage}
								isDark
							/>
						</div>
					</li>

					{/* TDANN */}
					<li>
						<div className={styles.newsItem}>
							<div className={styles.newsContent}>
								<div className={styles.newsText}>
									My core PhD research on brain-inspired neural network models
									of visual cortex is now published in <em>Neuron</em>.&nbsp;
									<SubtleLink
										href="https://www.cell.com/neuron/fulltext/S0896-6273(24)00279-4"
										external={true}
									>
										Read the paper
									</SubtleLink>
									&nbsp; or check out&nbsp;
									<SubtleLink
										href="https://redwood.berkeley.edu/seminars/eshed-margalit-june-2023/"
										external={true}
									>
										a recent talk I gave on this work
									</SubtleLink>
									.
								</div>
								<div className={styles.newsDate}>Jul 2024</div>
							</div>
							<ClickableImage
								src="/news/tdann_f01.jpg"
								alt="TDANN paper figure preview"
								url="https://www.cell.com/neuron/fulltext/S0896-6273(24)00279-4"
								width={600}
								height={400}
								className={styles.newsImage}
							/>
						</div>
					</li>

					{/* OCTO Report 1 */}
					<li>
						<div className={styles.newsItem}>
							<div className={styles.newsContent}>
								<div className={styles.newsText}>
									The first technical report describing our approach to world
									modeling at Noetik is out now:&nbsp;
									<SubtleLink href="https://www.noetik.ai/octo" external={true}>
										<em>World Models as Simulators of Patient Biology</em>
									</SubtleLink>
									.
								</div>
								<div className={styles.newsDate}>Jul 2024</div>
							</div>
							<ClickableImage
								src="/news/model_diagram.png"
								alt="OCTO model diagram"
								url="https://www.noetik.ai/octo"
								width={600}
								height={400}
								className={styles.newsImage}
								isDark
							/>
						</div>
					</li>

					{/* Milameter */}
					<li>
						<div className={styles.newsItem}>
							<div className={styles.newsContent}>
								<div className={styles.newsText}>
									My brother and I launched&nbsp;
									<SubtleLink href="https://www.milameter.run/" external={true}>
										milameter.run
									</SubtleLink>
									, an open-source Strava-integrated app that lets you sideload
									GPX files from a canine running companion and compare
									trajectories + statistics from your runs.
								</div>
								<div className={styles.newsDate}>Jan 2023</div>
							</div>
							<ClickableImage
								src="/news/milameter.png"
								alt="Screenshot from the 'About' page of the Milameter app with a photo of Mila, the dog"
								url="https://www.milameter.run/"
								width={600}
								height={400}
								className={styles.newsImage}
								isDark
							/>
						</div>
					</li>

					{/* PAW */}
					<li>
						<div className={styles.newsItem}>
							<div className={styles.newsContent}>
								<div className={styles.newsText}>
									I hit 200 consecutive weeks of detailed paper reviews on the
									free, open-source habit-tracker I built:&nbsp;
									<SubtleLink href="https://paperaweek.com" external={true}>
										Paper a Week
									</SubtleLink>
									. I no longer read papers weekly, but my notes on all 200 are
									publicly accessible&nbsp;
									<SubtleLink
										href="https://paperaweek.com/profiles/113214769483919341732"
										external
									>
										on my profile
									</SubtleLink>
									.
								</div>
								<div className={styles.newsDate}>Jan 2023</div>
							</div>
							<ClickableImage
								src="/news/paw.png"
								alt="Preview of Eshed's Paper a Week profile"
								url="https://paperaweek.com/profiles/113214769483919341732"
								width={600}
								height={400}
								className={styles.newsImage}
								isDark
							/>
						</div>
					</li>

					{/* Thesis */}
					<li>
						<div className={styles.newsItem}>
							<div className={styles.newsContent}>
								<div className={styles.newsText}>
									I defended my PhD thesis, titled&nbsp;
									<SubtleLink
										href="https://purl.stanford.edu/pn433ry1536"
										external={true}
									>
										<em>
											A unified model of the structure and function of primate
											visual cortex
										</em>
									</SubtleLink>
									.
								</div>
								<div className={styles.newsDate}>May 2022</div>
							</div>
						</div>
					</li>

					{/* CNJCx */}
					<li>
						<div className={styles.newsItem}>
							<div className={styles.newsContent}>
								<div className={styles.newsText}>
									I organized a remote, mid-pandemic 6 week mini-course covering
									shell and Python basics for scientific research. The materials
									are available on the&nbsp;
									<SubtleLink
										href="https://stanford-cnjc.github.io/#/CNJCx"
										external={true}
									>
										CNJCx website
									</SubtleLink>
									.
								</div>
								<div className={styles.newsDate}>Sep 2020</div>
							</div>
						</div>
					</li>

					{/* Sub-mm paper */}
					<li>
						<div className={styles.newsItem}>
							<div className={styles.newsContent}>
								<div className={styles.newsText}>
									My research on ultra-high spatial resolution fMRI of human
									visual cortex is out now in the{" "}
									<em>The Journal of Neuroscience</em>.&nbsp;
									<SubtleLink
										href="https://www.jneurosci.org/content/40/15/3008"
										external={true}
									>
										Link to paper.
									</SubtleLink>
								</div>
								<div className={styles.newsDate}>Apr 2020</div>
							</div>
						</div>
					</li>

					{/* Websites */}
					<li>
						<div className={styles.newsItem}>
							<div className={styles.newsContent}>
								<div className={styles.newsText}>
									I designed the websites for the Stanford&nbsp;
									<SubtleLink
										href="http://vpnl.stanford.edu/#/"
										external={true}
									>
										Vision and Perception Neuroscience Lab (VPNL)
									</SubtleLink>
									&nbsp;and the&nbsp;
									<SubtleLink
										href="https://stanford-cnjc.github.io/#/"
										external={true}
									>
										Computational Neuroscience Journal Club
									</SubtleLink>
									, which I co-led at the time.
								</div>
								<div className={styles.newsDate}>2020-2021</div>
							</div>
						</div>
					</li>

					{/* d' Calc */}
					<li>
						<div className={styles.newsItem}>
							<div className={styles.newsContent}>
								<div className={styles.newsText}>
									I made an interactive d-prime calculator for students in the
									undergrad psychology course I was a TA for.&nbsp;
									<SubtleLink
										href="https://dprime-calculator.vercel.app/"
										external={true}
									>
										Try it out
									</SubtleLink>
									!{" "}
									<em>
										Edit 2025: Claude helped me convert this to a NextJS app to
										simplify deployment.
									</em>
								</div>
								<div className={styles.newsDate}>Oct 2017</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default RecentNews;
