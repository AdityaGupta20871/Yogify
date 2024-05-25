import React from 'react';
import { User } from '../types/Users';
import { Table, TableHead, TableRow, TableCell, TableBody,Flex } from '@aws-amplify/ui-react';
interface UserTableProps {
  user: User;
}

const UserTable: React.FC<UserTableProps> = ({ user }) => {
  return (
    <Flex
    width="100vw"
    height="100vh"
      backgroundColor="white"
      borderRadius="8px"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      padding="16px"
    >
    <Table highlightOnHover={true}>
    <TableHead>
      <TableRow>
        <TableCell as="th">Name</TableCell>
        <TableCell as="th">Email</TableCell>
        <TableCell as="th">Phone</TableCell>
        <TableCell as="th">Event Title</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.phone}</TableCell>
          <TableCell>{user.eventtitle}</TableCell>
        </TableRow>
    </TableBody>
  </Table>
  </Flex>
  );
};

export default UserTable;
