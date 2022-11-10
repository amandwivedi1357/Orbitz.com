import React from 'react'
import { ChevronDownIcon } from "@chakra-ui/icons"
import {Button, HStack, Text,Image,Flex,ListItem,ListIcon,UnorderedList, Input,Icon} from "@chakra-ui/react"
const Mid = () => {
    const style={
        width:"80%",
        height:"350px",
        
        margin:"auto",
        marginTop:"5%",
        backgroundColor:"rgb(235, 217, 217)"
    }
    const imgstyle = {
        marginTop:"3%",
        marginLeft:"13%"
    }
    const img2Style = {
        width : "80%",
        height:"400px",
        border:"1px solid gray",
        margin:"auto",
        marginTop:"3%"
    }
  return (
    <div>
      <div style={style}>
       <Text fontSize='3xl' fontWeight="Bold" ml={5}>
       Travel tips from the pros
       </Text>
       <HStack>
        <div style={{display:"flex"}}>
             <div>
                <img style={{paddingRight:"5px",paddingLeft:"5px",position:"absolute",left:"11%",width:"650px",height:"300px"}} src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/18/ORB_Blog_NationalParks_imgB_1199x399_20211117.jpg" alt="" />
                <div style={{position:"relative",left:"28%",marginTop:"60px"}}>
                <h3 style={{color:"white",fontSize:"60px",left:"14%"}}>
                    national park
                </h3>
                <p style={{fontSize:"20px",fontWeight:"bold"}}>
                There's plenty to keep you busy.
                </p>
                <Button mt={6} color="blue">
                    Learn More
                </Button>
             </div>
             </div>
             <div>
                <img style={{paddingRight:"5px",paddingLeft:"5px",width:"650px",right:"11%",position:"absolute",height:"300px"}} src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/18/ORB_Blog_RoadTrips_imgB_1199x399_20211117.jpg" alt="" />
                <div style={{position:"relative",right:"-135%",marginTop:"60px"}}>
                <h3 style={{color:"white",fontSize:"60px",right:"15%"}}>
                    national park
                </h3>
                <p style={{fontSize:"20px",fontWeight:"bold"}}>
                Find an adventure for every season.
                </p>
                <Button mt={6} color="blue">
                    Read on
                </Button>
             </div>
                </div>    
        </div>
        
       </HStack>

      </div>
      <div style={imgstyle}>
        <img width="85%" src="https://tpc.googlesyndication.com/simgad/10056509806482740393?" alt="" />
       </div>
       <div style={img2Style}>
        <Flex>
        <div style={{width:"40%"}}>
        <Image h="395px" src='https://a.travel-assets.com/mad-service/footer/marquee/ORB_App_Footer_v1.jpg'/>
        </div>
        <div>
         <Text fontSize='4xl' fontWeight="bold" ml={5}>
         Rewards are waiting for you in the Orbitz<br /> app
         </Text>
         <UnorderedList color='gray' ml={10} fontSize="18px">
  <ListItem>Earn 4% back when you book your hotel in app, vs. 3% on site</ListItem>
  <ListItem>Get flight status and gate number notifications</ListItem>
  <ListItem>Have questions about your stay? Message your hotel right in the app</ListItem>
  
</UnorderedList>
<Text fontSize='2xl' fontWeight="bold"  ml={5} mt={5}>
Text yourself a download link
</Text>
<Flex>
    <Input focusBorderColor='pink.400' h={20} w={56} placeholder='countery-code'/>
    <Input  w={56} h={20} type="number"/>
    <Button size={50} w={60} bg="pink.500" fontWeight='bold' color='white'>Get The App</Button>
    
</Flex>
<Text mt={5} color='gray'>By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</Text>
        </div>
        </Flex>
       </div>
       <div>
        <Text fontWeight='bold' ml={40} fontSize='4xl'>
        More destinations
        </Text>
        <div style={{marginLeft:"10%"}}>
        <Button>
            <Text>Destination deals</Text>
            <Icon as={ChevronDownIcon}></Icon>
        </Button><Button>
            <Text>Top hotel beach destinations</Text>
            <Icon as={ChevronDownIcon}></Icon>
        </Button><Button>
            <Text>Top hotel city destinations</Text>
            <Icon as={ChevronDownIcon}></Icon>
        </Button><br /><Button>
            <Text>Top vacation destinations</Text>
            <Icon as={ChevronDownIcon}></Icon>
        </Button><Button>
            <Text>Top flight destinations</Text>
            <Icon as={ChevronDownIcon}></Icon>
        </Button><Button>
            <Text>Top car rental destinations in America</Text>
            <Icon as={ChevronDownIcon}></Icon>
        </Button>
        </div>
       </div>
    </div>
  )
}

export default Mid
