const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = (enviromentVariables) => {
  const { env } = enviromentVariables; //env could be dev or prod
  const envConfig = require(`./webpack.${env}.js`); //webpack.dev.js or webpack.prod.js
  const config = merge(commonConfig, envConfig);
  return config;
};
