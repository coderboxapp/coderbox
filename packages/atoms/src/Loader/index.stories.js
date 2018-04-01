import React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from '../utils'
import { Loader, Box } from '../index'

let stories = storiesOf('atoms/Loader', module)

stories.add('default', withTheme(() => {
  return (
    <div>
      <Box color='primary' vSpace='0.8rem'>
        <Loader />
        <Loader color='danger' size='large' />
        <Loader color='success' />
      </Box>
    </div>
  )
}))
