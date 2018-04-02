import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { withTheme } from '@coderbox/utils'
import * as themes from '@coderbox/themes'
import * as docs from './docs'
import Box from '.'

let stories = storiesOf('atoms/Box', module)

stories.add('simple usage', withTheme(themes.main, withDocs(docs.main, () => {
  return (
    <div>
      <Box>Some text in box</Box>
      <Box color='primary'>Box with color primary</Box>
      <Box color='primary' inverted>Box with inverted primary color</Box>
      <Box color='primary' stacked inverted>Stacked Box with color primary</Box>
    </div>
  )
})))
