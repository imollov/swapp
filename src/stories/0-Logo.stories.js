import React from 'react'
import ThemeProvider from '../components/ThemeProvider'

import { Box } from 'rebass/styled-components'
import Logo from '../components/Logo'

export default {
  title: 'Logo',
}

export const Large = () => {
  return (
    <ThemeProvider>
      <Box variant="content" width={580}>
        <Box variant="card" bg="appBar" p={50} textAlign="center">
          <Logo variant="logo.large" />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export const Small = () => {
  return (
    <ThemeProvider>
      <Box variant="content" width={580}>
        <Box variant="card" bg="appBar" p={50} textAlign="center">
          <Logo variant="logo.small" />
        </Box>
      </Box>
    </ThemeProvider>
  )
}
