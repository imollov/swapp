import React from 'react'

import { Box } from 'rebass/styled-components'
import ThemeProvider from '../components/ThemeProvider'
import useThemeKnobs from './useThemeKnobs'

import AppBar from '../components/AppBar'
import Divider from '../components/Divider'

export default {
  title: 'PageLayout',
}

const ContentBox = props => {
  useThemeKnobs()
  return (
    <Box {...props} variant="content">
      {props.children}
    </Box>
  )
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
      <ContentBox>
        <Box m={5}>
          <Divider />
        </Box>
        <Box m={5} width={1 / 2}>
          <Divider />
        </Box>
        <Box m={5} width={1 / 4}>
          <Divider />
        </Box>
      </ContentBox>
    </ThemeProvider>
  )
}
