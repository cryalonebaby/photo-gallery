import { Flex } from '@chakra-ui/react'
import BgText from '../components/BgText'
import Gallery from '../components/Gallery'
import Scroll from '../components/Scroll'

const images = [
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2F1.JPG?alt=media&token=27b6f2ea-b57a-496a-a3f5-408b55cb3793',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2F2.JPG?alt=media&token=d4d9c543-0e41-45f1-8862-bab63802b42f',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2F3.JPG?alt=media&token=29fb1832-f1b1-4ed1-9695-0f7dd5b60b99',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2F4.jpg?alt=media&token=9fdde823-f99e-4e4f-b126-0b5f53033f0c',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2F5.JPG?alt=media&token=4a800d4c-0e31-4712-b891-90576e160e35',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2F6.jpg?alt=media&token=cbe66026-a626-4f9c-8e91-4136b54be8a0',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2F7.jpg?alt=media&token=39a6e66d-4ac4-4e9a-bc0f-996c7787cfe1',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2F8.jpg?alt=media&token=4d54f58f-ee7e-4028-b935-daafa5c0c382',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2Fphoto_2022-10-08_07-16-48.jpg?alt=media&token=0460dc39-b3a5-4956-b7e6-3fa5ca0e49ea',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2Fphoto_2022-10-08_07-16-55.jpg?alt=media&token=b94ecdaa-6c1a-463d-a473-a46b737bd8d5',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2Fphoto_2022-10-08_07-17-03.jpg?alt=media&token=72705e5f-d82e-4973-8cc0-1cec8480e285',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2Fphoto_2022-10-08_07-17-18.jpg?alt=media&token=bd8451a9-c3ad-4501-a5a0-d14f291c04bf',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2Fphoto_2022-10-08_07-17-39.jpg?alt=media&token=c02bf334-0a9f-4429-ae75-aafaf456b495',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2Fphoto_2022-10-08_07-17-45.jpg?alt=media&token=21f8d01a-8872-48eb-b716-b319b1b31163',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2Fphoto_2022-10-08_07-17-52.jpg?alt=media&token=d61798fe-b657-4d18-b930-d5b97b316dac',
]

const Statues = () => {
  return (
    <Flex overflow={'hidden'} justifyContent={'center'} minWidth={360}>
      <BgText collectionName={'Statues'}/>
      <Gallery collection={images}/>
      <Scroll/>
    </Flex>
  )
}

export default Statues