import { Flex,Image,Text } from '@aws-amplify/ui-react'
const ExerciseCard = () => {
    
  return (
    <Flex
    gap="0"
    direction="column"
    width="320px"
    justifyContent="center"
    alignItems="flex-start"
    shrink="0"
    position="relative"
    backgroundColor="rgba(255,255,255,1)"
  >
    <Image
    src='../assets/balasana.jpg'
      height="160px"
      display="block"
      shrink="0"
      alignSelf="stretch"
      position="relative"
      objectFit="cover"
      alt=""
    />
    <Flex
      gap="16px"
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      shrink="0"
      alignSelf="stretch"
      position="relative"
      padding="16px 16px 16px 16px"
    >
      <Flex
        gap="8px"
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          whiteSpace="pre-wrap"
        >
          The Role of Yoga in Cardiac Health
        </Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          letterSpacing="0.01px"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          whiteSpace="pre-wrap"
        >
          Yoga and relaxation have been successfully used to check high blood pressure and coronary artery disease. Yogic therapy not only reduces high blood pressure, but also reduces blood glucose, and body weight.
        </Text>
      </Flex>
    </Flex>
  </Flex>
  )
}

export default ExerciseCard