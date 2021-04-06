const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(_dirname, "./src"),
  entry: './index.js',
  output: {
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|j?g|svg|gif)?$/, use: 'file-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    compress: true,
    port: 3000
},
  mode: 'development'
}