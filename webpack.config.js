const path = require('path');

module.exports = {
  entry: './frontend/playables.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',

          query: {
            presets: ['@babel/env', '@babel/react',{
                          'plugins': ['@babel/plugin-proposal-class-properties']}]
          }
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  },
  devtool: 'source-map'
};
