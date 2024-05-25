import React from 'react'
import { Flex, Text, TextField, Button,PhoneNumberField } from '@aws-amplify/ui-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateClient } from 'aws-amplify/api';
import '@aws-amplify/ui-react/styles.css';
import { Schema } from '../../amplify/data/resource';

const client = generateClient<Schema>();

const UserForm = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [eventtitle, setEventTitle] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(0);
    
    const handleCreateUser = async () => {
        try {
          await client.models.User.create({
            name,
            email,
            phone,
            eventtitle,
          });
    
          // Navigate to events page or clear the form after successful submission
          navigate('/userlist');
        } catch (error) {
          console.error('Error creating event:', error);
        }
      };
    

  return (
    <Flex
      gap="48px"
      direction="row"
      width="100vw"
      height="100vh"
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
            label="Name"
            shrink="0"
            alignSelf="stretch"
            basis="0"
            placeholder=""
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="quiet"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        <TextField
            label="Event Title"
            shrink="0"
            alignSelf="stretch"
            basis="0"
            placeholder=""
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="quiet"
            value={eventtitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
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
            onClick={handleCreateUser}
          >
            Register
          </Button>
        </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default UserForm;