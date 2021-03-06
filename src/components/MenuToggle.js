import * as React from 'react'
import { Box } from '@chakra-ui/layout'
import {CloseIcon, MenuIcon} from 'react-icons'

const MenuToggle = ({toggle, isOpen}) => {
  return (
    <Box display={{base: "block" , md: "none"}} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  )
}

export default MenuToggle
