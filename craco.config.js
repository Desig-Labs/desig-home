const webpack = require('webpack')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

require('dotenv').config()

module.exports = {
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
  },
  webpack: {
    plugins: {
      add: [
        // Add node polyfill
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
        }),
        new NodePolyfillPlugin({
          excludeAliases: ['console'],
        }),
      ],
    },
  },
}
