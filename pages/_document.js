import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import {newTheme} from '../styles/theme'

export default function Document() {
  return (
    <Html>
      <Head/>
      <body>
        <ColorModeScript initialColorMode={newTheme.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}