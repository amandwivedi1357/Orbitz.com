import React from 'react'
import {Box,Flex, HStack,Text, Spacer} from "@chakra-ui/react"
import {BsFillPencilFill} from "react-icons/bs"
import Card from './Card'
import Mid from './Mid'

const TopSec = () => {
  const style={
    width:"35%",
    height:"160px"
  }
  const BoxStyle = {
    width:"440px",
    height:"100px",
    border:"1px solid gray",
    marginRight:"10px",
    backgroundColor:"white"
  }
  
  return (
    <div>
        <Box>
            <img style={{height:"600px" , width:"100%"}} src="https://forever.travel-assets.com/flex/flexmanager/images/2021/08/19/ORB_LMLaborDay_imgB_1920x1440_20210813.jpg" alt="" />
            <Card/>
             <HStack w="80%" mt={10} ml="10%">
              <img style={style} src="https://forever.travel-assets.com/flex/flexmanager/images/2021/06/11/ORB_BrandPromise_TravelAsYouAre_imgB_840x473_20210611.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh" alt="" />
              <img style={style} src="https://forever.travel-assets.com/flex/flexmanager/images/2021/04/01/ORB_BrandPromise_Rewards_imgB_840x473_20210331.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh" alt="" />
              <img style={style} src="https://forever.travel-assets.com/flex/flexmanager/images/2021/04/01/ORB_BrandPromise_IGLTA_imgB_840x473_20210330.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh" alt="" />
             </HStack>

             <Text  mt={10} ml="10%" fontWeight="bold" fontSize='4xl'>Here to help keep you on the move</Text>
             <HStack mt={10} ml="10%">
              <div style={BoxStyle}>
                <Flex>
                  <Text fontSize='2xl' fontWeight="bold" mt={2} ml={5}> Change or cancle a trip </Text>
            <Spacer />
            <div style={{marginTop:"5%",marginRight:"5%"}}>
            <BsFillPencilFill/>
            </div>
                </Flex>
                  <Text mt={4} ml={5} fontWeight="bold">Make updates to your itinerary or cancle a booking</Text>
              
              </div>
              <div style={BoxStyle}>
                
              <Flex>
                  <Text fontSize='2xl' fontWeight="bold" mt={2} ml={5}> Use a credit or coupon </Text>
            <Spacer />
            <div style={{marginTop:"5%",marginRight:"5%"}}>
            <BsFillPencilFill/>
            </div>
                </Flex>
                  <Text mt={4} ml={5} fontWeight="bold">Apply a coupon code or credit to a new trip Track</Text>
              
              </div>
              <div style={BoxStyle}>
                
              <Flex>
                  <Text fontSize='2xl' fontWeight="bold" mt={2} ml={5}>Track your refund</Text>
            <Spacer />
            <div style={{marginTop:"5%",marginRight:"5%"}}>
            <BsFillPencilFill/>
            </div>
                  
                </Flex>
                  <Text mt={4} ml={5} fontWeight="bold">Check the status of a refund currently in progress</Text>
              
              </div>
              
             </HStack>
         
         <Mid/>
             
        </Box>
        
    </div>
  )
}

export default TopSec
