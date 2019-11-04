import React from 'react'
import { Box, Button } from 'rebass/styled-components'
import useThemeKnobs from './useThemeKnobs'

import ThemeProvider from '../components/ThemeProvider'

export default {
  title: 'Button',
}

const ContentBox = props => {
  useThemeKnobs()
  return (
    <Box {...props} variant="content" width={320} textAlign="center">
      {props.children}
    </Box>
  )
}

export const Primary = () => {
  return (
    <ThemeProvider>
      <ContentBox>
        <Button variant="primary">Boop</Button>
      </ContentBox>
    </ThemeProvider>
  )
}
export const Secondary = () => {
  return (
    <ThemeProvider>
      <ContentBox>
        <Button variant="secondary">Boop</Button>
      </ContentBox>
    </ThemeProvider>
  )
}
