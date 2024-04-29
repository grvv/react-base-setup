const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9

module.exports = {
  mode: "development",
  // entry: "./index.js",
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
