import React, { useContext } from 'react'
import { Heading } from 'rebass/styled-components'

import { ThemeContext } from './ThemeProvider'

export default props => {
  const { toggleMode } = useContext(ThemeContext)

  return (
    <Heading
      {...props}
      as="span"
      sx={{ cursor: 'pointer' }}
      onClick={() => toggleMode()}
    >
      SWAPP
    </Heading>
  )
}
