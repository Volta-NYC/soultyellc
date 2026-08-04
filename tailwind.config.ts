import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF1DC",
        butter: "#F8E3B0",
        peach: "#F5C58E",
        marigold: "#E89B2C",
        tomato: "#D24B2A",
        brick: "#A8341C",
        forest: "#2F5D3B",
        olive: "#7C8B3A",
        ink: "#1A1410",
        charcoal: "#2A211B",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        hand: ["var(--font-hand)", "cursive"],
        sans: ["var(--font-sans)", "ui-rounded", "Trebuchet MS", "sans-serif"],
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "fade-up": "fadeUp 0.8s ease-out both",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
export default config
