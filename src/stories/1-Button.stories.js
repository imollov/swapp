import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'

import { Button } from 'rebass/styled-components'
import { ThemeProvider } from 'styled-components'

import GlobalStyle, { theme } from '../globalStyles'

export default {
  title: 'Button',
}

export const Primary = () => {
  withKnobs()
  const mode = select('Theme', { dark: 'dark', light: 'light' }, 'dark')
  return (
    <ThemeProvider theme={{ ...theme(mode) }}>
      <Button variant="primary">Boop</Button>
      <GlobalStyle />
    </ThemeProvider>
  )
}
export const Secondary = () => {
  withKnobs()
  const mode = select('Theme', { dark: 'dark', light: 'light' }, 'dark')
  return (
    <ThemeProvider theme={{ ...theme(mode) }}>
      <Button variant="secondary">Boop</Button>
      <GlobalStyle />
    </ThemeProvider>
  )
}
