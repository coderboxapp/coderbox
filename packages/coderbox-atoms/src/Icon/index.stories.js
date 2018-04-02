import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { withTheme } from '@coderbox/utils'
import * as themes from '@coderbox/themes'
import * as docs from './docs'
import { Icon, Box } from '../index'

const stories = storiesOf('atoms/Icon', module)

stories.add('simple usage', withTheme(themes.main, withDocs(docs.main, () => {
  return (
    <div>
      <Box color='success' inverted>
        <Icon name='star' color='primary' />
        <Icon name='star' color='success' />
        <Icon name='star' color='black' />
        <Icon name='star' color='gray' />
        <Icon name='star' color='danger' shadow />
      </Box>
      <Box color='primary' inverted space='8px'>
        <Icon name='star' color='black' inverted />
        <Icon name='star' color='gray' inverted />
        <Icon name='github' color='primary'inverted />
        <Icon name='gift' color='success' inverted shadow />
        <Icon name='bug' color='danger' inverted circular shadow size='huge' />
        <Icon name='lock' color='primary' inverted shadow size='huge' />
      </Box>
      <Box color='danger' inverted>
        <Icon name='star' color='black' />
        <Icon name='star' color='black' size='medium' />
        <Icon name='star' color='primary' size='large' />
        <Icon name='star' color='success' size='xlarge' />
      </Box>
    </div>
  )
})))
