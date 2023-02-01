const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  externals: "",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "library",
    libraryTarget: "commonjs",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
