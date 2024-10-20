import type { Config } from "tailwindcss";

const config: Config = {
	plugins: [require("daisyui"), require("@tailwindcss/typography")],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#f59e0b",
					secondary: "#0284c7",
					accent: "#1dcdbc",
					neutral: "#2b3440",
					"base-100": "#ffffff",
					info: "#3abff8",
					success: "#36d399",
					warning: "#fde047",
					error: "#f87272",
				},
			},
		],
	},
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: "100ch",
					},
				},
			},
		},
	},
};

export default config;
