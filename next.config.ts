import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	redirects: async () => {
		return [
			{
				source: "/dprime_calculator",
				destination: "https://dprime-calculator.vercel.app/",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
