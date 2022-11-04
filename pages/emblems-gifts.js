import { Flex } from '@chakra-ui/react'
import React from 'react'
import BgText from '../components/BgText'
import Gallery from '../components/Gallery'
import Scroll from '../components/Scroll'

const images = [
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2Fedit-35.jpg?alt=media&token=7de750e9-3f7f-49d8-baff-efbd558a3c52',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2Fphoto_2022-10-08_07-16-48.jpg?alt=media&token=0460dc39-b3a5-4956-b7e6-3fa5ca0e49ea',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2Fphoto_2022-10-08_07-16-55.jpg?alt=media&token=b94ecdaa-6c1a-463d-a473-a46b737bd8d5',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2Fphoto_2022-10-08_07-17-03.jpg?alt=media&token=72705e5f-d82e-4973-8cc0-1cec8480e285',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2Fphoto_2022-10-08_07-17-18.jpg?alt=media&token=bd8451a9-c3ad-4501-a5a0-d14f291c04bf',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2Fphoto_2022-10-08_07-17-39.jpg?alt=media&token=c02bf334-0a9f-4429-ae75-aafaf456b495',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2Fphoto_2022-10-08_07-17-45.jpg?alt=media&token=21f8d01a-8872-48eb-b716-b319b1b31163',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2Fphoto_2022-10-08_07-17-52.jpg?alt=media&token=d61798fe-b657-4d18-b930-d5b97b316dac',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/mini-sculptures%2FPA303264_-_kopiya.jpg?alt=media&token=16be61de-63b4-49f9-b14c-7334bfa1e8ec',
]

const EmblemsGifts = () => {
  return (
    <Flex overflow={'hidden'} justifyContent={'center'} minWidth={360}>
      <BgText collectionName={'Emblems & Gifts'}/>
      <Gallery collection={images}/>
      <Scroll/>
    </Flex>
  )
}

export default EmblemsGifts