import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { withTheme } from '@coderbox/hocs'
import * as themes from '@coderbox/themes'
import * as docs from './docs'
import { YesNo, Box, Button, Icon } from '../index'

const stories = storiesOf('atoms/YesNo', module)

stories.add('simple usage', withTheme(themes.main, withDocs(docs.main, () => {
  return (
    <div>
      <Box color='success' inverted>
        <YesNo color='primary' onYes={() => console.log('yess')} padding='5px'>
          <Button color='primary'>
            <Icon name='check-circle' />
            Accept
          </Button>
        </YesNo>
        <br />
        <YesNo color='success' outlined onYes={() => console.log('yess')} padding='5px'>
          <Button color='success' outlined>
            Like Zebbra ?
          </Button>
        </YesNo>
        <br />
        <YesNo size='small' color='danger' outlined left padding='5px'>
          <Button size='small' color='danger'>
            <Icon name='trash' />
            Delete
          </Button>
        </YesNo>
      </Box>
    </div>
  )
})))
