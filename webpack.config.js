const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'nani.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Nani',
    libraryTarget: 'var'
  }
};
