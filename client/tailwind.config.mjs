/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-frank-ruhl-libre)', 'serif'],
        body: ['var(--font-rubik)', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FEE198",
        textColor:"#7A7E83",
        blackBG:"#171A1B",
        grayBg:"#F8F7F5",
        borderColor:"#EAEAEA"
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
