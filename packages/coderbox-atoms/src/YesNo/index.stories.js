import React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from '../utils'
import { Box, Button, Icon, YesNo } from '../index'

const stories = storiesOf('atoms/YesNo', module)

stories.add('default', withTheme(() => {
  return (
    <div>
      <Box>
        <YesNo color='primary' isOutlined onYes={() => console.log('yess')}>
          <Button color='primary'>
            <Icon name='check-circle' />
            Accept
          </Button>
        </YesNo>
        <YesNo size='small' color='danger' tone='1' isLeft>
          <Button size='small' color='gray'>
            <Icon name='trash' />
            Delete
          </Button>
        </YesNo>
      </Box>
    </div>
  )
}))
