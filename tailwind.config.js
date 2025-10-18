/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    screens: {
      desk: "1280px",
      tab: "800px",
      mob: "375px",
    },
    extend: {
      keyframes: {
        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(40px) scale(0.95)",
            filter: "blur(4px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
            filter: "blur(0px)",
          },
        },
      },
      animation: {
        slideUp: "slideUp 1.75s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },

      fontFamily: {
        crimson: ['"Crimson Text"', "serif"],
        dm: ['"DM Sans"', "sans-serif"],
        mono: [' "Roboto Mono" ', "monospace"],
        rethink: [' "Rethink Sans" ', "serif"],
        reddit: [' "Reddit Mono" ', "monospace"],
      },
    },
  },
  plugins: [],
};
