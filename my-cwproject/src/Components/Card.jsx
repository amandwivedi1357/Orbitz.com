import React from 'react'
import {Box} from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TabP from './TabP'
const Card = () => {
  return (

         
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
