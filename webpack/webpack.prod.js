const webpack = require("webpack");

module.exports = {
  mode: "production",
  devtool: "source-map", //This basically generates source maps for our code.
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
};
