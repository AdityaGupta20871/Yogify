import React from "react";
import {
  Flex,
  Text,
} from "@aws-amplify/ui-react";
import { StorageImage } from '@aws-amplify/ui-react-storage';
import ExerciseCard from "./ExerciseCard";
const ExercisePage: React.FC = () => {
  
  const exerciseData = [
    {
      description: 'The Role of Yoga in Cardiac Health',
      imagePath: 'picture-submissions/downward-facing-dog.jpg',
    },
  ];
  
  return (
    <Flex
    gap="0"
    direction="column"
    width="100vw"
    justifyContent="center"
    alignItems="center"
    position="relative"
    padding="20px 80px 20px 80px"
    backgroundColor="rgba(250,250,250,1)"
  >
    <Flex
      gap="24px"
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      shrink="0"
      alignSelf="stretch"
      position="relative"
    >

        <Flex
          gap="16px"
          direction="column"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
          borderRadius="8px"
          padding="40px 40px 40px 40px"
          backgroundColor="rgba(255,255,255,1)"
        >
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
            
            {exerciseData.map((exercise, index) => (
            <ExerciseCard
              key={index}
              description={exercise.description}
              imagePath={exercise.imagePath}
            />
          ))}
          </Flex>
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
            <StorageImage alt="balasana" path="picture-submissions/tree-pose.jpg" />;
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
        </Flex>
        
      </Flex>
    </Flex>
  );
};

export default ExercisePage;
