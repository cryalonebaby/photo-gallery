import { Flex } from '@chakra-ui/react'
import BgText from '../components/BgText'
import Gallery from '../components/Gallery'
import Scroll from '../components/Scroll'

const images = [
  // emblems
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2F74.JPG?alt=media&token=beb77076-563d-479e-8f26-b79947d15a0b',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2F75.JPG?alt=media&token=a54079cf-efe2-4897-b8e6-df3be81f0e16',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2F76.JPG?alt=media&token=9b6afc46-2b1b-4264-8133-1b545253ec41',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2F77.JPG?alt=media&token=5dcd7a81-f2b8-46f7-a87c-2ec134ca0f7f',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2F78.JPG?alt=media&token=4d361bf3-a958-43b4-b401-2afc73008412',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2F79.JPG?alt=media&token=77016d17-b0cd-42c8-958c-3e61b7ae8ba8',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2F80.JPG?alt=media&token=c5dced90-b936-4797-8d68-670fe42abc5a',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2F81.JPG?alt=media&token=6bed5399-d4d0-4b08-b1a7-b0b718f4109c',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2Fphoto_2022-08-29_22-05-11.jpg?alt=media&token=867b379c-4c22-4795-95fc-dc865fea1004',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2Fphoto_2022-08-29_22-05-25.jpg?alt=media&token=1fa4aa67-dea9-4b02-9569-b3b70fd17a81',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2Fphoto_2022-08-29_22-05-58.jpg?alt=media&token=e0a893c7-ebb2-415c-ac67-1932b24a38e1',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2Fphoto_2022-08-29_22-06-22.jpg?alt=media&token=26a0b822-f76e-4277-81a9-dc829b6a09c3',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2Fphoto_2022-08-29_22-06-38.jpg?alt=media&token=cb483bbb-982f-4636-9fdc-aecfb448bf01',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2Fphoto_2022-08-29_22-06-53.jpg?alt=media&token=5b08781c-a5fc-4e81-baaf-2cc476d35029',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2Fphoto_2022-08-29_22-07-22.jpg?alt=media&token=4452751e-58f6-46b0-96f6-9d95f20919bb',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2Fphoto_2022-10-12_13-24-24%20(3).jpg?alt=media&token=387885da-096c-4e28-a01f-212aa24aeb04',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2Fphoto_2022-10-12_13-24-25%20(2).jpg?alt=media&token=5e1399f5-93f1-42a9-b33d-2c33214d3772',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2Fphoto_2022-10-12_13-24-25%20(4).jpg?alt=media&token=d5e523ed-ef11-42d2-a8dd-5d0128e8e0e7',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2Fphoto_2022-10-12_13-24-26%20(3).jpg?alt=media&token=4a82e20a-2cec-4da0-822d-bcd8cf34129a',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2Fphoto_2022-10-12_13-24-27%20(3).jpg?alt=media&token=43d0ef9b-a021-4041-a91d-6d051c89dcf8',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2Fphoto_2022-10-12_13-24-27.jpg?alt=media&token=603e6c61-6a93-4764-ab08-a9d17a08084b',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2Fphoto_2022-10-12_13-24-28%20(3).jpg?alt=media&token=07d9e7df-d7d9-4f95-b17a-67b364977458',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2Fphoto_2022-10-12_13-24-28.jpg?alt=media&token=24ded550-9649-43ce-a952-6a289b963465',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2Fphoto_2022-10-12_13-24-45.jpg?alt=media&token=ee1ff76a-7b32-45ba-8aa9-aa6dd3be7113',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/wall%2Fphoto_2022-10-12_13-24-46.jpg?alt=media&token=db15afbc-4017-46fc-bd97-3a32f9dca442',
]

const ThirdCollection = () => {
  return (
    <Flex overflow={'hidden'} justifyContent={'center'} minWidth={360}>
      <BgText collectionName={'Wall Painting'}/>
      <Gallery collection={images}/>
      <Scroll/>
    </Flex>
  )
}

export default ThirdCollection