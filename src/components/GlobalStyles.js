import { createGlobalStyle, withTheme } from 'styled-components'
import starwars from '../fonts/starwars.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: starwars;
    src: url(${starwars}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    margin: 0;
  }
`

export default withTheme(GlobalStyle)
