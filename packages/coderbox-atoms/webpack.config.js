'use strict'

const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const env = require('yargs').argv.env

const paths = {
  libSrc: path.resolve(__dirname, 'src'),
  libIndex: path.resolve(__dirname, 'src/index.js'),
  libOutputDir: path.resolve(__dirname, 'lib'),
  libModules: path.resolve(__dirname, 'node_modules')
}

let libraryName = 'index'
let plugins = [
  new webpack.NamedModulesPlugin(),
  new webpack.DefinePlugin({ 'process.env': { ENV: `'${env}'`, NODE_ENV: `'${env}'` } })
]

if (env === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }))
}

module.exports = {
  entry: paths.libIndex,
  devtool: 'source-map',
  output: {
    path: paths.libOutputDir,
    filename: libraryName + '.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    modules: [paths.libModules, paths.libSrc],
    extensions: ['.json', '.js', '.jsx']
  },
  externals: [nodeExternals()],
  plugins: plugins
}
