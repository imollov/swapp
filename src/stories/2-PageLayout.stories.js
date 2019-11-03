import React from 'react'
import ThemedContainer from './common/ThemedContainer'

import AppBar from '../components/AppBar'

export default {
  title: 'PageLayout',
}

export const Header = () => {
  return (
    <ThemedContainer>
      <AppBar />
    </ThemedContainer>
  )
}
