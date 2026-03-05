import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#050508",
        surface: "#0d0d14",
        "surface-2": "#13131e",
        "surface-3": "#1a1a28",
        border: "#1e1e2e",
        "border-bright": "#2a2a3e",
        muted: "#6b7280",
        "muted-2": "#4b5563",
        accent: "#6366f1",
        "accent-2": "#8b5cf6",
        "accent-3": "#06b6d4",
        foreground: "#f8fafc",
        "foreground-2": "#cbd5e1",
        "foreground-3": "#94a3b8",
        success: "#10b981",
        warning: "#f59e0b",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.15), transparent)",
        "accent-gradient": "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)",
        "card-gradient": "linear-gradient(135deg, rgba(99,102,241,0.05), rgba(139,92,246,0.05))",
      },
      animation: {
        "marquee": "marquee 25s linear infinite",
        "marquee2": "marquee2 25s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
        "spin-slow": "spin 8s linear infinite",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "from": { boxShadow: "0 0 20px rgba(99,102,241,0.3)" },
          "to": { boxShadow: "0 0 40px rgba(139,92,246,0.5), 0 0 60px rgba(99,102,241,0.2)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "glow-sm": "0 0 10px rgba(99,102,241,0.2)",
        "glow-md": "0 0 20px rgba(99,102,241,0.3)",
        "glow-lg": "0 0 40px rgba(99,102,241,0.4)",
        "glow-accent": "0 0 30px rgba(139,92,246,0.3)",
        "card": "0 1px 0 rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 1px 0 rgba(255,255,255,0.06), 0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.2)",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
