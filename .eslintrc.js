module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "unused-imports"],
  rules: {
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "unused-imports/no-unused-imports": "error",
    "no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/destructuring-assignment": "off",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "max-len": [
      2,
      { code: 120, ignoreComments: true, ignorePattern: "^import\\W.*" },
    ],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/button-has-type": "off",
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: ["state"],
      },
    ],
    "no-undef": "off",
    "react/no-array-index-key": "off",
    "consistent-return": "off",
    "no-unsafe-optional-chaining": "off",
    "react/jsx-max-props-per-line": ["error", { maximum: 4 }],
    "react/jsx-no-constructed-context-values": "warn",
  },
  overrides: [
    {
      files: ["**/client/src/**/*.{test,stories}.{ts,tsx}"],
      rules: {
        "max-len": "off",
      },
    },
  ],
};
