# Button

Classic **button** with loaders.

### Demo:

<!-- STORY -->

### Code:

```js
import React from 'react'
import { Box, Button } from 'zebbra'

const Component = () => (
  <Box>
    <Button color='primary' icon='star' loading>Some text</Button>
    <Button color='primary' icon='star' inverted loading>Some text</Button>
    <Button color='success' outlined loading>Some text</Button>
  </Box>
)

export default Component
```
