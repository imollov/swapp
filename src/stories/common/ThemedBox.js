import React, { useContext } from 'react'
import { ThemeContext } from '../../components/ThemeProvider'
import { withKnobs, select } from '@storybook/addon-knobs'
import { Box } from 'rebass/styled-components'

export default props => {
  withKnobs()
  const { mode, toggleMode } = useContext(ThemeContext)

  const theme = select('Theme', { dark: 'dark', light: 'light' }, 'dark')
  theme !== mode && toggleMode()

  return (
    <Box {...props} variant="content">
      {props.children}
    </Box>
  )
}
