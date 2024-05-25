import React from 'react';
import { Flex, Text, Card, Divider } from '@aws-amplify/ui-react';
import { StorageImage } from '@aws-amplify/ui-react-storage';

interface ExerciseCardProps {
  title: string;
  description: string;
  imagePath: string;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ title, description, imagePath }) => {
  return (
    <Card
      variation="elevated"
      borderRadius="12px"
      padding="12px"
      backgroundColor="white"
      boxShadow="0px 4px 16px rgba(0, 0, 0, 0.1)"
      border="1px solid #e0e0e0"
      style={{ width: '100%', maxWidth: '300px' }}
    >
      <Flex direction="column" gap="12px">
        <StorageImage alt={title} path={imagePath} style={{ width: '100%', height: '400px', borderRadius: '8px' }} />
        <Flex direction="column" gap="8px">
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            whiteSpace="pre-wrap"
          >
            {title}
          </Text>
          <Divider orientation="horizontal" size="small" />
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            letterSpacing="0.01px"
            whiteSpace="pre-wrap"
          >
            {description}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default ExerciseCard;
