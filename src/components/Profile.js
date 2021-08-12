import React from 'react'
import { Box,  Flex,  HStack } from "@chakra-ui/react"; 
import { IconButton } from "@chakra-ui/button";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Profile() {
  return (
    
      <Flex justify="center" align="center">
        <Box display="flex">
          <HStack spaccing="24px">
            <IconButton
              icon={<FaGithub />}
              colorScheme="teal"
              variant="outline"
            />
            <IconButton
              icon={<FaTwitter />}
              colorScheme="teal"
              variant="outline"
            />
            <IconButton
              icon={<FaLinkedin src="href" />}
              colorScheme="teal"
              variant="outline"
            />
          </HStack>
        </Box>
      </Flex>
  
  );
}

export default Profile
