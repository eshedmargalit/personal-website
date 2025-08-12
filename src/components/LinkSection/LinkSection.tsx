import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGooglescholar, SiOpenai } from "react-icons/si";
import styles from "./LinkSection.module.css";

const links = [
	{
		href: "https://www.linkedin.com/in/eshed-margalit-437222a7/",
		label: "LinkedIn",
		icon: <FaLinkedin />,
	},
	{
		href: "https://github.com/eshedmargalit",
		label: "GitHub",
		icon: <FaGithub />,
	},
	{
		href: "https://scholar.google.com/citations?user=ijttsicAAAAJ&hl=en&oi=ao",
		label: "Google Scholar",
		icon: <SiGooglescholar />,
	},
	{
		href: "https://chatgpt.com/?q=Tell%20Me%20About%20Eshed%20Margalit%20PhD&hints=search",
		label: "OpenAI",
		icon: <SiOpenai />,
	},
	{
		href: "https://google.com/search?q=Eshed+Margalit&kgmid=/g/11f0ztk6xb",
		label: "Google Search",
		icon: <FaGoogle />,
	},
	{
		href: "https://x.com/eshedmargalit",
		label: "X (Twitter)",
		icon: <FaXTwitter />,
	},
];

export default function LinkSection() {
	return (
		<div className={styles.grid}>
			{links.map((link) => (
				<a
					key={link.label}
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					className={styles.iconButton}
					aria-label={link.label}
				>
					{link.icon}
				</a>
			))}
		</div>
	);
}
