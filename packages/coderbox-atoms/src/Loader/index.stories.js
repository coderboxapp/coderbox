import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { withTheme } from '@coderbox/hocs'
import * as themes from '@coderbox/themes'
import * as docs from './docs'
import { Loader, Box } from '../index'

const stories = storiesOf('atoms/Loader', module)

stories.add('simple usage', withTheme(themes.main, withDocs(docs.main, () => {
  return (
    <div>
      <Box>
        <Loader />
        <Loader color='danger' size='large' />
        <Loader color='#FFF000' />
      </Box>
      <Box>
        <Loader color='blue'>Loading...</Loader>
      </Box>
      <Box color='success'>
        <Loader color='#FFF000' inverted vertical>Loading...</Loader>
      </Box>
    </div>
  )
})))
