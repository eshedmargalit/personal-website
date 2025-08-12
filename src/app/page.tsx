import Header from "@/components/Header";
import "./globals.css";
import RecentNews from "@/components/RecentNews";

export default function Home() {
	return (
		<main className="page">
			<Header />
			<RecentNews />
		</main>
	);
}
