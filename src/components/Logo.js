import * as  React from 'react'
import {Box, Heading} from '@chakra-ui/react'

const Logo = (props) =>  {
  return (
    <Box align="center" mr={5} {...props}>
      <Heading color="teal.500" > 
        AbelGechure
      </Heading>
    </Box>
  )
}

export default Logo
