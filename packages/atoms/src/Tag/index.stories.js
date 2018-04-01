import React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from '../utils'
import { Box, Tag } from '../index'

let stories = storiesOf('atoms/Tag', module)

stories.add('default', withTheme(() => {
  return (
    <div>
      <Box>
        <Tag>Normal</Tag>
        <Tag color='gray'>Gray</Tag>
        <Tag color='primary'>Primary</Tag>
        <Tag color='success'>Success</Tag>
        <Tag color='success' isDelete />
        <Tag color='gray' tone={2} isDelete />
      </Box>
    </div>
  )
}))
