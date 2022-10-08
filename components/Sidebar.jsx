import {Flex, Heading, Slide, Text} from '@chakra-ui/react'
import {CloseIcon} from '@chakra-ui/icons'
import {useRouter} from 'next/router'
import useBodyScrollLock from '../hooks/useBodyScrollLock'
import { useEffect } from 'react'

const Sidebar = ({isOpen, onToggle}) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const blackOpen = isOpen ? 'flex' : 'none'

  const isCurrentRoute = (path) => {
    if (currentRoute === path) return 'sky.200'
    return '#fff'
  }

  const navigateTo = (path) => {
    router.push(path)
    onToggle()
  }

  return (
    <Flex w={'100vw'}>
    <Slide direction='left' in={isOpen} style={{zIndex: 9999}}>
      <Flex w={360} bgColor={'white'} height={'100%'} flexDirection={'column'}>
        <Flex w={'100%'} p={8}>
          <Heading cursor={'pointer'} onClick={onToggle}><CloseIcon w={4} h={4}/></Heading>
        </Flex>
        <Flex height={'100%'} w={'100%'} flexDirection={'column'}>
          <Flex cursor={'pointer'} onClick={() => navigateTo('/')} bgColor={isCurrentRoute('/')} width={'100%'} height={'100px'} justifyContent={'center'} alignItems={'center'}>
            <Heading textTransform={'uppercase'} fontSize={'24px'}>Chess Collection</Heading>
          </Flex>
          <Flex cursor={'pointer'} onClick={() => navigateTo('/collection2')} bgColor={isCurrentRoute('/collection2')} width={'100%'} height={'100px'} justifyContent={'center'} alignItems={'center'}>
            <Heading textTransform={'uppercase'} fontSize={'24px'}>CROCKERY COLLECTION</Heading>
          </Flex>
          <Flex cursor={'pointer'} onClick={() => navigateTo('/collection3')} bgColor={isCurrentRoute('/collection3')} width={'100%'} height={'100px'} justifyContent={'center'} alignItems={'center'}>
            <Heading textTransform={'uppercase'} fontSize={'24px'}>WALL PAINTING</Heading>
          </Flex>
          <Flex cursor={'pointer'} onClick={() => navigateTo('/about')} bgColor={isCurrentRoute('/about')} width={'100%'} height={'100px'} justifyContent={'center'} alignItems={'center'}>
            <Heading textTransform={'uppercase'} fontSize={'24px'}>ABOUT CREATOR</Heading>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} paddingY={'20px'} alignItems={'center'}>
          <Text fontSize={'20px'}>yurchenko@gmail.com</Text>
          <Text fontSize={'20px'}>+123 55 19 12 520</Text>
        </Flex>
      </Flex>
    </Slide>
    <Flex sx={{width: '100vw', display: {base: 'none', sm: blackOpen}}} position={'absolute'} overflowX={'hidden'} left={0} top={0} height={'100vh'} background={'black'} opacity={0.7} zIndex={9998}></Flex>
    </Flex>
  )
}

export default Sidebar