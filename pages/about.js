import { Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import firstPic from '../assets/2.jpg'

const About = () => {
  const marginBottom = 16
  return (
    <Flex overflow={'hidden'} justifyContent={'center'} minWidth={360} px={6}>
      <Flex width={['100%', '100%', '1047px']} py={16} flexDirection={'column'} alignItems={'center'} zIndex={999}>
        <Flex minWidth={360} h={'auto'} bgColor={'sand.100'} mb={marginBottom}>
          <Image src={firstPic} alt={'About'} mb={marginBottom}/>
        </Flex>
        <Text fontSize={'25px'} mb={marginBottom}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sollicitudin libero. Nam mattis, nisi eget tincidunt laoreet, purus ipsum dictum nisl, eget commodo tortor dui nec nunc.</Text>
        <Flex minWidth={360} w={360} height={'500px'} bgColor={'sand.100'} mb={marginBottom}></Flex>
        <Text fontSize={'25px'} mb={marginBottom}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sollicitudin libero. Nam mattis, nisi eget tincidunt laoreet, purus ipsum dictum nisl, eget commodo tortor dui nec nunc.</Text>
      </Flex>
    </Flex>
  )
}

export default About