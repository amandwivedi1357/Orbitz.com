import React from 'react'
import {Box,Flex,Input,Image,Button,Text,Select, color} from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TabP from './TabP'
const Card = () => {
  return (
    <div  style={{height:"25%"}}>
      <div style={{backgroundColor:"white",width:"80%", height: "250px",padding:"12%" ,color:"black",marginLeft:"10%"}}>
      <Box >
         
      <Tabs  isFitted variant='enclosed' w="120%" mt="-20%" ml="-10%">
  <TabList  mb='1em'>
    <Tab fontSize={20} fontWeight="bold">One</Tab>
    <Tab fontSize={20} fontWeight="bold">Two</Tab>
    <Tab fontSize={20} fontWeight="bold">Three</Tab>
    <Tab fontSize={20} fontWeight="bold">four</Tab>
    <Tab fontSize={20} fontWeight="bold">five</Tab>
    <Tab fontSize={20} fontWeight="bold">six</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <TabP/>
    </TabPanel>
    <TabPanel>
    <TabP/>
    </TabPanel>
    <TabPanel>
    <TabP/>
    </TabPanel>
    <TabPanel>
      <TabP/>
    </TabPanel>
    <TabPanel>
    <TabP/>
    </TabPanel>
    <TabPanel>
    <TabP/>
    </TabPanel>
  </TabPanels>
</Tabs>
       </Box>
       </div>
    </div>
  )
}

export default Card
