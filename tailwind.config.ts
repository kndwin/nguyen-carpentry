import type { Config } from "tailwindcss";
import { createPlugin } from "windy-radix-palette";
const colors = createPlugin();

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  plugins: [colors.plugin, require("@tailwindcss/typography")],
  presets: [require("windy-radix-typography")],
};
export default config;
