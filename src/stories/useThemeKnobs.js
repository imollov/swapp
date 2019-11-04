import { useContext } from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'

import { ThemeContext } from '../components/ThemeProvider'

export default () => {
  withKnobs()
  const { mode, toggleMode } = useContext(ThemeContext)
  const theme = select('Theme', { dark: 'dark', light: 'light' }, 'dark')
  theme !== mode && toggleMode()
}
