import React from 'react'
import { Box, Heading } from 'rebass/styled-components'
import ThemeProvider from '../components/ThemeProvider'
import ThemedBox from './common/ThemedBox'

export default {
  title: 'Heading',
}

export const H1 = () => {
  return (
    <ThemeProvider>
      <ThemedBox>
        <Box textAlign="center">
          <Heading variant="h1">May the force be with you</Heading>
        </Box>
      </ThemedBox>
    </ThemeProvider>
  )
}

export const H2 = () => {
  return (
    <ThemeProvider>
      <ThemedBox>
        <Box textAlign="center">
          <Heading variant="h2">May the force be with you</Heading>
        </Box>
      </ThemedBox>
    </ThemeProvider>
  )
}

export const H3 = () => {
  return (
    <ThemeProvider>
      <ThemedBox>
        <Box textAlign="center">
          <Heading variant="h3">May the force be with you</Heading>
        </Box>
      </ThemedBox>
    </ThemeProvider>
  )
}

export const Sub = () => {
  return (
    <ThemeProvider>
      <ThemedBox>
        <Box textAlign="center">
          <Heading variant="sub">
            No! Try not! Do or do not, there is no try.
          </Heading>
        </Box>
      </ThemedBox>
    </ThemeProvider>
  )
}
