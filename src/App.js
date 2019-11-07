import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import client from './client'

import ThemeProvider from './components/ThemeProvider'
import Pages from './pages'

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider>
          <Pages />
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
