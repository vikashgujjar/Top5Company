/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral scale for the light theme: 950 = headings, 600 = body, 200 = hairlines, 50 = page.
        ink: {
          950: "#0b0b14",
          900: "#14141f",
          800: "#232333",
          700: "#3a3a4d",
          600: "#55556a",
          500: "#73738a",
          400: "#9a9aad",
          300: "#c9c9d6",
          200: "#e4e4ec",
          100: "#efeff5",
          50: "#f6f7fb",
        },
        brand: {
          pink: "#f20791",
          violet: "#6d4aff",
          cyan: "#06b6d4",
          amber: "#ff9f43",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16,16,40,0.04), 0 12px 40px -12px rgba(40,30,90,0.18)",
        lift: "0 2px 4px rgba(16,16,40,0.04), 0 30px 70px -20px rgba(40,30,90,0.3)",
        glow: "0 20px 60px -15px rgba(109,74,255,0.5)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          from: { backgroundPosition: "0% 50%" },
          to: { backgroundPosition: "250% 50%" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(60px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-40px, 30px) scale(0.92)" },
        },
        "word-in": {
          from: { opacity: "0", transform: "translateY(60%)", filter: "blur(6px)" },
          to: { opacity: "1", transform: "translateY(0)", filter: "blur(0)" },
        },
        sheen: {
          "0%, 70%": { transform: "translateX(-120%) skewX(-20deg)" },
          "100%": { transform: "translateX(220%) skewX(-20deg)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        float: "float 7s ease-in-out infinite",
        "spin-slow": "spin-slow 30s linear infinite",
        shimmer: "shimmer 8s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        blob: "blob 22s ease-in-out infinite",
        "word-in": "word-in 0.6s cubic-bezier(0.2, 0.7, 0.2, 1) both",
        sheen: "sheen 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
