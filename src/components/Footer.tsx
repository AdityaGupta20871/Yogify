import React from 'react';
import { Flex, Text, Link, Divider } from '@aws-amplify/ui-react';

const ContextualFooter: React.FC = () => {
  const isLoggedIn = true; // Replace with actual login logic

  return (
    <Flex
      as="footer"
      direction="column"
      padding="16px"
      color="#fff"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Divider orientation="horizontal" size="small" color="#555" />
      <Flex
        direction="row"
        gap='50px'
        alignItems="flex-start"
        width="100%"
        position="relative"
        padding="40px"
      >
        <Flex direction="column" gap="8px" flex="1">
          <Text fontSize="18px" fontWeight="bold">Yogify Yoga</Text>
          <Text fontSize="14px">
          Elevate your well-being with Yogify - a holistic platform blending ancient practices and modern insights to nourish mind, body, and spirit. Discover transformative yoga, meditation, and wellness experiences tailored to your journey.
          </Text>
          <Text fontSize="14px">© 2024 Yogify Yoga. All rights reserved.</Text>
        </Flex>

          <Flex direction="column" gap="8px" flex="1">
          <Text fontSize="18px" fontWeight="bold">Features</Text>
          <Text fontSize="14px">
          Yogify offers personalized expert-guided sessions, community forums, wellness resources. Join us for a holistic yoga journey.
          </Text>
          </Flex>

        <Flex direction="column" gap="8px" flex="1">
          <Text fontSize="18px" fontWeight="bold">Contact Us</Text>
          <Text >Email: support@yogifyyoga.com</Text>
          <Text >Phone: (123) 456-7890</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContextualFooter;
