import Navbar from "./Navbar"
import { Box, Flex} from '@chakra-ui/react'

const Layout = ({children, onToggle, isOpen}) => {
  return (
    // height={'100vh'} flexDirection={'column'}
    <Flex flexDirection={'column'}>
      <Navbar onToggle={onToggle} isOpen={isOpen}/>
      <Box>{children}</Box>
    </Flex>
  )
}

export default Layout