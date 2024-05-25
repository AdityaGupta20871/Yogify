import React from 'react';
import { Flex,Text } from '@aws-amplify/ui-react';
import { StorageImage } from '@aws-amplify/ui-react-storage';

interface ExerciseCardProps {
  description: string;
  imagePath: string;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ description, imagePath }) => {
  return (
    <>
      <StorageImage alt="balasana" path={imagePath} />;
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
                  {description}
                </Text>
              </Flex>
            </Flex>
            </>
   
  );
};

export default ExerciseCard;


