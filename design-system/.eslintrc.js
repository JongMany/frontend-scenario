module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // 이는 tsconfig의 eslint를 적용할 부분을 한정짓기 위해서 사용됨
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:storybook/recommended",
    "prettier",
  ],
  plugins: ["react", "@typescript-eslint", "react-hooks", "jsx-a11y"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "comma-dangle": "off",
    "react/display-name": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": ["off"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "storybook/prefer-pascal-case": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
  ignorePatterns: ["**/dist/**/*", ".eslintrc.js"],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
