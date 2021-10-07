module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-standard",

    "stylelint-a11y/recommended",
    "stylelint-config-rational-order",

    "stylelint-prettier/recommended",
  ],
  plugins: ["stylelint-high-performance-animation"],
  rules: {
    "order/properties-order": [[], { severity: "warning" }],
    "plugin/no-low-performance-animation-properties": [
      true,
      { ignore: "paint-properties" },
    ],
    "plugin/rational-order": [
      true,
      {
        "empty-line-between-groups": true,
        severity: "warning",
      },
    ],
  },
};
