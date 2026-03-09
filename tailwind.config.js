/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(20 14% 89%)",
        input: "hsl(20 14% 89%)",
        ring: "hsl(205 76% 24%)",
        background: "hsl(36 33% 97%)",
        foreground: "hsl(210 29% 18%)",
        primary: {
          DEFAULT: "hsl(205 76% 24%)",
          foreground: "hsl(36 33% 97%)",
        },
        secondary: {
          DEFAULT: "hsl(35 38% 92%)",
          foreground: "hsl(210 29% 18%)",
        },
        muted: {
          DEFAULT: "hsl(35 32% 94%)",
          foreground: "hsl(215 16% 40%)",
        },
        accent: {
          DEFAULT: "hsl(13 83% 61%)",
          foreground: "hsl(36 33% 97%)",
        },
        card: {
          DEFAULT: "hsla(0 0% 100% / 0.86)",
          foreground: "hsl(210 29% 18%)",
        },
        destructive: {
          DEFAULT: "hsl(0 72% 51%)",
          foreground: "hsl(0 0% 98%)",
        },
      },
      borderRadius: {
        lg: "1rem",
        md: "0.875rem",
        sm: "0.625rem",
      },
      boxShadow: {
        soft: "0 18px 40px rgba(31, 41, 55, 0.12)",
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        hebrew: ["David Libre", "serif"],
        script: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
