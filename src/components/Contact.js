
import React from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea
} from "@chakra-ui/react";

function Contact() {
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box
        mt={10}
        p={8}
        width="500px"
        
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Heading>Say Hi</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Message</FormLabel>
              <Textarea type="text" />
            </FormControl>
            <Button width="full" mt={4} type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
  
}

export default Contact
