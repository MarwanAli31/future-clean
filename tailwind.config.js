/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1E3B",
          50: "#EEF2F8",
          100: "#D6DFEE",
          200: "#AEC0DE",
          400: "#3E5C8A",
          600: "#152D52",
          700: "#0F2545",
          800: "#0A1E3B",
          900: "#071630",
          950: "#040D1C",
        },
        skyline: {
          DEFAULT: "#2C6FF0",
          50: "#EAF2FF",
          100: "#D3E4FF",
          400: "#5B8CF5",
          500: "#2C6FF0",
          600: "#1E56C9",
        },
        mist: {
          50: "#F7F9FC",
          100: "#EEF2F7",
          200: "#E3E9F1",
        },
        leaf: {
          DEFAULT: "#1FAE59",
          50: "#E7F8ED",
          500: "#1FAE59",
          600: "#178A47",
        },
      },
      fontFamily: {
        display: ["'Cairo'", "sans-serif"],
        body: ["'Tajawal'", "sans-serif"],
      },
      backgroundImage: {
        "blueprint":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        blueprint: "40px 40px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "wipe-reveal": {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
        "streak": {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(320%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "wipe-reveal": "wipe-reveal 1s cubic-bezier(0.65, 0, 0.35, 1) both",
        "streak": "streak 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
