import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const gabarito = Gabarito({
	variable: "--font-gabarito",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NODE_ENV === "production"
			? process.env.VERCEL_URL
				? `https://${process.env.VERCEL_URL}`
				: "https://eshedmargalit.com" // fallback production URL
			: "http://localhost:3000",
	),
	title: "Eshed Margalit",
	description: "Personal website for Eshed Margalit, PhD",
	icons: {
		icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧠</text></svg>",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${gabarito.variable} `}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
