const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  entry: path.resolve(__dirname, 'src') + "/index.jsx",
  resolve: { extensions: [".js", ".jsx", ".less"] },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: { loader: "babel-loader" } },
      { test: /\.less$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' }] },
      { test: /\.html$/, use: [{ loader: "html-loader" }] }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};