
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from '../utils'
import { Stack, Box, Title, Button } from '../index'

const stories = storiesOf('atoms/SackView', module)

stories.add('simple usage', withTheme(
  () => {
    return (
      <div>
        <Box>
          <Stack>
            <div>
              <Title>Stack item 1</Title>
              <Button>Next</Button>
            </div>
            <div>
              <Title>Stack item 2</Title>
              <Button>Prev</Button>
            </div>
          </Stack>
        </Box>
      </div>
    )
  }
))
