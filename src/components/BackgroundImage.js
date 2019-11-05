import React from 'react'
import { Box } from 'rebass/styled-components'

export default ({ src, ...rest }) => (
  <Box
    {...rest}
    sx={{
      backgroundImage: `url(${src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      flexShrink: 0,
    }}
  />
)
