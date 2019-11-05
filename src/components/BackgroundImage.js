import React from 'react'
import PropTypes from 'prop-types'

import { Box } from 'rebass/styled-components'

const BackgroundImage = ({ src, ...rest }) => (
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

BackgroundImage.propTypes = {
  src: PropTypes.string.isRequired,
}

export default BackgroundImage
