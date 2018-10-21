const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'xonaparticles.js',
    path: path.resolve(__dirname, 'build'),
    library: 'Xona',
    libraryTarget: 'var'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Xona Particle Engine',
      template: './template.html',
      inject: false
    })
  ],
  module: {
    rules: [
      {
				test: /\.json$/,
				include: path.join(__dirname, 'node_modules', 'seedrandom'),
				loader: 'json-loader',
      },
      {
        test: /\.js$/,
        exclude: path.join(__dirname, 'node_modules'),
        loader: 'babel-loader'
      },
      {
        enforce: 'post',
        include: path.join(__dirname, 'node_modules', 'seedrandom'),
        loader: 'transform-loader?brfs'
      }
   ]
  },
  resolve: {
    alias: {
        'seedrandom': path.join(__dirname, 'node_modules', 'seedrandom', 'seedrandom.min.js')
    }
  }
};
