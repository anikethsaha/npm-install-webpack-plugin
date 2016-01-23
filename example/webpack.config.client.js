var NpmInstallPlugin = require("npm-install-webpack-plugin");
var path = require("path");
var webpack = require("webpack");

module.exports = {
  context: __dirname,

  devtool: "#inline-source-map",

  entry: [
    "webpack-hot-middleware/client?reload=true",
    "./client.js",
  ],

  module: {
    loaders: [
      {
        loader: "style-loader",
        test: /\.css$/,
      },
      {
        loader: "css-loader",
        test: /\.css$/,
      },
      {
        loader: "less-loader",
        test: /\.less$/,
      },
    ],
  },

  output: {
    filename: "client.min.js",
    path: path.join(__dirname, "/public/build"),
    publicPath: "/build/"
  },

  plugins: [
    new NpmInstallPlugin({
      cli: {
        save: true,
        saveExact: true,
      },
    }),

    new webpack.HotModuleReplacementPlugin(),
  ]
};