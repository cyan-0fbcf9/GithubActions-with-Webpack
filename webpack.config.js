const path = require("path");

module.exports = {
  entry: {
    bundle: "./src/app.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js", // [name]はentryで記述した名前(この例ではbundle）が入る
  },
  resolve: {
    extensions: [".js"],
  },
  devServer: {
    // webpack-dev-serverの公開フォルダ
    contentBase: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      // Sassファイルの読み込みとコンパイル
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            options: { url: false }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        loader: "url-loader"
      }
    ],
  }
};