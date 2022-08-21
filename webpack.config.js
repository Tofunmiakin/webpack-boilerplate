const path = require("path");
const webpack = require("webpack"); //to access built-in plugins

module.exports = {
  // The entry property defines which file the webpack should start with to get the internal dependency graph created
  entry: ["react-hot-loader/patch", "./src/index.js"],

  //  The output property defines the file path and the file name which will be used for deploying the bundled file
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },

  //Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed
  // by your application and added to the dependency graph
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },

  devServer: {
    port: 3000,
    static: {
      directory: "./public",
    },
  },
  //Plugins can be used to perform bundle optimization, asset management and injection of environment variables
  //In the plugin below, the html-webpack-plugin generates an HTML file for your application and automatically
  // injects all your generated bundles into this file.
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./src/index.html",
  //   }),
  // ],
};
