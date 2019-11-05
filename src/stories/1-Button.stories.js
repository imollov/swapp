import React from 'react'
import { Button } from 'rebass/styled-components'
import ThemeProvider from '../components/ThemeProvider'
import ThemedBox from './common/ThemedBox'

export default {
  title: 'Button',
}

export const Primary = () => {
  return (
    <ThemeProvider>
      <ThemedBox textAlign="center">
        <Button variant="primary">Boop</Button>
      </ThemedBox>
    </ThemeProvider>
  )
}
export const Secondary = () => {
  return (
    <ThemeProvider>
      <ThemedBox textAlign="center">
        <Button variant="secondary">Boop</Button>
      </ThemedBox>
    </ThemeProvider>
  )
}
