import { Flex } from '@chakra-ui/react'
import React from 'react'
import BgText from '../components/BgText'
import Gallery from '../components/Gallery'
import Scroll from '../components/Scroll'

const images = [
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F15.JPG?alt=media&token=c16689f0-8912-44a2-9000-b572815732ae',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F16.JPG?alt=media&token=7a556690-d19a-4598-9922-3f2e07570774',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F17.JPG?alt=media&token=c9f6da8f-d306-49d3-8c08-bce8b1df5b3a',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F18.jpg?alt=media&token=5bf361d4-85a3-4fad-b497-a8e4d79fc6f1',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/crockery%2F19.jpg?alt=media&token=f3898e27-558c-496a-9ee0-a8cc576ebb35',
]

const Decorations = () => {
  return (
    <Flex overflow={'hidden'} justifyContent={'center'} minWidth={360}>
      <BgText collectionName={'Table Decorations'}/>
      <Gallery collection={images}/>
      <Scroll/>
    </Flex>
  )
}

export default Decorations