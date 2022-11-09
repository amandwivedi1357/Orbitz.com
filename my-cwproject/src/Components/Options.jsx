import React from 'react'
import { Box,Text,Flex,Spacer,Button } from '@chakra-ui/react'
const Options = () => {
  return (
    <div marginTop="20%">
      <Box mr="-100px" mt={5} bg="#1A365D" w="40%" >
        <Flex>
            <Button colorScheme="#1A365D" bg="transparent" fontSize={20} mr={105}>
                <Text> Español</Text>
                </Button>
            <Spacer w={20}/>
            <Button colorScheme="#1A365D" bg="transparent" fontSize={20} mr={105}>property</Button>
            <Spacer/>
            <Button colorScheme="#1A365D" bg="transparent" fontSize={20} mr={105}>Support</Button>
            <Spacer/>
            <Button colorScheme="#1A365D" bg="transparent" fontSize={20} mr={105}>Trips</Button>
            <Spacer/>
        </Flex>
      </Box>
    </div>
  )
}

export default Options
