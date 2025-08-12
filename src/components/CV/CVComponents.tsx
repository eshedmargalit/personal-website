import type React from "react";
import styles from "@/app/cv/cv.module.css";

interface CVItemProps {
	children: React.ReactNode;
	className?: string;
}

export const CVItem: React.FC<CVItemProps> = ({
	children,
	className = styles.cvItem,
}) => {
	return <div className={className}>{children}</div>;
};

interface CVContentProps {
	children: React.ReactNode;
}

export const CVContent: React.FC<CVContentProps> = ({ children }) => {
	return <div className={styles.cvContent}>{children}</div>;
};

interface CVMainProps {
	children: React.ReactNode;
}

export const CVMain: React.FC<CVMainProps> = ({ children }) => {
	return <div className={styles.cvMain}>{children}</div>;
};

interface CVDateProps {
	children: React.ReactNode;
}

export const CVDate: React.FC<CVDateProps> = ({ children }) => {
	return <div className={styles.cvDate}>{children}</div>;
};
