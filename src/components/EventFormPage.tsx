// src/components/EventFormPage.tsx

import React, { useState } from 'react';
import { Flex, Text, TextField, SelectField, PhoneNumberField, Button } from '@aws-amplify/ui-react';
import ImageUpload from './ImageUpload';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';
import { useNavigate } from 'react-router-dom';

const client = generateClient<Schema>();

const EventFormPage: React.FC = () => {
  const navigate = useNavigate();

  // State variables for form inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState(0);
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);

  const handleCreateEvent = async () => {
    try {
      await client.models.Event.create({
        title,
        description,
        city,
        zipCode,
        state,
        email,
        phone,
      });

      // Navigate to events page or clear the form after successful submission
      navigate('/workshop');
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <Flex
      gap="48px"
      direction="row"
      width="100vw"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="32px 0px 32px 0px"
      backgroundColor="rgba(255,255,255,1)"
    >
      <Flex
        gap="32px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
      >
        <Flex
          gap="24px"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 32px 0px 32px"
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="600"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            shrink="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            Event Details
          </Text>
          <Flex
            gap="24px"
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
          >
            <TextField
              label="Event Title"
              grow="1"
              shrink="1"
              basis="0"
              placeholder=""
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="quiet"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Flex>
        </Flex>
        <Flex
          gap="24px"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 32px 0px 32px"
        >
          <TextField
            label="Description"
            shrink="0"
            alignSelf="stretch"
            placeholder=""
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="quiet"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Flex
            gap="24px"
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
          >
            <TextField
              label="City"
              grow="1"
              shrink="1"
              basis="0"
              placeholder=""
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="quiet"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              label="Zip code"
              grow="1"
              shrink="1"
              basis="0"
              placeholder=""
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="quiet"
              value={zipCode}
              onChange={(e) => setZipCode(Number(e.target.value))}
            />
            <SelectField
              width="100px"
              label="State"
              shrink="0"
              placeholder=""
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="quiet"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              {/* Add options for states */}
              <option value="NY">New York</option>
              <option value="CA">California</option>
              {/* Add other states as needed */}
            </SelectField>
          </Flex>
        </Flex>
        <Flex
          gap="24px"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 32px 0px 32px"
        >
          <TextField
            label="Email address"
            shrink="0"
            alignSelf="stretch"
            placeholder=""
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="quiet"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PhoneNumberField
            label="Phone number"
            shrink="0"
            alignSelf="stretch"
            placeholder=""
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="quiet"
            value={phone}
            onChange={(e) => setPhone(Number(e.target.value))}
          />
        </Flex>
        <Flex
          gap="24px"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 32px 0px 32px"
        >
          <Button
            shrink="0"
            alignSelf="stretch"
            size="large"
            isDisabled={false}
            variation="primary"
            onClick={handleCreateEvent}
          >
            Create Event
          </Button>
        </Flex>
      </Flex>
      <ImageUpload />
    </Flex>
  );
};

export default EventFormPage;
