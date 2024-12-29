/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  height: {
    112: "28rem",
    128: "32rem",
    calc: "calc(100dvh-120px)",
  },
  theme: {
    extend: {
      animation: {
        "native-cta": "colorTransition 500ms forwards 1500ms",
        swipe: "swipe linear infinite",
      },
      keyframes: {
        "native-cta": {
          "0%": { color: "#B0B8C6", backgroundColor: "#F5F7FA" },
          "100%": { color: "#000000", backgroundColor: "#abc323" },
        },
        swipe: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },

  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@headlessui/tailwindcss"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/container-queries"),
  ],
};
