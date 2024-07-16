import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntuL': ['"Ubuntu-light"'],
        'ubuntu': ['"Ubuntu"'],
        'ubuntuB': ['"Ubuntu-bold"'],
        'gruppo': ['"Gruppo"'],
      }
    },
  },
  plugins: [],
};
export default config;
