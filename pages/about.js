import { Flex, Text } from '@chakra-ui/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Scroll from '../components/Scroll'

const authorImages = [
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/about%2Fauthor%2F3.jpg?alt=media&token=922636eb-8ce7-4591-af16-1f3f583eaec0',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/about%2Fauthor%2F9.jpg?alt=media&token=28a1b157-32fd-4c8c-bee0-a901b6f43ea1'
]

const gypsy_cossak = [
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2F6.jpg?alt=media&token=cbe66026-a626-4f9c-8e91-4136b54be8a0',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2F7.jpg?alt=media&token=39a6e66d-4ac4-4e9a-bc0f-996c7787cfe1',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2F4.jpg?alt=media&token=9fdde823-f99e-4e4f-b126-0b5f53033f0c',
]

const amazonka = [
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2F1.JPG?alt=media&token=27b6f2ea-b57a-496a-a3f5-408b55cb3793',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2F2.JPG?alt=media&token=d4d9c543-0e41-45f1-8862-bab63802b42f',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/statues%2F3.JPG?alt=media&token=29fb1832-f1b1-4ed1-9695-0f7dd5b60b99',
]

const chess = [
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F10.jpg?alt=media&token=a9648898-f394-46e7-ae6a-0d37b2764e34',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F12.jpg?alt=media&token=2987d084-28b1-42f8-afb2-4a26d2d0fee1',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F13.jpg?alt=media&token=36873bb5-aa96-4bf2-a50e-dc9fa7371d45',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F14.jpg?alt=media&token=067bb13e-65ae-469f-aa35-568d3ccf86d6',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F15.jpg?alt=media&token=5c9563e4-6b83-4a79-838d-4bdf6f9cb41f',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F16.jpg?alt=media&token=37ad0934-6d3d-4ea5-b52a-ee1cb3b2389b',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F3.jpg?alt=media&token=87a11c71-c1d6-4abb-b144-dee7312e7497',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F4.jpg?alt=media&token=1e6f4714-1400-4f43-8289-afe2a0d61f09',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F5.jpg?alt=media&token=6a2aae0a-9ddc-4434-99c5-6dd171ab51ae',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F6.jpg?alt=media&token=ab336a7d-911e-4a63-aa7d-97e0015a5bef',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F7.jpg?alt=media&token=97168353-2c93-4279-a3dc-0a2420726352',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F8.jpg?alt=media&token=cb3cb2fc-81c9-4f31-8461-00e98cd72698',
  'https://firebasestorage.googleapis.com/v0/b/photo-gallery-57149.appspot.com/o/chess%2F9.jpg?alt=media&token=a5eb1546-0b88-4e9f-bac6-ab36be42f2bb',
]

const About = () => {
  const marginBottom = 16

  const name = 'Yurii Anatoliyovych Yurchenko'

  const aboutTxt = `In 1998, he graduated from the sculpture faculty of the 
    Ukrainian Academy of Arts in Kyiv.`

  const chessTxt = `The pieces shown below are designed and manufactured in the 
    "Art Studio" for collectible chess.`

  const amazonkaTxt = `The sculpture "Amazon" 
    is cast in bronze.`
  
  const gypsyTxt = `The sculptures "Gypsy" and "Cossack-frontier" won in the nomination 
  "Best sculptural product from silver" at two international exhibitions "Kyiv Jeweler Expo".`

  return (
    <Flex overflow={'hidden'} justifyContent={'center'} minWidth={360} px={6}>
      <Scroll />
      <Flex width={['100%', '100%', '1047px']} py={16} flexDirection={'column'} alignItems={'center'} zIndex={999}>
        <Flex
          mb={marginBottom}
          maxW={800}
          flexDirection={'column'}
          gap={5}
        >
          <LazyLoadImage
            src={authorImages[1]}
            alt={'About'}
          />

          <Text fontSize={'25px'} mb={marginBottom}>
            <Text fontWeight={'bold'}>{name}</Text>
            {aboutTxt}
          </Text>
        </Flex>

        <Flex flexDirection={'column'} gap={4} maxW={800} marginBottom={marginBottom}>
          <LazyLoadImage
            src={authorImages[0]}
            alt={'About'}
          />
        </Flex>

        <Flex flexDirection={'column'} maxW={800} marginBottom={marginBottom}>
          <Text fontSize={'25px'} mb={marginBottom}>
            {gypsyTxt}
          </Text>
          <Flex w={'100%'} flexWrap={'wrap'} justifyContent={'center'}>
            {gypsy_cossak.map(fig => (
              <Flex
                sx={{'&:hover': {transform: 'scale(1.5)'}}}
                maxW={'250px'}
                transition={'ease 0.2s'} 
              >
                <LazyLoadImage
                  src={fig}
                  alt={'Amazon Figure'}
                />
              </Flex>
            ))}
          </Flex>
        </Flex>

        <Flex flexDirection={'column'} gap={4} maxW={800} marginBottom={marginBottom}>
          <Text fontSize={'25px'} mb={marginBottom} >
            {chessTxt}
          </Text>
          <Flex w={'100%'} flexWrap={'wrap'} justifyContent={'center'}>
            {chess.map(fig => (
              <Flex
                sx={{'&:hover': {transform: 'scale(1.5)'}}}
                maxW={'180px'}
                transition={'ease 0.2s'} 
              >
                <LazyLoadImage
                  src={fig}
                  alt={'Chess Figure'}
                />
              </Flex>
            ))}
          </Flex>
        </Flex>

        <Flex flexDirection={'column'} maxW={800} marginBottom={marginBottom}>
          <Text fontSize={'25px'} mb={marginBottom} >
            {amazonkaTxt}
          </Text>
          <Flex w={'100%'} flexWrap={'wrap'} justifyContent={'center'}>
            {amazonka.map(fig => (
              <Flex
                sx={{'&:hover': {transform: 'scale(1.5)'}}}
                maxW={500}
                transition={'ease 0.2s'} 
              >
                <LazyLoadImage
                  src={fig}
                  alt={'Amazon Figure'}
                />
              </Flex>
            ))}
          </Flex>
        </Flex>

      </Flex>
    </Flex>
  )
}

export default About