const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

const browserConfig = {
  entry: './src/browser/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['es2015','react']}
      },
      {
        test: [/\.svg$/,/\.gif$/,/\.jpe?g$/,/\.png$/],
        loader: 'file-loader',
        options: {
          name: "public/media/[name].[ext]",
          publicPath: url => url.replace('/public/', "")
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1}
            },
            {
              loader: 'postcss-loader',
              options: {plugins: [autoprefixer()]}
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'public/css/[name].css'
    })
  ]
}

const serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  output: {
    path: __dirname,
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['es2015','react']}
      },
      {
        test: [/\.svg$/,/\.gif$/,/\.jpe?g$/,/\.png$/],
        loader: 'file-loader',
        options: {
          name: "public/media/[name].[ext]",
          publicPath: url => url.replace('/public/', ""),
          emit: false
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader/locals'
          }
        ]
      }
    ]
  }
}

module.exports = [browserConfig, serverConfig]