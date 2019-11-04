import React from 'react'
import useThemeKnobs from './useThemeKnobs'
import ThemeProvider from '../components/ThemeProvider'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { Box } from 'rebass/styled-components'
import LoginForm from '../pages/login/components/LoginForm'

export default {
  title: 'Form',
}

const ContentBox = props => {
  useThemeKnobs()
  return (
    <Box {...props} variant="content" width={580}>
      {props.children}
    </Box>
  )
}

export const Login = () => {
  const errorMessage = text('Error message')

  return (
    <ThemeProvider>
      <ContentBox>
        <Box variant="card">
          <LoginForm
            errorMsg={errorMessage}
            onSubmit={formData => action('submitted')(formData)}
          />
        </Box>
      </ContentBox>
    </ThemeProvider>
  )
}
