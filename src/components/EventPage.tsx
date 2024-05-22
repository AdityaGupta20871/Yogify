import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import EventCard from './EventCard';
import { Flex, Heading, Text, Button } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
const EventPage = () => {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate('/form')
  }
  return (
    <>
          <Flex
    direction="row"
    width="100vw"
    justifyContent="space-between"
    alignItems="center"
    position="relative"
    padding="48px 48px 48px 48px"
    backgroundColor="rgba(250,250,250,1)"
  >
    <Flex
      width="50%"
      height="106px"
      shrink="0"
      position="relative"
    >
      <Heading
        position="absolute"
        top="0px"
        left="0px"
        level="1"
      >
        Workshops
      </Heading>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(92,102,112,1)"
        lineHeight="36px"
        textAlign="left"
        display="block"
        position="absolute"
        top="70px"
        left="0px"
        whiteSpace="pre-wrap"
      >
        Join us for interactive workshop
      </Text>
    </Flex>
    <Button onClick={handleClick}
    >
      Create Workshop
    </Button>
  </Flex>  
  <Flex
    gap="48px"
    direction="column"
    width="100%"
    justifyContent="flex-start"
    alignItems="flex-start"
    position="relative"
    padding="48px 48px 48px 48px"
  >
    <EventCard />
    <EventCard />
    <EventCard />
  </Flex>
    </>
  )
}

export default EventPage



