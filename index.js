module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-standard",

    "@ronilaukkarinen/stylelint-a11y/recommended",
    "stylelint-config-idiomatic-order",

    "stylelint-prettier/recommended",
  ],
  plugins: ["stylelint-high-performance-animation"],
  rules: {
    "order/properties-order": [[], { severity: "warning" }],
    "plugin/no-low-performance-animation-properties": [
      true,
      { ignore: "paint-properties" },
    ],
  },
};
