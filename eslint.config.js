import js from "@eslint/js";

export default [
  js.configs.recommended, // start with ESLint's recommended rules
  {
    files: ["**/*.js"], // apply to JS files
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        process: "readonly"
      },
    },
    rules: {
      // keep your custom rules here
      "constructor-super": "error",
      "no-case-declarations": "error",
      "no-class-assign": "error",
      "no-compare-neg-zero": "error",
      "no-cond-assign": "error",
      "no-constant-condition": "error",
      "no-control-regex": "error",
      "no-debugger": "error",
      "no-delete-var": "error",
      "no-dupe-args": "error",
      "no-dupe-class-members": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-empty": "error",
      "no-empty-character-class": "error",
      "no-empty-pattern": "error",
      "no-ex-assign": "error",
      "no-extra-boolean-cast": "error",
      "no-extra-semi": "error",
      "no-fallthrough": "error",
      "no-func-assign": "error",
      "no-global-assign": "error",
      "no-inner-declarations": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "error",
      "no-mixed-spaces-and-tabs": "error",
      "no-new-symbol": "error",
      "no-obj-calls": "error",
      "no-octal": "error",
      "no-redeclare": "error",
      "no-regex-spaces": "error",
      "no-self-assign": "error",
      "no-sparse-arrays": "error",
      "no-this-before-super": "error",
      "no-unexpected-multiline": "error",
      "no-unreachable": "error",
      "no-unsafe-finally": "error",
      "no-unsafe-negation": "error",
      "no-unused-labels": "error",
      "no-useless-escape": "error",
      "require-yield": "error",
      "use-isnan": "error",
      "valid-typeof": "error",
    },
  },
];
