import { Flex } from '@chakra-ui/react'
import BgText from '../components/BgText'
import Gallery from '../components/Gallery'
import Scroll from '../components/Scroll'


const images = [
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F1.jpg?alt=media&token=33f52fc4-c534-4d50-804a-9c89f4d3a854',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F10.jpg?alt=media&token=a9648898-f394-46e7-ae6a-0d37b2764e34',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F12.jpg?alt=media&token=2987d084-28b1-42f8-afb2-4a26d2d0fee1',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F13.jpg?alt=media&token=36873bb5-aa96-4bf2-a50e-dc9fa7371d45',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F14.jpg?alt=media&token=067bb13e-65ae-469f-aa35-568d3ccf86d6',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F15.jpg?alt=media&token=5c9563e4-6b83-4a79-838d-4bdf6f9cb41f',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F16.jpg?alt=media&token=37ad0934-6d3d-4ea5-b52a-ee1cb3b2389b',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F2.jpg?alt=media&token=17eaa909-c9db-435f-bc89-6584fcaf54b8',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F3.jpg?alt=media&token=87a11c71-c1d6-4abb-b144-dee7312e7497',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F4.jpg?alt=media&token=1e6f4714-1400-4f43-8289-afe2a0d61f09',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F5.jpg?alt=media&token=6a2aae0a-9ddc-4434-99c5-6dd171ab51ae',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F6.jpg?alt=media&token=ab336a7d-911e-4a63-aa7d-97e0015a5bef',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F7.jpg?alt=media&token=97168353-2c93-4279-a3dc-0a2420726352',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F8.jpg?alt=media&token=cb3cb2fc-81c9-4f31-8461-00e98cd72698',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F9.jpg?alt=media&token=a5eb1546-0b88-4e9f-bac6-ab36be42f2bb',
]

export default function Home() {

  return (
    <Flex overflow={'hidden'} justifyContent={'center'} minWidth={360} px={6}>
      <BgText collectionName={'Chess Collection'}/>
      <Gallery collection={images}/>
      <Scroll/>
    </Flex>
  )
}
