import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { withTheme } from '@coderbox/utils'
import * as themes from '@coderbox/themes'
import * as docs from './docs'
import { Group, Box, Button } from '../index'

const stories = storiesOf('atoms/Group', module)

stories.add('group buttons', withTheme(themes.main, withDocs(docs.main, () => {
  return (
    <div>
      <Box color='primary' inverted>
        <Group color='primary' outlined>
          <Button icon='star'>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </Group>
      </Box>
      <Box color='success' inverted>
        <Group vertical>
          <Button color='success'>Left</Button>
          <Button color='gray'>Middle</Button>
          <Button color='gray'>Second</Button>
          <Button color='success'>Right</Button>
        </Group>
        <Group vertical size='small'>
          <Button color='success'>Left</Button>
          <Button color='gray'>Middle</Button>
          <Button color='gray'>Second</Button>
          <Button color='success'>Right</Button>
        </Group>
      </Box>
      <Box color='danger' inverted>
        <Group>
          <Button color='danger'>Labeld</Button>
          <Button color='danger' icon='star' />
        </Group>
      </Box>
    </div>
  )
})))
