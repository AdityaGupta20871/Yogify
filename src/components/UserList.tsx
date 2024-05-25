// src/components/UserList.tsx
import { useState, useEffect } from 'react';
import { Flex } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';

import { User } from '../types/Users';
import UserTable from './UserTable';

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const client = generateClient<Schema>();
        const { data: userData } = await client.models.User.list();
        // Ensure the data matches the User interface
        const formattedUserData = userData.map((user: any) => ({
          id: user.id,
          name: user.name ?? null,
          eventtitle: user.eventtitle ?? null,
          email: user.email ?? null,
          phone: user.phone ?? null,
        }));
        setUsers(formattedUserData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);
  
  return (
    <Flex
      gap="48px"
      direction="column"
      width="100%"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="48px 48px 48px 48px"
    >
      {users.map((user) => (
        <UserTable key={user.id} user={user} />
      ))}
    </Flex>
  );
};

export default UserList;
