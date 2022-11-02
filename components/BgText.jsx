import { Heading, Text } from '@chakra-ui/react'

const BgText = ({collectionName}) => {
  return (
    <Heading position={'fixed'} top={'50%'} textAlign={'center'}>
      <Text 
        letterSpacing={'bigBackground'} 
        fontSize={{base: '20px', sm: '30.5px'}} 
        textTransform={'uppercase'}
      >ART GALLERY</Text>
      <Text 
        letterSpacing={'smallBackground'} 
        fontSize={{base: '16px', sm: '26px'}} 
        fontWeight={100} 
        textTransform={'uppercase'}
      >{collectionName}</Text>
    </Heading>
  )
}

export default BgText