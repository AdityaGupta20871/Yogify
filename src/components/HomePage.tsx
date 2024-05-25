import '@aws-amplify/ui-react/styles.css';
import { Flex, Text, Button } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import EventSection from './EventSection';
import { StorageImage } from '@aws-amplify/ui-react-storage';


function HomePage() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/form')
  }
  return (
    <>
      <Flex
        gap="0"
        direction="row"
        width="100vw"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Flex
          gap="10px"
          direction="column"
          width="50%"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="120px 120px 120px 120px"
          backgroundColor="rgba(255,255,255,1)"
        >
          <Flex
            gap="24px"
            direction="column"
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
              shrink="0"
              alignSelf="stretch"
              position="relative"
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="rgba(210,101,154,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                whiteSpace="pre-wrap"
              >
                YOGIFY
              </Text>
              <Text
                fontFamily="Inter"
                fontSize="24px"
                fontWeight="600"
                color="rgba(13,26,38,1)"
                lineHeight="30px"
                textAlign="center"
                display="block"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                whiteSpace="pre-wrap"
              >
                Discover Harmony Through Yoga
              </Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(48,64,80,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                letterSpacing="0.01px"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                whiteSpace="pre-wrap"
              >
                Embark on a journey of mind, body, and spirit. Explore our diverse range of yoga classes tailored for all levels. Join our community to experience peace, balance, and well-being. Discover your inner strength and harmony today.
              </Text>
            </Flex>
            <Button onClick={handleClick} shrink="0" size="large" isDisabled={false} variation="primary">
              Get started
            </Button>
          </Flex>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="50%"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
        >
          <StorageImage position="relative" width="100%" height="100%" alt='image' path="picture-submissions/image.jpg" />
        </Flex>
      </Flex>
      <EventSection />
    </>
  );
}

export default HomePage;