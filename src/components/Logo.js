import * as  React from 'react'
import {Box, Heading, Flex, Text} from '@chakra-ui/react'
import { FaChevronLeft, FaChevronRight, FaTerminal} from "react-icons/fa";

const Logo = (props) =>  {
  return (
    <Box align="center" mr={5} {...props}>
      <Heading color="teal.500">
        <Flex >
          <FaTerminal />
          <Text ml={3}>AbelGechure</Text>
        </Flex>
      </Heading>
    </Box>
  );
}

export default Logo
