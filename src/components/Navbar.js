import React from 'react'
import Logo from './Logo'
import {Link } from 'react-router-dom'
import {Box, Flex, Text} from "@chakra-ui/react"

function Navbar(props) {
  return (
    <Flex
      as="nav"
      align="center"
      wrap="wrap"
      padding="1.5rem"
      bg="gray.900"
      color="teal.300"
      borderBottom="1px solid black"
      
      {...props}
    >
      <Box
        display="flex"
        width="auto"
        alignItems="center"
        justifyContent="space-between"
        flexGrow={1}
        color="teal.300"
        
      >
        <Box >
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
        </Box>
      </Box>
    </Flex>
  );
}

export default Navbar
