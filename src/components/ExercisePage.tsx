import React from "react";
import {
  Flex,
  Text,
  Image,
  Button
} from "@aws-amplify/ui-react";
import { uploadData } from "aws-amplify/storage";
import "@aws-amplify/ui-react/styles.css";

const ExerciseCard: React.FC = () => {
  const monitorUpload = async () => {
    try {
      const result = await uploadData({
        path: "../assets/${file.name}`,",
        // Alternatively, path: ({identityId}) => `album/{identityId}/1.jpg`
        data: file,
        options: {
          onProgress: ({ transferredBytes, totalBytes }) => {
            if (totalBytes) {
              console.log(
                `Upload progress ${Math.round(
                  (transferredBytes / totalBytes) * 100
                )} %`
              );
            }
          },
        },
      }).result;
      console.log("Path from Response: ", result.path);
    } catch (error) {
      console.log("Error : ", error);
    }
  }

 

  return (
    <Flex
    gap="0"
    direction="column"
    width="1440px"
    justifyContent="center"
    alignItems="center"
    position="relative"
    padding="40px 160px 40px 160px"
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
        gap="24px"
        direction="row"
        justifyContent="center"
        alignItems="center"
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
            <Image
            src="../assets/balasana.jpg"
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
                <Button
                >
                  Read More
                </Button>
              </Flex>
            </Flex>
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
            <Image
            src="../assets/balasana.jpg"
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
                <Button
                >
                  Read More
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
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
            <Image
            src='.'
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
                <Button
                >
                  Read More
                </Button>
              </Flex>
            </Flex>
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
            <Image
            src="../assets/balasana.jpg"
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
                <Button
                >
                  Read More
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
  );
};

export default ExerciseCard;
