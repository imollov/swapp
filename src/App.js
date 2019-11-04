import React from 'react'
import ThemeProvider from './components/ThemeProvider'

import AppBar from './components/AppBar'
import EpisodePage from './pages/episodes/pages/episode'

const App = () => {
  return (
    <ThemeProvider>
      <AppBar />
      <EpisodePage />
    </ThemeProvider>
  )
}

export default App
