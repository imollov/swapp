import React from 'react'
import ThemedContainer from './common/ThemedContainer'
import { Button } from 'rebass/styled-components'

export default {
  title: 'Button',
}

export const Primary = () => {
  return (
    <ThemedContainer textAlign="center">
      <Button variant="primary">Boop</Button>
    </ThemedContainer>
  )
}
export const Secondary = () => {
  return (
    <ThemedContainer textAlign="center">
      <Button variant="secondary">Boop</Button>
    </ThemedContainer>
  )
}
