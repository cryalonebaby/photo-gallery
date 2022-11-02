import { Flex, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'
import { useState } from 'react'
import Scroll from '../components/Scroll'

const authorImages = [
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/about%2Fauthor%2F3.jpg?alt=media&token=922636eb-8ce7-4591-af16-1f3f583eaec0',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/about%2Fauthor%2Fphoto_2022-10-08_07-18-04.jpg?alt=media&token=efc3748b-d00f-4b9c-805b-1c7f8d8a1c96'
]

const motion = [
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/about%2Fmotion%2F1.JPG?alt=media&token=adb11144-03ef-4917-99cf-70ef0f577ca4',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/about%2Fmotion%2F2.JPG?alt=media&token=38bf7912-4123-4c8c-a36a-bd5f04584b54',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/about%2Fmotion%2F3.JPG?alt=media&token=84222eb5-fef1-40d0-b020-9fd2fdf295d3',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/about%2Fmotion%2F4.JPG?alt=media&token=01a6f547-b306-48b1-a02a-0e349318a455',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/about%2Fmotion%2F5.JPG?alt=media&token=a271f96d-b100-4475-9e4a-2bf28edfe5a3',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/about%2Fmotion%2F6.JPG?alt=media&token=dce75fa1-af9b-47d0-99bf-f73731803261',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/about%2Fmotion%2F7.JPG?alt=media&token=371d3fb5-f49e-4aad-8f3e-e3f76ac6d6ed',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/about%2Fmotion%2F8.JPG?alt=media&token=7f2c3282-d009-4452-a8f3-5a70791f988f',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/about%2Fmotion%2F9.JPG?alt=media&token=a7f886fd-d41f-48cb-85d1-67c9e9d81782',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/about%2Fmotion%2F10.JPG?alt=media&token=b72cdb34-0b88-424c-8dea-1cf7bc016ff4',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/about%2Fmotion%2F11.JPG?alt=media&token=02ee4a4c-e823-42b5-a3ad-80c435d1cf67',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/about%2Fmotion%2F12.JPG?alt=media&token=083d207d-f01a-405b-a581-a3d4845e4f9a',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/about%2Fmotion%2F13.JPG?alt=media&token=74045b83-4f66-4b1f-8ad6-339fb91b349d',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/about%2Fmotion%2F14.JPG?alt=media&token=07105bfd-3a3b-473e-9e65-6a5eb15434d9',
]

const About = () => {
  const marginBottom = 16
  
  const [selected, setSelected] = useState(0)

  const nextImg = () => {
    if(selected === motion.length - 1) {
      setSelected(0)
      return
    }
    setSelected(prev => prev + 1)
  }
  const PrevImg = () => {
    if(selected === 0) {
      setSelected(motion.length - 1)
      return
    }
    setSelected(prev => prev - 1)
  }
  return (
    <Flex overflow={'hidden'} justifyContent={'center'} minWidth={360} px={6}>
      <Scroll/>
      <Flex width={['100%', '100%', '1047px']} py={16} flexDirection={'column'} alignItems={'center'} zIndex={999}>
        <Flex 
          mb={marginBottom} 
          maxW={400}
          flexDirection={'column'}
          gap={5}
        >
          <LazyLoadImage 
            src={authorImages[1]} 
            alt={'About'}
          />

          <Text fontSize={'25px'} mb={marginBottom}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sollicitudin libero. 
            Nam mattis, nisi eget tincidunt laoreet, purus ipsum dictum nisl, eget commodo tortor dui nec nunc.
          </Text>
        </Flex>
        
        <Flex minW={350} flexDirection={'column'} gap={5} alignItems={'center'}>
          <Flex maxWidth={700} position={'relative'} mb={marginBottom} >
            <LazyLoadImage 
              src={motion[selected]} 
              alt={'InMotion'}
            />
            <Flex 
              justifyContent={'center'} 
              alignItems={'center'} 
              w={82} 
              h={82} 
              background={'black'}
              opacity={0.7} 
              borderRadius={50} 
              position={'absolute'} 
              bottom={5} 
              left={50}
              transition={'ease 0.2s'}
              sx={{'&:hover': {cursor: 'pointer', background: 'sky.100'}}}
              onClick={PrevImg}
            >
              <ChevronLeftIcon color={'white'} fontSize={40}/>
            </Flex>
            <Flex 
              justifyContent={'center'} 
              alignItems={'center'} 
              w={82} 
              h={82} 
              background={'black'}
              opacity={0.7} 
              borderRadius={50} 
              position={'absolute'} 
              bottom={5} 
              right={50}
              transition={'ease 0.2s'}
              sx={{'&:hover': {cursor: 'pointer', background: 'sky.100'}}}
              onClick={nextImg}
            >
              <ChevronRightIcon color={'white'} fontSize={40}/>
            </Flex>

            
          
          </Flex>

          <Text fontSize={'25px'} mb={marginBottom}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sollicitudin libero. 
            Nam mattis, nisi eget tincidunt laoreet, purus ipsum dictum nisl, eget commodo tortor dui nec nunc.
          </Text>
        </Flex>
        <Flex flexDirection={'column'} gap={4}>
          <LazyLoadImage 
            src={authorImages[0]} 
            alt={'About'}
          />
          <Text fontSize={'25px'} mb={marginBottom} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sollicitudin libero. 
            Nam mattis, nisi eget tincidunt laoreet, purus ipsum dictum nisl, eget commodo tortor dui nec nunc.
          </Text>
        </Flex>
        {/* <Flex minWidth={360} h={'auto'} bgColor={'sand.100'} mb={marginBottom}>
          <Image src={firstPic} alt={'About'} mb={marginBottom}/>
        </Flex>
        <Text fontSize={'25px'} mb={marginBottom}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sollicitudin libero. Nam mattis, nisi eget tincidunt laoreet, purus ipsum dictum nisl, eget commodo tortor dui nec nunc.</Text>
        <Flex minWidth={360} w={360} height={'500px'} bgColor={'sand.100'} mb={marginBottom}></Flex>
        <Text fontSize={'25px'} mb={marginBottom}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sollicitudin libero. Nam mattis, nisi eget tincidunt laoreet, purus ipsum dictum nisl, eget commodo tortor dui nec nunc.</Text> */}
      </Flex>
    </Flex>
  )
}

export default About