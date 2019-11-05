import React from 'react'
import PropTypes from 'prop-types'

import { Button, Box } from 'rebass/styled-components'
import { Tiles } from '@rebass/layout/styled-components'

const ResponsiveList = ({ hasMore = false, children, ...rest }) => (
  <Box>
    <Tiles {...rest}>{children}</Tiles>
    {hasMore && (
      <Box py={3} textAlign="center">
        <Button variant="secondary">Load More</Button>
      </Box>
    )}
  </Box>
)

ResponsiveList.propTypes = {
  hasMore: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
}

export default ResponsiveList
