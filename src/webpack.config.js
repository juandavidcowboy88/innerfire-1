const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  devServer:{
    port: 3000,
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options:{
            presets: ['es2016']
          }
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          // ['style-loader', 'css-loader']
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles/[name].css')
  ]
}
