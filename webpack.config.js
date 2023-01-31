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
    // 指定要价在的规则
    rules: [
      {
        // test指定的是规则生效的文件,意思是，用ts-loader来处理以ts为结尾的文件
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
