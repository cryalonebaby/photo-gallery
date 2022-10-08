import { Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import firstPic from '../assets/1.jpg'

export default function Home() {
  const marginBottom = 16
  return (
    <Flex overflow={'hidden'} justifyContent={'center'} minWidth={360} px={6}>
      <Heading position={'fixed'} top={'50%'} textAlign={'center'}>
        <Text letterSpacing={'bigBackground'} fontSize={{base: '20px', sm: '30.5px'}}>ART GALLERY</Text>
        <Text letterSpacing={'smallBackground'} fontSize={{base: '16px', sm: '26px'}} fontWeight={100}>CHESS COLLECTION</Text>
      </Heading>
      <Flex width={['100%', '100%', '1046px']} py={16} flexDirection={'column'} zIndex={999}>
        <Flex minWidth={300} w={300} bgColor={'sand.100'} mb={marginBottom}>
          <Image src={firstPic} alt={'Gallery'} mb={marginBottom}/>
        </Flex>
        <Flex minWidth={300} w={300} bgColor={'sand.200'} mb={marginBottom} alignSelf={'flex-end'}>
          <Image src={firstPic} alt={'Gallery'} mb={marginBottom}/>
        </Flex>
        <Flex minWidth={300} w={300} bgColor={'sand.100'} mb={marginBottom}>
          <Image src={firstPic} alt={'Gallery'} mb={marginBottom}/>
        </Flex>
      </Flex>
    </Flex>
  )
}
