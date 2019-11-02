import React from 'react'
import { Button } from 'rebass/styled-components'
import { ThemeProvider } from 'styled-components'
import GlobalStyle, { theme } from '../globalStyles'

export default {
  title: 'Button',
}

export const primary = () => (
  <ThemeProvider theme={{ ...theme }}>
    <Button variant="primary">Boop</Button>
    <GlobalStyle />
  </ThemeProvider>
)

export const secondary = () => (
  <ThemeProvider theme={{ ...theme }}>
    <Button variant="secondary">Boop</Button>
    <GlobalStyle />
  </ThemeProvider>
)
