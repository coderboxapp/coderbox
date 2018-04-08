import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import * as themes from '@coderbox/themes'

export default class ThemeWrapper extends Component {
  render () {
    return (
      <ThemeProvider theme={themes.main}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}
