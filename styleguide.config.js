const path = require('path')
const { version } = require('./lerna.json')
const { styles, theme } = require('./styleguide.styles')

module.exports = {
  title: `Zebbra ${version}`,
  showUsage: false,
  styles,
  theme,
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
      name: '1. Introduction',
      sections: [{
        name: '',
        content: 'readme.md'
      }]
    },
    {
      name: '2. Atoms',
      content: 'packages/coderbox-atoms/src/index.md',
      components: 'packages/coderbox-atoms/src/[A-Z]*/index.js'
    },
    {
      name: '3. Forms',
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
    Wrapper: path.join(__dirname, 'docs/components/Wrapper'),
    Logo: path.join(__dirname, 'docs/components/Logo')
  },
  styleguideDir: './docs',
  getComponentPathLine: (componentPath) => {
    const dirname = path.dirname(componentPath, '.js')
    const pack = dirname.split('/')[1].split('-')[1]
    const name = dirname.split('/').slice(-1)[0]

    return 'import { ' + name + ' } from \'@zebbra/' + pack + '\''
  }
}
