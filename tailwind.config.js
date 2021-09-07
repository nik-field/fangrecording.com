const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./content/**/*.md", "./content/**/*.html", "./**/*.html"],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
      },
    },
    fontFamily: {
      sans: ["neue-haas-grotesk-display", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: false,
    themes: false,
    base: false,
  },
};
