import React from 'react'
import { action } from '@storybook/addon-actions'
import { Box } from 'rebass/styled-components'
import ThemeProvider from '../components/ThemeProvider'
import ThemedBox from './common/ThemedBox'

import LoginForm from '../pages/login/components/LoginForm'

export default {
  title: 'Form',
}

export const Login = () => {
  return (
    <ThemeProvider>
      <ThemedBox maxWidth={580}>
        <Box variant="card" p={4}>
          <LoginForm onSubmit={formData => action('submitted')(formData)} />
        </Box>
      </ThemedBox>
    </ThemeProvider>
  )
}
