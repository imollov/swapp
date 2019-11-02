import { createGlobalStyle } from 'styled-components'
import starwars from './fonts/starwars.ttf'

const getTheme = theme => mode => {
  const {
    colors,
    colors: { modes },
    initialColorMode,
  } = theme
  return {
    ...theme,
    colors:
      mode === initialColorMode ? { ...colors } : { ...colors, ...modes[mode] },
  }
}

const themes = {
  initialColorMode: 'light',
  colors: {
    primary: '#FFE300',
    secondary: '#4BD5EE',
    text: '#4E5B6E',
    background: '#E8EAED',
    muted: '#FFF',
    buttonBackground: '#000',
    modes: {
      dark: {
        text: '#abb1ba',
        background: '#000',
        muted: '#333',
        buttonBackground: '#4BD5EE',
      },
    },
  },
  fonts: {
    body: 'Helvetica',
    heading: 'starwars',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [14, 16, 20, 24],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, 4, 8, 16, 32, 64, 128],
  radii: {
    default: 4,
    circle: 99999,
  },
  buttons: {
    primary: {
      fontSize: 3,
      fontFamily: 'heading',
      fontWeight: 'bold',
      letterSpacing: 3,
      color: 'primary',
      bg: 'buttonBackground',
      borderRadius: 'default',
      cursor: 'pointer',
      px: 4,
      py: 2,
    },
    secondary: {
      variant: 'buttons.primary',
      fontSize: 2,
      px: 3,
    },
  },
}

export const theme = getTheme(themes)

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: starwars;
    src: url(${starwars}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`

export default GlobalStyle
