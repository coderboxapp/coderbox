const path = require('path')

module.exports = {
  showUsage: true,
  sections: [
    {
      name: 'Atoms',
      content: 'packages/coderbox-atoms/src/index.md',
      components: 'packages/coderbox-atoms/src/[A-Z]*/index.js'
    },
    {
      name: 'Forms',
      content: 'packages/coderbox-forms/src/index.md',
      components: 'packages/coderbox-forms/src/[A-Z]*/index.js'
    }
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    resolve: {
      alias: {
        'styled-components': path.resolve('./', 'node_modules', 'styled-components')
      }
    }
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/ThemeWrapper')
  }
}
