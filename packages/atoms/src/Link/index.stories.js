
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from '../utils'
import { Box, Link } from '../index'

let stories = storiesOf('atoms/Link', module)

stories.add('simple usage', withTheme(() => {
  return (
    <div>
      <Box hSpace='0.5rem'>
        <Link>Default Link</Link>
        <Link color='success'>Success Link</Link>
        <Link color='danger'>Danger Link</Link>
        <Link color='black'>Black Link</Link>
      </Box>
    </div>
  )
}))
