import { extendTheme } from "@chakra-ui/react";

export const newTheme = extendTheme({
  colors: {
    sky: {
      100: '#85260D',
      200: '#C6DCE4'
    },
    sand: {
      100: '#FFE6E6',
      200: '#F2D1D1'
    },
    gray: '#373737'
  },
  fonts: {
    heading: `'Inter', sans-serif`
  },
  letterSpacings: {
    logo: '0.285em',
    info: '-0.055em',
    bigBackground: '0.46em',
    smallBackground: '-0.045em',
    text: '0.12em'
  }
})