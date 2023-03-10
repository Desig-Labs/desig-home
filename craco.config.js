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
    configure: (webpackConfig) => {
      // Support CJS
      // https://github.com/facebook/create-react-app/pull/12021#issuecomment-1108426483
      webpackConfig.module.rules = webpackConfig.module.rules.map((rule) => {
        if (rule.oneOf instanceof Array) {
          rule.oneOf[rule.oneOf.length - 1].exclude = [
            /\.(js|mjs|jsx|cjs|ts|tsx)$/,
            /\.html$/,
            /\.json$/,
          ]
        }
        return rule
      })
      // Turn off source map warnings
      webpackConfig.ignoreWarnings = [/Failed to parse source map/]
      return webpackConfig
    },
  },
}
