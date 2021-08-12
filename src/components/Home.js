import React from "react";
import { Box, Text, Flex , Stack, HStack} from "@chakra-ui/react"; 
import Profile from './Profile'
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
      
        <Profile />
    
    </Stack>
  );
}

export default Home;
