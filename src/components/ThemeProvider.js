import React, { useState, createContext } from 'react'
import merge from 'lodash.merge'
import get from 'lodash.get'
import baseTheme from '../theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyles'

export const modes = ['light', 'dark']

export const getTheme = mode =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  })

export const ThemeContext = createContext(modes[0])

export default props => {
  const [mode, setMode] = useState(modes[0])
  const theme = getTheme(mode)

  const toggleMode = () => setMode(mode === 'light' ? 'dark' : 'light')

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>
        {props.children}
        <GlobalStyle />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
