import React from 'react'
import { storiesOf } from '@storybook/react'
import { withTheme } from '@coderbox/utils'
import { withDocs } from 'storybook-readme'
import * as themes from '@coderbox/themes'
import * as docs from './docs'
import { Button, Box } from '../index'

let stories = storiesOf('atoms/Button', module)

stories.add('simple usage', withTheme(themes.main, withDocs(docs.main, () => {
  return (
    <div>
      <Box color='success' inverted>
        <Button>Normal</Button>
        <Button color='primary'>Primary</Button>
        <Button color='primaryLight'>Primary</Button>
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
        <Button color='gray' inverted>Light</Button>
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
})))

// stories.add('with different size', withTheme(() => {
//   return (
//     <Box>
//       <Button color='primary' size='tiny'>Tiny</Button>
//       <Button color='success' size='small'>Small</Button>
//       <Button color='danger' size='normal'>Normal</Button>
//       <Button color='gray' size='large'>Large</Button>
//       <Button color='black' size='xlarge'>XLarge</Button>
//     </Box>
//   )
// }))

// stories.add('with icon', withTheme(() => {
//   return (
//     <Box>
//       <Button color='primary' size='normal'>
//         <Icon name='star' />
//         Some text
//         </Button>
//       <Button color='success' size='small' isOutlined>
//         <Icon name='star' />
//         Some text
//         </Button>
//       <Button color='gray' tone={2} size='normal' isIcon>
//         <Icon name='stack-overflow' />
//       </Button>
//     </Box>
//   )
// }))

// stories.add('with loading', withTheme(() => {
//   return (
//     <div>
//       <Box>
//         <Button color='primary' size='normal' isLoading>
//           <Icon name='star' />
//           Some text
//           </Button>
//         <Button color='success' size='normal' isOutlined isLoading>
//           <Icon name='star' />
//           Some text
//           </Button>
//         <Button color='gray' isLoading>
//           <Icon name='trash' />
//           Some text
//           </Button>
//       </Box>
//       <Box>
//         <Button color='gray' size='small' isLoading>
//           <Icon name='star' />
//           Some text
//           </Button>
//         <Button color='gray' tone='2' size='small' isIcon isLoading>
//           <Icon name='star' />
//         </Button>
//       </Box>
//     </div>
//   )
// }))
