const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'legio.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'LEGIO',
    libraryTarget: 'var'
  }
};
