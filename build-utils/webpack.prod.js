const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { merge } = require("webpack-merge");
const common = require("../webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
});
