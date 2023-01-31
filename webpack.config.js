const path = require("path");
module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  externals: "",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "library.js",
    library: "library",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
    ],
  },
};
