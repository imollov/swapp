import React from 'react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Box } from 'rebass/styled-components'
import ThemeProvider from '../components/ThemeProvider'
import ThemedBox from './common/ThemedBox'

import LoginForm from '../pages/login/components/LoginForm'

export default {
  title: 'Form',
}

export const Login = () => {
  const errorMessage = text('Error message')

  return (
    <ThemeProvider>
      <ThemedBox width={580}>
        <Box variant="card">
          <LoginForm
            errorMsg={errorMessage}
            onSubmit={formData => action('submitted')(formData)}
          />
        </Box>
      </ThemedBox>
    </ThemeProvider>
  )
}
