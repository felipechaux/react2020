const HtmlWebpackPlugin = require('html-webpack-plugin')

//manifest plugin
const WebpackPwaManifestPlugin =require('webpack-pwa-manifest')

//service worker
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

const path = require('path')

module.exports = {

  output: {
    filename: 'app.bundle.js',
    //solucion error filed to load resource: the server responded with a status of 404 (Not Found), no intentara buscar bundle en la ruta
    publicPath:'/'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    //añadir manifest
    new WebpackPwaManifestPlugin(
      {
        name:'Petgram - Tu app de fotos de mascotas',
        shortname:'Petgram 🐶',
        description:'Con Petgram puedes encontrar fotos de animales domesticos muy facilmente',
        background_color:'#fff',
        theme_color:'#b1a',
        icons:[
          {
            src:path.resolve('src/assets/icon.png'),
            //dimensiones dispositivos moviles
            sizes:[96,128,192,256,384,512]
          }
        ]
      }
    ),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching:[
        {
          urlPattern:new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          //mirar cache antes de red
          handler:'CacheFirst',
          options:{
            cacheName:'images'
          }
        },
        {
          urlPattern:new RegExp('https://petgram-backend-one.now.sh'),
          //datos frescos
          handler:'NetworkFirst',
          options:{
            cacheName:'api'
          }
        }
      ]
    })

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
