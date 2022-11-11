import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,Text,Box
  } from '@chakra-ui/react'
  import { Icon } from '@chakra-ui/react'
  import {ChevronDownIcon} from "@chakra-ui/icons"
  import { useDisclosure } from '@chakra-ui/react'
const MoreTravels = () => {
  
        const { isOpen, onOpen, onClose } = useDisclosure()
        return (
          <>
          <Box p={4}>
            <Button colorScheme="blue.500" border="none" fontSize={20} fontWeight="bold" color="white" bg="#1A365D" ml={10} onClick={onOpen}>More Travels</Button>
            <Icon as={ChevronDownIcon} h={30} mb={1}/>
            <Modal isOpen={isOpen} onClose={onClose} >
              <ModalOverlay />
              <ModalContent>
                
                <ModalCloseButton />
                <ModalBody>
                  <Text fontSize="larger">why u here</Text>
                </ModalBody> 
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            </Box>
          </>
        )
      }


export default MoreTravels
