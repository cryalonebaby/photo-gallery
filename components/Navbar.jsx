import {Flex, Heading, Slide} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import {HiMenuAlt1} from 'react-icons/hi'
import {useRouter} from 'next/router'
import useBodyScrollLock from '../hooks/useBodyScrollLock'
import { useEffect } from 'react'

const Navbar = ({onToggle, isOpen}) => {

  const router = useRouter()
  const currentRoute = router.pathname

  const title = currentRoute === '/about' ? 'ABOUT CREATOR' : 'SCULPTURE'

  const [, toggle] = useBodyScrollLock()

  useEffect(() => {
    if(isOpen) {
      toggle(true)
    }
    if(!isOpen) {
      toggle(false)
    }
  }, [onToggle])

  return (
    <Flex
      h={'81px'} w='100%'
      bgColor='sky.100'
      alignItems={'center'}
      position={'relative'}
      minWidth={360}
      minHeight={81}
      px={6}
    > 
      <Flex flex={1} marginRight={'auto'} onClick={onToggle}>
        <HamburgerIcon cursor={'pointer'} display={isOpen ? 'none' : 'flex'} position={'fixed'} top={{base: '25px', md: '22px'}} left={{base: '10%', md: '2%'}} zIndex={999999} fontSize={'35px'}/>
      </Flex>
      <Flex flex={1} justifyContent={'center'} display={{base: 'none', md: 'flex'}}>
        <Heading letterSpacing={'logo'} textTransform={'uppercase'} fontSize={'30.4px'}>{title}</Heading>
      </Flex>
      <Flex flex={1}>
        <Heading 
          onClick={() => router.push('/about')}
          sx={{'&:hover': {cursor: 'pointer'}}}
          display={isOpen ? 'none' : 'flex'} 
          position={'fixed'} 
          top={{base: '25px', md: '22px'}} 
          right={{base: '10%', md: '2%'}} 
          zIndex={999999} 
          letterSpacing={'info'} 
          textTransform={'uppercase'} 
          fontSize={{base: '24px', md: '30.4px'}} 
          marginLeft={'auto'}
        >Y.Yurchenko</Heading>
      </Flex>
    </Flex>
  )
}

export default Navbar