import React from 'react'
import {HStack,Select,Input,Box,Spacer, Button} from "@chakra-ui/react"
import { Checkbox, CheckboxGroup,Text } from '@chakra-ui/react'
const TabP = () => {
  return (
    <div >
        <HStack mt="40px" spacing={3}>
      <Select placeholder='City' w="50%" h={20} fontSize={25}  >
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
  <option value='option4'>Option 4</option>
  <option value='option5'>Option 5</option>
 
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
<Checkbox size='lg' ><Text fontSize="20px">Add a Flight</Text></Checkbox>

<Checkbox size='lg' ><Text fontSize="20px">Add a Car</Text></Checkbox>
</HStack>
<Button bg='#B83280' mt={50} ml={450} size='lg' w={60}>Search</Button>
    </div>
  )
}

export default TabP
