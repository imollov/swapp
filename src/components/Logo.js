import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Heading } from 'rebass/styled-components'

import { ThemeContext } from './ThemeProvider'

const Logo = ({ variant, ...rest }) => {
  const { toggleMode } = useContext(ThemeContext)

  return (
    <Heading
      {...rest}
      variant={variant}
      as="span"
      sx={{ cursor: 'pointer' }}
      onClick={() => toggleMode()}
    >
      SWAPP
    </Heading>
  )
}

Logo.propTypes = {
  variant: PropTypes.oneOf(['logo.small', 'logo.large', undefined]),
}

export default Logo
