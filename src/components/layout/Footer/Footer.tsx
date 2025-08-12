import LinkSection from "@/components/LinkSection";
import { SubtleLink } from "@/components/SubtleLink";
import styles from "./Footer.module.css";

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.content}>
				<div className={styles.socialSection}>
					<LinkSection />
				</div>
				<div className={styles.textSection}>
					<p className={styles.footerText}>
						This website was made by me; the{" "}
						<SubtleLink
							href="https://github.com/eshedmargalit/personal-website-dev"
							external
						>
							source code is here
						</SubtleLink>
						. If you want to get in touch, my email is eshed [dot] margalit [at]
						gmail
					</p>
				</div>
			</div>
		</footer>
	);
}
