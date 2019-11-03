import React from 'react'
import { Box } from 'rebass/styled-components'
import { ThemeProvider } from 'styled-components'
import { withKnobs, select } from '@storybook/addon-knobs'

import GlobalStyle, { theme } from '../../globalStyles'

export default ({ children, ...rest }) => {
  withKnobs()
  const mode = select('Theme', { dark: 'dark', light: 'light' }, 'dark')
  return (
    <ThemeProvider theme={{ ...theme(mode) }}>
      <Box bg="background">
        <Box variant="content">
          <Box {...rest} mx="auto">
            {children}
          </Box>
        </Box>
      </Box>
      <GlobalStyle />
    </ThemeProvider>
  )
}
