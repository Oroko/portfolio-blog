import React from "react";
import { Image, Text, Box, VStack, Flex } from "@chakra-ui/react";
import Profile from "./Profile";
import { Container } from "@chakra-ui/react";
import { LoremIpsum } from "react-lorem-ipsum";

const About = () => {
  return (
    <VStack alignItems="center">
      <Box mt={10}>
        <Image
          borderRadius="full"
          boxSize="200"
          src="https://avatars.githubusercontent.com/u/13794058?v=4"
          alt="Abel Gechure"
        />
      </Box>
      <Box>
        <Text
          fontSize="5xl"
          fontWeight="extrabold"
          bgGradient="linear(to-r, teal.400  ,   teal.400)"
          bgClip="text"
        >
          Software Engineer
        </Text>
      </Box>
      <Box>
      
        <Text w='50%' mx="auto">
          <LoremIpsum p={2} />
        </Text>
      </Box>
      <Box>
        <Profile />
      </Box>
    </VStack>
  );
  
  
};

export default About;
