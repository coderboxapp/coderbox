import React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from '../utils'
import { Box, Text } from '../index'

let stories = storiesOf('atoms/Text', module)

stories.add('default', withTheme(() => {
  return (
    <div>
      <Box>
        <Text>This is some text, no color.</Text>
        <Text color='primary'>This is some text, with color primary.</Text>
        <Text color='danger'>This is some text, with color danger.</Text>
      </Box>
    </div>
  )
}))
