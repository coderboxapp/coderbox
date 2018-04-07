const path = require('path')

module.exports = {
  showUsage: false,
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
        }
      ]
    }
  },
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
