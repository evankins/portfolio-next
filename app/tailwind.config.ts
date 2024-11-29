import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			inter: ['Inter', 'sans-serif'],
		},
		colors: {
			'cornflower-blue': '#3E79D8',
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
