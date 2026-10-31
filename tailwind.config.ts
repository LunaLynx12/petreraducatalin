import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,md}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "#F4F1EB",
        canvas: "#F4F1EB",
        surface: "#FBF9F5",
        "surface-2": "#EDE8DF",
        line: "#DCD6CA",
        "line-strong": "#C6BFAF",
        border: "#DCD6CA",
        input: "#D6CFC2",
        ring: "#4A5D6E",
        ink: "#16181B",
        "ink-soft": "#2C3034",
        body: "#4B4F54",
        foreground: "#16181B",
        primary: {
          DEFAULT: "#4A5D6E",
          foreground: "#FBF9F5",
        },
        secondary: {
          DEFAULT: "#5F6E7A",
          foreground: "#FBF9F5",
        },
        accent: {
          DEFAULT: "#4A5D6E",
          foreground: "#FBF9F5",
        },
        "accent-soft": "#E3E8EC",
        "accent-strong": "#37485A",
        "accent-light": "#93A7B8",
        clay: "#9A6B4F",
        muted: {
          DEFAULT: "#66686B",
          foreground: "#66686B",
        },
        night: {
          DEFAULT: "#111417",
          surface: "#181C20",
          text: "#ECE9E2",
          muted: "#A2A29D",
          line: "rgba(236, 233, 226, 0.14)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        panel: "2px",
      },
      boxShadow: {
        glow: "0 18px 48px -28px rgba(22, 24, 27, 0.35)",
        "glow-sm": "0 10px 30px -22px rgba(22, 24, 27, 0.3)",
        "glow-cyan": "0 18px 48px -28px rgba(74, 93, 110, 0.28)",
        portrait: "0 40px 90px -48px rgba(22, 24, 27, 0.45)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "line-grow": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        marquee: "marquee 80s linear infinite",
        "marquee-slow": "marquee 110s linear infinite",
        blink: "blink 1.1s step-end infinite",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "line-grow": "line-grow 1.4s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
};

export default config;
