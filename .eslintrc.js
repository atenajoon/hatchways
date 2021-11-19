// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     'plugin:react/recommended',
//     'airbnb',
//   ],
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 12,
//     sourceType: 'module',
//   },
//   plugins: [
//     'react',
//   ],
//   rules: {
//   },
// };

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  root: true,
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "@react-native-community",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    "prettier/prettier": ["error", { singleQuote: false }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-var-requires": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-use-before-define": ["error", { variables: false }],
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-empty-function": "off",
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};
