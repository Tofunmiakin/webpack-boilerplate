const path = require("path");
const webpack = require("webpack"); //to access built-in plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  // The entry property defines which file the webpack should start with to get the internal dependency graph created
  entry: { bundle: path.resolve(__dirname, "src/index.js") },

  //  The output property defines the file path and the file name which will be used for deploying the bundled file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },

  //Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed
  // by your application and added to the dependency graph
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  devtool: "source-map",

  devServer: {
    port: 3000,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    open: true,
    compress: true,
    historyApiFallback: true,
  },
  //Plugins can be used to perform bundle optimization, asset management and injection of environment variables
  //In the plugin below, the html-webpack-plugin generates an HTML file for your application and automatically
  // injects all your generated bundles into this file.
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack boilerplate",
      filename: "index.html",
      template: "src/template.html",
    }),
    new BundleAnalyzerPlugin(),
  ],
};
