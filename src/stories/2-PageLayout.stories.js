import React from 'react'

import { Box } from 'rebass/styled-components'
import ThemeProvider from '../components/ThemeProvider'

import AppBar from '../components/AppBar'

export default {
  title: 'PageLayout',
}

export const Header = () => {
  return (
    <ThemeProvider>
      <Box>
        <AppBar />
      </Box>
    </ThemeProvider>
  )
}
