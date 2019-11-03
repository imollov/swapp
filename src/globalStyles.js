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

const palette = {
  yellow: '#FFE300',
  lightBlue: '#4BD5EE',
  black: '#000',
  white: '#fff',
}

const themes = {
  initialColorMode: 'light',
  colors: {
    primary: palette.lightBlue,
    secondary: palette.yellow,
    text: '#4E5B6E',
    background: '#E8EAED',
    muted: palette.white,
    buttonBg: palette.black,
    buttonText: palette.yellow,
    borderColor: '#E5E9F2',
    subHeading: '#4E5B6E',
    detailLabel: '#4E5B6E',
    detailValue: palette.lightBlue,
    modes: {
      dark: {
        primary: palette.yellow,
        secondary: palette.lightBlue,
        text: '#abb1ba',
        background: palette.black,
        muted: '#333',
        buttonBg: palette.lightBlue,
        buttonText: palette.yellow,
        borderColor: '#3C4858',
        subHeading: palette.lightBlue,
        detailLabel: palette.lightBlue,
        detailValue: palette.yellow,
      },
    },
  },
  fonts: {
    body: 'Helvetica',
    heading: 'starwars',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [16, 18, 22, 26, 32],
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
  },
  lineHeights: {
    heading: 1,
    body: 1.2,
  },
  letterSpacings: {
    body: 0.1,
    heading: 1,
    button: 2,
  },
  space: [0, 4, 8, 16, 32, 64, 128],
  radii: {
    default: 8,
    circle: 99999,
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontFamily: 'heading',
      fontWeight: 'bold',
      letterSpacing: 'button',
      color: 'buttonText',
      bg: 'buttonBg',
      borderRadius: 'default',
      cursor: 'pointer',
      px: 4,
      py: 2,
    },
    secondary: {
      variant: 'buttons.primary',
      fontSize: 1,
      px: 3,
    },
  },
  variants: {
    card: {
      bg: 'muted',
      color: 'text',
      border: '1px solid',
      borderRadius: 'default',
      borderColor: 'borderColor',
      overflow: 'hidden',
    },
  },
  text: {
    body: {
      fontSize: 0,
      fontFamily: 'body',
      lineHeight: 'body',
      letterSpacing: 'body',
    },
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      letterSpacing: 'heading',
      color: 'primary',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 3,
      py: 3,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 1,
    },
    sub: {
      fontSize: 3,
      color: 'subHeading',
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
