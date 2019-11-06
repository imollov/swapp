import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass/styled-components'
import AppBar from './AppBar'

const PageLayout = ({ variant = 'content', children, ...rest }) => (
  <>
    <AppBar />
    <Box variant={variant} {...rest}>
      {children}
    </Box>
  </>
)

PageLayout.propTypes = {
  variant: PropTypes.oneOf(['content', 'fitContent']),
}

export default PageLayout
