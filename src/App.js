import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import ThemeProvider from './components/ThemeProvider'
import Pages from './pages'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Pages />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
