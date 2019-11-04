import palette from './palette'

export default {
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
    appBar: palette.black,
    link: palette.lightBlue,
    modes: {
      dark: {
        primary: palette.yellow,
        secondary: palette.lightBlue,
        text: '#abb1ba',
        background: palette.black,
        muted: '#333',
        buttonBg: palette.lightBlue,
        borderColor: '#3C4858',
        subHeading: palette.lightBlue,
        detailLabel: palette.lightBlue,
        detailValue: palette.yellow,
        appBar: '#333',
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
    heading: 1.2,
    button: 2,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
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
    content: {
      width: '970px',
      bg: 'background',
      mx: 'auto',
      pt: '5',
      pb: '6',
    },
    fitContent: {
      variant: 'variants.container',
      width: '740px',
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
    logo: {
      small: {
        variant: 'text.heading',
        fontSize: 4,
      },
    },
    link: {
      variant: 'text.body',
      color: 'link',
      cursor: 'pointer',
    },
  },
}
