const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "home-background": "url(/src/images/home-bg.png)",
      }),
    },
    colors: {
      ...colors,
      coolGray: colors.coolGray,
      trueGray: colors.trueGray,
      lightBlue: colors.lightBlue,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
