import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        pretendard:"var(--font-pretendardFont)",
        raleway:"var(--font-raleway)"
      },
      colors:{
        rsgYellow:{
          primary:"#FEBF00",
          accent:"#FFE066"
        },
        rsgGreen:{
          primary:"#38A169",
          accent:"#7ED957"
        },
        rsgOrange:{
          primary:"#F38138",
          accent:"#FFB07B"
        }
      }
    },
  },
  plugins: [],
};
export default config;
