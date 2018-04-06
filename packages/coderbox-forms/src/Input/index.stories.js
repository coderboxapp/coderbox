import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import * as docs from './docs'
import { Box, Text } from '@coderbox/atoms'
import { Input } from '../index'

const stories = storiesOf('forms/Input', module)

stories.add('simple usage', withDocs(docs.main, () => {
  return (
    <div>
      <Box color='primary' inverted>
        <Text padding='5px 0'>Theme <b>Main</b>:</Text>
        <Input placeholder='Username' onEnter={(evt, data) => console.log('data:', data)} />
        <Input placeholder='Username' color='danger' />
      </Box>
    </div>
  )
}))
