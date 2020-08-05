const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  output: {
    filename: 'app.bundle.js',
    //solucion error filed to load resource: the server responded with a status of 404 (Not Found), no intentara buscar bundle en la ruta
    publicPath:'/'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_ modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',
              '@babel/preset-react']
          }
        }
      }
    ]

  }
}
