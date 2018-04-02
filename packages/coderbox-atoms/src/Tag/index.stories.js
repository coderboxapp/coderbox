import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { withTheme } from '@coderbox/hocs'
import * as themes from '@coderbox/themes'
import * as docs from './docs'
import { Tag, Box, Group } from '../index'

const stories = storiesOf('atoms/Tag', module)

stories.add('simple usage', withTheme(themes.main, withDocs(docs.main, () => {
  return (
    <div>
      <Box color='success' inverted>
        <Tag>Normal</Tag>
        <Tag color='gray'>Gray</Tag>
        <Tag color='primary'>Primary</Tag>
        <Tag color='success'>Success</Tag>
        <Tag color='danger'>Danger</Tag>
        <Tag color='success' icon='star' />
        <Tag color='grey' icon='shield' />
        <Tag color='success' delete />
        <Tag color='grey' delete />
      </Box>
      <Box color='success' inverted>
        <Group>
          <Tag color='black'>npm</Tag>
          <Tag color='primary'>v1.0.0</Tag>
        </Group>
        <Group>
          <Tag color='black'>build</Tag>
          <Tag color='success'>passed</Tag>
        </Group>
        <Group>
          <Tag color='primary'>javascript</Tag>
          <Tag color='greyLight' delete />
        </Group>
      </Box>
    </div>
  )
})))
