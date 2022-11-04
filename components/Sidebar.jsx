import {Flex, Heading, Slide, Text} from '@chakra-ui/react'
import {CloseIcon} from '@chakra-ui/icons'
import {useRouter} from 'next/router'

const menu = [
  {route: '/', title: 'Chess Collection'},
  {route: '/crockery', title: 'Crockery Collection'},
  {route: '/statues', title: 'Mini Sculptures'},
  {route: '/ornaments-reliefs', title: 'Ornaments&Bas-reliefs'},
  {route: '/about', title: 'About Creator'},
  {route: '/emblems-gifts', title: 'Emblems&Gifts'},
  {route: '/decorations', title: 'Table Decorations'}
]

const Sidebar = ({isOpen, onToggle}) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const blackOpen = isOpen ? 'flex' : 'none'

  const isCurrentRoute = (path) => {
    if (currentRoute === path) return 'sky.100'
    return 'gray'
  }

  const navigateTo = (path) => {
    router.push(path)
    onToggle()
  }

  return (
    <Flex>
    <Slide direction='left' in={isOpen} style={{zIndex: 9998, height: '100%', display: 'flex', width: '100vw', minWidth: '360px'}}>
      <Flex w={360} bgColor={'gray'} height={'100%'} flexDirection={'column'} zIndex={9999999}>
        <Flex w={'100%'} p={8} borderBottom={'2px solid #85260D'}>
          <Heading cursor={'pointer'} onClick={onToggle}><CloseIcon w={4} h={4}/></Heading>
        </Flex>
        <Flex sx={{
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }} overflowY={'scroll'} height={'100%'} w={'100%'} flexDirection={'column'}>
          {menu.map((el, indx) => (
            <Flex 
              key={indx}
              cursor={'pointer'} 
              onClick={() => navigateTo(el.route)} 
              bgColor={isCurrentRoute(el.route)} 
              width={'100%'} 
              minHeight={'100px'} 
              justifyContent={'center'} 
              alignItems={'center'}
            >
              <Heading textTransform={'uppercase'} fontSize={'24px'}>{el.title}</Heading>
            </Flex>
          ))}
        </Flex>
        <Flex borderTop={'2px solid #85260D'} flexDirection={'column'} paddingY={'20px'} alignItems={'center'}>
          <Text fontSize={'20px'}>yurchenko.yr@gmail.com</Text>
          <Text fontSize={'20px'}>+380 638 516 431</Text>
        </Flex>
      </Flex>
      <Flex 
        onClick={onToggle}
        sx={{width: '100vw', display: {base: 'none', sm: blackOpen}, cursor: 'pointer'}} 
        position={'absolute'} 
        overflowX={'hidden'} 
        left={0} 
        top={0} 
        height={'100%'}  
        zIndex={9999}
      ></Flex>
    </Slide>
    <Flex 
      sx={{width: '100vw', display: {base: 'none', sm: blackOpen}}} 
      position={'absolute'} 
      overflowX={'hidden'} 
      left={0} 
      top={0} 
      height={'100%'} 
      background={'black'} 
      opacity={0.7} 
      zIndex={9997}
    ></Flex>
    </Flex>
  )
}

export default Sidebar