import React from 'react'

import { Box } from 'rebass/styled-components'
import ThemeProvider from '../components/ThemeProvider'
import ThemedBox from './common/ThemedBox'

import AppBar from '../components/AppBar'
import Divider from '../components/Divider'

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

export const Line = () => {
  return (
    <ThemeProvider>
      <ThemedBox>
        <Box m={5}>
          <Divider />
        </Box>
        <Box m={5} width={1 / 2}>
          <Divider />
        </Box>
        <Box m={5} width={1 / 4}>
          <Divider />
        </Box>
      </ThemedBox>
    </ThemeProvider>
  )
}
