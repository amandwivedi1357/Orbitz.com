import React from 'react'
import {HStack,Select,Input,Box, Button} from "@chakra-ui/react"
import { Checkbox,Text } from '@chakra-ui/react'
const TabP = () => {
  
  return (
    <div >
      <div style={{backgroundColor:"white"}}>
        <HStack mt="40px" spacing={3}>
      <Select placeholder='City' w="50%" h={20} fontSize={25}  >
  <option value='Delhi'>Delhi</option>
  <option value='Mumbai'>Mumbai </option>
  <option value='Pune'>Pune</option>
  <option value='Bangalore'> Bangalore</option>
  <option value='Chennai'>Chennai </option>
 
</Select>
<Box >
<Input
 placeholder="Select Date and Time"
 size="lg"
 w="170px"
 h="80px"
 type="datetime-local"
 
/>
<Input
 placeholder="Select Date and Time"
 size="lg"
 w="170px"
 h="80px"
 type="datetime-local"
/>
<Input type="text" placeholder='Travelers' size="lg"
 w="170px"
 h="80px"/>
 </Box>
</HStack>

<HStack mt={20} spacing={10}>
<Checkbox colorScheme='red' size='lg' ><Text fontSize="20px">Add a Flight</Text></Checkbox>

<Checkbox colorScheme='red' size='lg' ><Text fontSize="20px">Add a Car</Text></Checkbox>
</HStack>
<Button bg='#B83280' mt="2%" ml={450} size='lg' w={60}>Search</Button>
</div>
    </div>
  )
}

export default TabP
