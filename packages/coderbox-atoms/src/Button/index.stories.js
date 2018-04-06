import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { withTheme } from '@coderbox/hocs'
import * as themes from '@coderbox/themes'
import * as docs from './docs'
import { Button, Box } from '../index'

let stories = storiesOf('atoms/Button', module)

stories.add('simple usage', withDocs(docs.main, () => {
  return (
    <div>
      <Box color='success' inverted>
        <Button>Normal</Button>
        <Button color='primary'>Primary</Button>
        <Button color='success'>Success</Button>
        <Button color='danger'>Danger</Button>
        <Button color='grey'>Gray</Button>
        <Button color='greyLight'>Light</Button>
        <Button color='black'>Black</Button>
      </Box>
      <Box color='success'>
        <Button as='div' inverted>Normal</Button>
        <Button color='primary' inverted>Primary</Button>
        <Button color='success' inverted>Success</Button>
        <Button color='danger' inverted>Danger</Button>
        <Button color='gray' inverted>Gray</Button>
        <Button color='greyLight' inverted>Light</Button>
        <Button color='black' inverted>Black</Button>
      </Box>
      <Box>
        <Button color='primary' outlined>Primary</Button>
        <Button color='success' outlined>Success</Button>
        <Button color='danger' outlined>Danger</Button>
        <Button color='gray' outlined>Grayscale</Button>
        <Button color='black' outlined>Black</Button>
      </Box>
    </div>
  )
}))

stories.add('with different size', withTheme(themes.main, withDocs(docs.withSize, () => {
  return (
    <Box>
      <Button color='primary' size='tiny'>Tiny</Button>
      <Button color='success' size='small'>Small</Button>
      <Button color='danger' size='normal'>Normal</Button>
      <Button color='gray' size='large'>Large</Button>
      <Button color='black' size='xlarge'>XLarge</Button>
    </Box>
  )
})))

stories.add('with icon', withTheme(themes.main, withDocs(docs.withIcon, () => {
  return (
    <div className='story-box'>
      <Box color='success' inverted>
        <Button icon='cubes'>Cubes</Button>
        <Button color='primary' icon='star' iconPosition='right'>Primary</Button>
        <Button color='success' icon='rss'>Success</Button>
        <Button color='danger' icon='shopping-basket' outlined>Danger</Button>
        <Button color='grey' icon='shield' />
      </Box>
    </div>
  )
})))

stories.add('with loading', withTheme(themes.main, withDocs(docs.withLoaders, () => {
  return (
    <div>
      <Box color='#f7f7f7'>
        <Button color='primary' icon='star' loading>Some text</Button>
        <Button color='primary' icon='star' inverted loading>Some text</Button>
        <Button color='success' outlined loading>Some text</Button>
      </Box>
    </div>
  )
})))
