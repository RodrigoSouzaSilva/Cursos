const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/18-webpack/index.ts',  // Arquivo de entrada
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist', 'assets', 'js'),
  },

  devtool: 'source-map'
};