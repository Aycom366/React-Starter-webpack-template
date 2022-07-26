# Documenting how to setup react app from scratch using webpack5

## Contents

1. Setup a basic React app with Typescript and webpack 5

2. configure webpack and typescript to allow rendering of images and SVGS

3. Setup webpack config for multiple environments like dev and prod

4. Add react refresh - (Hot Reload)

5. Linting with ESLINT and Code formatting with Prettier

6. Husky - (to lint code before pushing)

## Packages

### Babel

Babel is basically a transpiler to transfile our jsx file into javascript to be understood by the browser.

```script
npm install -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
```

after installation, we need to add a babel configuration file to list the preset babel needs to use called `.babelrc`

### Scripts

- `"start": "webpack server --config webpack/webpack.config.js --open"`
  This basically means webpack should serve the config files that we have specified in the webpacl folder and inside webpack.config.js. --open basically opens the browser by default

  The eslint...a11y has accessiblity standards to applications in real time

  linting-stage basically prevents commiting

  husky avoids pushing non formatted code to github
