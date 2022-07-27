const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const ESLintPlugin = require("eslint-webpack-plugin")

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"], //This command allows us to omit extensions name when importing files in our project (e.g. import MyComponent from "./MyComponent")
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
    new ForkTsCheckerWebpackPlugin(), //This plugin is used to check if our code is typescript compliant. If not, it will throw an error.
    new CopyPlugin({
      patterns: [{ from: "source", to: "dest", noErrorOnMissing: true }],
    }),
    new ESLintPlugin(),
  ],
  stats: "errors-only",
}
