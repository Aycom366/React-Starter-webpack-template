const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    hot: true, //enables webpack hot module replacement
    open: true, //since we now have a devServer, we can use the open command here to open the browser rather than specifying it in the package.json start scripts
  },
  devtool: "cheap-module-source-map", //This basically generates source maps for our code.
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
