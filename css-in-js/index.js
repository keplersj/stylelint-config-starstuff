module.exports = {
  extends: ["stylelint-config-starstuff"],
  rules: {
    "declaration-empty-line-before": [
      "never",
      {
        ignore: [
          "after-comment",
          "after-declaration",
          "inside-single-line-block",
        ],
      },
    ],
  },
};
