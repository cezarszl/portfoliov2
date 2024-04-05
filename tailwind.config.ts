import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-body': '#1D1E20',
      },
      textColor: {
        'custom-body': '#DADADB',
      },
      height: {
        '80vh': '80vh',
      },
    },
  },
  plugins: [],
};
export default config;
