import { Flex, Heading, Text } from '@chakra-ui/react'

const SecondCollection = () => {
  const marginBottom = 16
  return (
    <Flex overflow={'hidden'} justifyContent={'center'} minWidth={360}>
      <Heading position={'fixed'} top={'50%'} textAlign={'center'}>
        <Text letterSpacing={'bigBackground'} fontSize={{base: '20px', sm: '30.5px'}}>ART GALLERY</Text>
        <Text letterSpacing={'smallBackground'} fontSize={{base: '16px', sm: '26px'}} fontWeight={100}>CROCKERY COLLECTION</Text>
      </Heading>
      <Flex width={['100%', '100%', '1046px']} py={16} flexDirection={'column'} zIndex={999}>
        <Flex minWidth={360} w={360} height={'500px'} bgColor={'sand.100'} mb={marginBottom}></Flex>
        <Flex minWidth={360} w={360} height={'500px'} bgColor={'sand.200'} mb={marginBottom} alignSelf={'flex-end'}></Flex>
        <Flex minWidth={360} w={360} height={'500px'} bgColor={'sand.100'} mb={marginBottom}></Flex>
      </Flex>
    </Flex>
  )
}

export default SecondCollection