import React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from '@coderbox/hocs'
import * as themes from '@coderbox/themes'
import { Stack, Box, Title, Button } from '../index'

const stories = storiesOf('atoms/SackView', module)

stories.add(
  'simple usage',
  withTheme(themes.main, () => {
    return (
      <div>
        <Box>
          <Stack
            items={(index, next, prev) => {
              return [
                <Stack.Item>
                  <Box color='success'>
                    <Title>Stack item {index}</Title>
                    <Button onClick={next}>Next</Button>
                  </Box>
                </Stack.Item>,
                <Stack.Item>
                  <Box color='danger'>
                    <Title>Stack item {index}</Title>
                    <Button onClick={prev}>Prev</Button>
                    <Button onClick={next}>Next</Button>
                  </Box>
                </Stack.Item>,
                <Stack.Item>
                  <Title>Stack item {index}</Title>
                  <Button onClick={prev}>Prev</Button>
                  <Button onClick={next}>Next</Button>
                </Stack.Item>
              ]
            }}
          />
        </Box>
      </div>
    )
  })
)
