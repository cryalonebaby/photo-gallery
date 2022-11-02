import { Box, Flex} from '@chakra-ui/react'
import shuffle from '../utils/shuffle'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Gallery = ({collection}) => {
  const shuffledArr = shuffle(collection)
  const marginBottom = 16
  return (
    <Flex width={['100%', '100%', '1046px']} py={16} flexDirection={'column'} gap={20} zIndex={999}>
      {shuffledArr.map((img, i) => {
        const parity = i % 2 === 0 
        if(img) {
          return (
            <Box
              key={i}
              sx={{'&:hover': {transform: 'scale(1.3)'}}} 
              transition={'ease 0.3s'} 
              mb={marginBottom} 
              alignSelf={parity ? 'flex-start' : 'flex-end'}
            >
              <LazyLoadImage 
                src={img} 
                alt={'Gallery'} 
                width={480}   
              />
            </Box>
          )
        } else {
          return <Flex key={i} minWidth={300} w={450} h={500} bgColor={'sand.100'} mb={marginBottom} alignSelf={parity ? 'flex-start' : 'flex-end'}/>
        }
      })}
    </Flex>
  )
}

export default Gallery