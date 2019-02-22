var fs = require("fs");
var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: {
    app: ["./src/index.js"]
  },
  context: path.resolve(__dirname, "."),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[name].chunk.js"
  },
  stats: "errors-only",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["app"],
      filename: "index.html"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "app",
      chunks: ["commons"]
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["env", "react"]
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  },
  devServer: {
    https: true,
    stats: "errors-only",
    historyApiFallback: true
  }
};
