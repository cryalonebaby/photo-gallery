import ScrollToTop from "react-scroll-to-top";
import {ArrowUpIcon} from '@chakra-ui/icons'

const Scroll = () => {
  return (
    <ScrollToTop 
      style={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        background: '#85260D',
        color: 'white',
        zIndex: 9999999
      }} 
      component={<ArrowUpIcon fontSize={25}/>} 
      top="500"
      smooth
    />
  )
}

export default Scroll