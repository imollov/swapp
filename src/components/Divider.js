import React from 'react'
import { Box } from 'rebass/styled-components'

export default props => (
  <Box
    {...props}
    as="hr"
    sx={{
      border: 'none',
      bg: 'divider',
      height: 1,
    }}
  />
)
