module.exports = {
  parser: "@typescript-eslint/parser", //Typescript esLint parser has to be used for the esLint parser
  parserOptions: {
    ecmaVersion: 2022, //This is the version of ECMAScript that we are using.
    sourceType: "module", //Allows us to use import and export statements.
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-var-requires": "off",
    "react/prop-types": "off", //turn of prop types since we are using typescript
    "react/jsx-uses-react": "off", //turned off complaining if react is not imported in out codes
    "react/react-in-jsx-scope": "off", //if return type is not explicit defined
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
}
