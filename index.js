module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-standard",

    "stylelint-a11y/recommended",
    "stylelint-config-rational-order",

    "stylelint-prettier/recommended"
  ],
  plugins: ["stylelint-high-performance-animation"],
  rules: {
    "plugin/no-low-performance-animation-properties": true
  }
};
