import light from './light'
import dark from './dark'

export default {
  colors: {
    ...light,
    modes: {
      dark,
    },
  },
  fonts: {
    body: 'Helvetica',
    heading: 'starwars',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [16, 18, 20, 26, 32, 36, 72, 84],
  fontWeights: {
    body: 400,
    heading: 800,
  },
  lineHeights: {
    heading: 1,
    body: 1.2,
  },
  letterSpacings: {
    body: 0.1,
    heading: 1.2,
    button: 2,
  },
  space: [0, 4, 12, 16, 32, 64, 128, 256],
  radii: {
    default: 8,
    circle: 99999,
  },
  buttons: {
    primary: {
      fontSize: [1, 1, 2],
      fontFamily: 'heading',
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
    content: {
      width: [400, 600, 1100],
      m: 'auto',
      p: 4,
    },
    fitContent: {
      variant: 'variants.content',
      maxWidth: 840,
    },
  },
  text: {
    body: {
      fontSize: [1, null, 0],
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
      fontSize: [5, null, 4],
    },
    h2: {
      variant: 'text.heading',
      fontSize: [4, null, 3],
    },
    h3: {
      variant: 'text.heading',
      fontSize: [2, 2, 1],
    },
    sub: {
      variant: 'text.heading',
      color: 'subHeading',
      fontSize: [2, 2, 3],
    },
    logo: {
      small: {
        variant: 'text.heading',
        color: 'logo',
        fontSize: 4,
      },
      large: {
        variant: 'text.heading',
        color: 'logo',
        fontSize: 7,
      },
    },
    link: {
      variant: 'text.body',
      color: 'link',
      cursor: 'pointer',
    },
    error: {
      variant: 'text.body',
      color: 'error',
      fontSize: 2,
    },
  },
}
