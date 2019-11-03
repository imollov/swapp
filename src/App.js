import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle, { theme } from './globalStyles'

import AppBar from './components/AppBar'
import EpisodePage from './pages/episodes/pages/episode'

const App = () => {
  return (
    <ThemeProvider theme={{ ...theme('dark') }}>
      <AppBar />
      <EpisodePage />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
