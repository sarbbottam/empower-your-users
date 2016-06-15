module.exports = {
  devtool: 'source-map',
  entry: './src/pages/client.js',
  output: {
    path: 'dist/js',
    filename: 'client.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?presets[]=es2015'
      }
    ]
  }
};
