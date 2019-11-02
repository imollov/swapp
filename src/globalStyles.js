import { createGlobalStyle } from 'styled-components'
import starwars from './fonts/starwars.ttf'

export const theme = {
  colors: {
    text: '#abb1ba',
    background: '#000',
    primary: '#FFE300',
    secondary: '#4BD5EE',
    gray: '#333',
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
      bg: 'secondary',
      borderRadius: 'default',
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

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: starwars;
    src: url(${starwars}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`

export default GlobalStyle
