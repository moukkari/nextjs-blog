module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: "readonly",
    React: "writable",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: [
    "prettier",
    "@typescript-eslint",
    "import",
  ],
  rules: {
    "prettier/prettier": "error",
    "import/no-unresolved": [2, {
      ignore: [
        "cssvar",
        "dayjs",
        "lodash",
        "react",
        "react-dom",
        "react-icons",
        "recharts",
      ],
    }],
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "react/prop-types": 0,
    "react/jsx-key": 0
  },
  settings: {
    react: {
      version: "latest",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ['node_modules', '.'], // resolve modules from project root like "components/TextInput" or "styles/theme"
      },
      typescript: {},
    },
  },
};
