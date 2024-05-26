import React from 'react';
import DataTable from 'react-data-table-component';
import { User } from '../types/Users';

interface UserTableProps {
  users: User[];
}

const columns = [
  {
    name: 'Name',
    selector: (row: User) => row.name ?? '',
    sortable: true,
  },
  {
    name: 'Email',
    selector: (row: User) => row.email ?? '',
    sortable: true,
  },
  {
    name: 'Phone',
    selector: (row: User) => row.phone ?? '',
    sortable: true,
  },
  {
    name: 'Event Title',
    selector: (row: User) => row.eventtitle ?? '',
    sortable: true,
  },
];

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <DataTable
      columns={columns}
      data={users}
      pagination
      highlightOnHover
    />
  );
};

export default UserTable;
