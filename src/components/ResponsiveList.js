import React from 'react'
import { Button, Box } from 'rebass/styled-components'
import { Tiles } from '@rebass/layout/styled-components'

export default ({ maxColumns = 3, hasMore = false, children, ...rest }) => (
  <Box {...rest}>
    <Tiles columns={[1, null, maxColumns]}>{children}</Tiles>
    {hasMore && (
      <Box py={3} textAlign="center">
        <Button variant="secondary">Load More</Button>
      </Box>
    )}
  </Box>
)
