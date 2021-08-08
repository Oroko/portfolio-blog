import React from 'react'
import Logo from './Logo'
import {Link } from 'react-router-dom'
import {Box, Flex, Text, useColorMode } from "@chakra-ui/react"
import {IconButton} from "@chakra-ui/button"
import {FaSun, FaMoon} from 'react-icons/fa'
//import { HamburgerIcon } from '@chakra-ui/icons'




function Navbar(props) {
  const {colorMode, toggleColorMode} = useColorMode() 

  
  const isDark = colorMode === "dark"
  return (
    <Flex
      as="nav"
      align="center"
      wrap="wrap"
      padding="1.5rem"
      color="teal.400"
      {...props}
      
    >
      <Box
        display="flex"
        width="auto"
        alignItems="center"
        justifyContent="space-between"
        flexGrow={1}
        color="teal.400"
        
      >
        <Box>
          <Link to="/">
            <Logo />
          </Link>
        </Box> 
        <Box
          display="flex"
          width="400px"
          mr={20}
          justifyContent="space-between"
        >
          <Link to="/about">About</Link>
          <Link to="/projects">
            <Text>Projects</Text>
          </Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          
          <IconButton
            size="sm"
            onClick={toggleColorMode}
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound="true"
          />
        </Box>
      </Box>
    </Flex>
  );
}

export default Navbar
