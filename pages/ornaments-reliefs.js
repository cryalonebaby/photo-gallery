import { Flex } from '@chakra-ui/react'
import BgText from '../components/BgText'
import Gallery from '../components/Gallery'
import Scroll from '../components/Scroll'

const images = [
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
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/ornaments%2F1.jpg?alt=media&token=40f838e8-0bba-407e-97f6-a2d020f0a2a0',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/ornaments%2F2.jpg?alt=media&token=a7f26934-08ed-43cf-a637-8168307580ad',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/ornaments%2F3.jpg?alt=media&token=0edfe44f-5977-498c-adea-9c82e1e61a75',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/ornaments%2F4.jpg?alt=media&token=d59cd145-f30c-4256-85f7-176ee0af5e9b',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/ornaments%2F2%2F1.jpg?alt=media&token=89ee3b94-82d7-4ac5-a859-dbae401326e7',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/ornaments%2F2%2F2.jpg?alt=media&token=64cd10c9-9d24-458b-bf0f-c40e17a87ff1',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/ornaments%2F2%2F3.jpg?alt=media&token=fc8c4ae4-b2cd-43b2-83c1-690bbc02e4b4',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/ornaments%2F2%2F4.jpg?alt=media&token=04305c93-4cbb-4c90-846e-bdcab78ade46',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/ornaments%2F2%2F5.jpg?alt=media&token=6ef25bc8-bc44-47b1-abe5-b57ccc5e4adc',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/ornaments%2F2%2F6.jpg?alt=media&token=ada308f9-31b0-429a-9e74-4d22733e256b',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/ornaments%2F2%2F7.jpg?alt=media&token=3ce2ac2f-f95d-40b9-9188-6d8749a5246c',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/ornaments%2F2%2F8.jpg?alt=media&token=07c4abd0-0722-4547-acec-93b67d8e8500',
]

const ThirdCollection = () => {
  return (
    <Flex overflow={'hidden'} justifyContent={'center'} minWidth={360}>
      <BgText collectionName={'Ornaments & Bas-reliefs'}/>
      <Gallery collection={images}/>
      <Scroll/>
    </Flex>
  )
}

export default ThirdCollection