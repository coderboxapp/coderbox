import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { withTheme } from '@coderbox/utils'
import * as themes from '@coderbox/themes'
import * as docs from './docs'
import { Text, Box } from '../index'

const stories = storiesOf('atoms/Text', module)

stories.add('simple usage', withTheme(themes.main, withDocs(docs.main, () => {
  return (
    <div>
      <Box color='danger' inverted>
        <Text padding='5px 0'>This is a normal text.</Text>
        <Text padding='5px 0' thin>This is a thin text.</Text>
        <Text padding='5px 0'strong>This is a strong text.</Text>
      </Box>
      <Box color='success' inverted>
        <Text color='primary'>Text with primary color</Text>
        <Text color='success'>Text with success color</Text>
        <Text color='danger'>Text with danger color</Text>
      </Box>
      <Box color='success' inverted>
        <Text size='small'>Text with small size</Text>
        <Text size='large'>Text with large size</Text>
      </Box>
    </div>
  )
})))
