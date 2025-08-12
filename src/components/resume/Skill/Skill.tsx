import type React from "react";
import { FaAws } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
	SiAnthropic,
	SiDocker,
	SiElectron,
	SiLightning,
	SiOpenai,
	SiOpencv,
	SiPytorch,
	SiRay,
	SiReact,
	SiScikitlearn,
	SiTypescript,
	SiWeightsandbiases,
} from "react-icons/si";
import { TbBrandPython } from "react-icons/tb";
import styles from "./Skill.module.css";

interface SkillProps {
	name: string;
	icon: React.ReactNode;
}

export const Skill: React.FC<SkillProps> = ({ name, icon }) => {
	return (
		<div className={styles.skill}>
			<div className={styles.skillIcon}>{icon}</div>
			<div className={styles.skillName}>{name}</div>
		</div>
	);
};

// Export skill data with appropriate icons
export const skills = [
	{ name: "Python", icon: <TbBrandPython /> },
	{ name: "PyTorch", icon: <SiPytorch /> },
	{ name: "PyTorch Lightning", icon: <SiLightning /> },
	{ name: "Ray", icon: <SiRay /> },
	{ name: "EC2 · Sagemaker · Hyperpod · S3", icon: <FaAws /> },
	{ name: "W&B", icon: <SiWeightsandbiases /> },
	{ name: "OpenAI API", icon: <SiOpenai /> },
	{ name: "Anthropic API", icon: <SiAnthropic /> },
	{ name: "OpenCV", icon: <SiOpencv /> },
	{ name: "Scikit-Learn", icon: <SiScikitlearn /> },
	{ name: "Docker", icon: <SiDocker /> },
	{ name: "Typescript", icon: <SiTypescript /> },
	{ name: "React", icon: <SiReact /> },
	{ name: "Electron", icon: <SiElectron /> },
	{ name: "NextJS", icon: <RiNextjsFill /> },
];
