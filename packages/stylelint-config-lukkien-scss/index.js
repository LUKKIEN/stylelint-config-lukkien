"use strict";

module.exports = {
  rules: {
    // @-each
    "scss/at-each-key-value-single-line": true,

    // @-else
    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-else-closing-brace-space-after": "always-intermediate",
    "scss/at-else-empty-line-before": "never",
    "scss/at-else-if-parentheses-space-before": "always",

    // @-extend
    "scss/at-extend-no-missing-placeholder": true,

    // @-function
    // "scss/at-function-pattern": "never",
    "scss/at-function-parentheses-space-before": "never",
    // "scss/at-function-pa"

    // @-if
    "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-if-closing-brace-space-after": "always-intermediate",
    "scss/at-if-no-null": true,

    // @-import
    "scss/at-import-no-partial-leading-underscore": true,

    // @-mixin
    "scss/at-mixin-argumentless-call-parentheses": "never",
    "scss/at-mixin-named-arguments": "never",
    "scss/at-mixin-parentheses-space-before": "never",

    // @-rule
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/README.md
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,

    // @-variable
    "scss/dollar-variable-colon-newline-after": null,
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-default": null,
    "scss/dollar-variable-empty-line-before": null,
    "scss/dollar-variable-no-missing-interpolation": true,

    // %-placeholder
    "scss/percent-placeholder-pattern": "^do-not-use-placeholders$",

    // -comment
    "scss/double-slash-comment-empty-line-before": null,
    "scss/double-slash-comment-inline": null,
    "scss/double-slash-comment-whitespace-inside": "always",

    // Comment
    "scss/comment-no-loud": null,

    // declaration
    "scss/declaration-nested-properties-no-divided-groups": null,
    "scss/declaration-nested-properties": "never",

    // Dimension
    "scss/dimension-no-non-numeric-values": true,

    // Function
    "scss/function-color-relative": null,
    "scss/function-quote-no-quoted-strings-inside": null,
    "scss/function-unquote-no-unquoted-strings-inside": null,

    // Map
    "scss/map-keys-quotes": null,

    // Media feature
    "scss/media-feature-value-dollar-variable": "always",

    // Operator
    "scss/operator-no-newline-after": true,
    "scss/operator-no-newline-before": true,
    "scss/operator-no-unspaced": true,

    // Partial
    "scss/partial-no-import": null,

    // Selector
    "scss/selector-nest-combinators": null,
    "scss/selector-no-redundant-nesting-selector": true,
    "scss/selector-no-union-class-name": null,

    // // General / Sheet
    "scss/no-dollar-variables": null,
    "scss/no-duplicate-dollar-variables": true
  }
};
