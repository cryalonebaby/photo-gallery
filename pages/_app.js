import Head from 'next/head'
import {Box, ChakraProvider, ColorModeScript, Flex} from '@chakra-ui/react'
import {newTheme} from '../styles/theme'
import "@fontsource/inter/100.css"
import Layout from '../components/Layout'
import { useDisclosure } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Head>
        <title>Sculpture Collection YY</title>
        <meta name="description" content="Sculpture collection YY. Art gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={newTheme}>
        <ColorModeScript initialColorMode='dark'/>
        <Flex height={'100%'} position={'absolute'} top={0} left={0}>
          <Sidebar 
            isOpen={isOpen}
            onToggle={onToggle}
          />
        </Flex>
        <Layout onToggle={onToggle} isOpen={isOpen}>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
