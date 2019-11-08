import React, { createContext, useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyles'
import getTheme from '../utils/getTheme'

const defaultTheme = 'light'

export const ThemeContext = createContext(defaultTheme)

export default props => {
  const localTheme = localStorage.getItem('theme')
  const [mode, setMode] = useState(localTheme)
  const theme = getTheme(mode)

  useEffect(() => {
    localStorage.setItem('theme', mode)
  })

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
