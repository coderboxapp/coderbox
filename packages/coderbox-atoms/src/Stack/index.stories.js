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
                  <Title>Stack one</Title>
                  <Button onClick={prev}>Prev</Button>
                  <Button onClick={next}>Next</Button>
                </Stack.Item>,
                <Stack.Item>
                  <Title>Stack two</Title>
                  <Button onClick={prev}>Prev</Button>
                  <Button onClick={next}>Next</Button>
                </Stack.Item>,
                <Stack.Item>
                  <Title>Stack three</Title>
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
