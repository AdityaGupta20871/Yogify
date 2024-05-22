import { Flex, Text, Image, Badge, Icon, Divider, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import EventCard from './EventCard';
 function EventSection() {
  return (
  <Flex
    gap="24px"
    direction="column"
    width="100%"
    justifyContent="flex-start"
    alignItems="center"
    overflow="hidden"
    position="relative"
    padding="48px 0px 48px 0px"
    backgroundColor="rgba(250,250,250,1)"
  >
    <Flex
      gap="12px"
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      shrink="0"
      position="relative"
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="600"
        color="rgba(169,81,123,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        shrink="0"
        position="relative"
        whiteSpace="pre-wrap"
      >
        Workshops
      </Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="600"
        color="rgba(13,26,38,1)"
        lineHeight="32px"
        textAlign="left"
        display="block"
        shrink="0"
        position="relative"
        whiteSpace="pre-wrap"
      >
        Expore yoga workshops near you
      </Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(92,102,112,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        shrink="0"
        position="relative"
        whiteSpace="pre-wrap"
      >
        Experience interactive group workouts
      </Text>
    </Flex>
    <EventCard />
  </Flex>
  )
}
export default EventSection;