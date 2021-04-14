const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        index:
          'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/starfield.png")',
      }),
      padding: {
        "1/2": "50%",
      },
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
