module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  extend: {
    transitionDuration: {
      0: "0ms",
      30: "10ms",
    },
    transitionProperty: {
      height: "height",
    },
    translate: {
      "110p": "110%",
    },
  },
  plugins: [],
};
