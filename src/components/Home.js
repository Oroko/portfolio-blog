import React from "react";
import { Box, Text, Flex , Stack, HStack} from "@chakra-ui/react"; 
import { IconButton  } from "@chakra-ui/button";
import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa'

function Home() {
  return (
    <Stack>
      <Flex justify="center" align="center">
        <Box mt={40} align="center" w="100%" h="200px" p="4">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="extrabold"
            bgGradient="linear(to-r, teal.400  ,   teal.400)"
            bgClip="text"
          >
            Abel Gechure
          </Text>
        </Box>
      </Flex>
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
    </Stack>
  );
}

export default Home;
