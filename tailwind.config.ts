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
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        background: "#0a0a0f",
        surface: "#12121a",
        "surface-2": "#1a1a24",
        border: "rgba(224, 224, 224, 0.08)",
        input: "rgba(224, 224, 224, 0.1)",
        ring: "#00ff88",
        primary: {
          DEFAULT: "#00ff88",
          foreground: "#06110a",
        },
        secondary: {
          DEFAULT: "#00ccff",
          foreground: "#041019",
        },
        accent: {
          DEFAULT: "#ff3366",
          foreground: "#ffffff",
        },
        foreground: "#e0e0e0",
        muted: {
          DEFAULT: "#8899aa",
          foreground: "#8899aa",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(0, 255, 136, 0.25)",
        "glow-sm": "0 0 12px rgba(0, 255, 136, 0.35)",
        "glow-cyan": "0 0 24px rgba(0, 204, 255, 0.2)",
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
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 255, 136, 0.25)" },
          "50%": { boxShadow: "0 0 36px rgba(0, 255, 136, 0.45)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        blink: "blink 1.1s step-end infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
};

export default config;