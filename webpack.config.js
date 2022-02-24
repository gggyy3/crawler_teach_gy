var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // resolveLoader: {
  //   modules: ['node_modules', 'loaders']
  // },
  entry: {
    index: "./src/js/index.js",
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "webpack-markdown-loader",
            options: {
              html: true
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/views/index.html',
      title: 'haha'
		})
  ],
};
