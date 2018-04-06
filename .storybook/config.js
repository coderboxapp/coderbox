import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components'
import * as themes from '@coderbox/themes'

const req = require.context('../packages', true, /stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator((story) => (
  <ThemeProvider theme={themes.main}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);
