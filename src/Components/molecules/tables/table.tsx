'use client'
import React, { useState } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Select,
  Input,
  Grid,
  GridItem,
  Avatar,
  Badge,
  Flex,
} from '@chakra-ui/react';
import gravatar from 'gravatar';

const data = [
  { author: 'John Doe', function: 'Manager', status: 'Online', employed: '2022-02-15', email: 'john.doe@example.com' },
  { author: 'Jane Doe', function: 'Developer', status: 'Offline', employed: '2021-11-30', email: 'jane.doe@example.com' },
  { author: 'Alice Smith', function: 'Executive', status: 'Online', employed: '2023-01-20', email: 'alice.smith@example.com' },
  { author: 'Bob Johnson', function: 'Developer', status: 'Online', employed: '2022-09-10', email: 'bob.johnson@example.com' },
  { author: 'Eve Brown', function: 'Manager', status: 'Offline', employed: '2023-05-05', email: 'eve.brown@example.com' },
];

const TableOps = () => {
  const [filters, setFilters] = useState({
    author: '',
    function: '',
    status: '',
    date: '',
  });

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const filteredData = data.filter((row) => {
    return (
      (filters.author === '' || row.author.toLowerCase().includes(filters.author.toLowerCase())) &&
      (filters.function === '' || row.function.toLowerCase() === filters.function.toLowerCase()) &&
      (filters.status === '' || row.status.toLowerCase() === filters.status.toLowerCase()) &&
      (filters.date === '' || filters.date === 'oldest' || filters.date === 'newest' ||
        (filters.date === 'oldest' && new Date(row.employed) >= new Date(filters.date)) ||
        (filters.date === 'newest' && new Date(row.employed) <= new Date(filters.date)))
    );
  });

  return (
    <Box overflowX="auto">
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>
              <Input
                placeholder="Search author"
                value={filters.author}
                onChange={(e) => handleFilterChange('author', e.target.value)}
                color="white"
              />
            </Th>
            <Th>
              <Select
                placeholder="Function"
                value={filters.function}
                onChange={(e) => handleFilterChange('function', e.target.value)}
                color="black"
              >
                <option value="">All</option>
                <option value="Manager">Manager</option>
                <option value="Developer">Developer</option>
                <option value="Executive">Executive</option>
              </Select>
            </Th>
            <Th>
              <Select
                placeholder="Status"
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                color="black"
              >
                <option value="">All</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </Select>
            </Th>
            <Th>
              <Select
                placeholder="Date"
                value={filters.date}
                onChange={(e) => handleFilterChange('date', e.target.value)}
                color="black"
              >
                <option value="">All</option>
                <option value="oldest">Oldest</option>
                <option value="newest">Newest</option>
              </Select>
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredData.map((row, index) => (
            <Tr key={index} borderBottom="0.0625rem solid rgb(45, 55, 72)">
              <Td>
                <Flex alignItems="center">
                  <Avatar name={row.author} src={gravatar.url(row.email, { protocol: 'https', s: '100', d: 'retro' })} marginRight="8px" />
                  <Text color="white">{row.author}</Text>
                </Flex>
              </Td>
              <Td>
                <Text color="white">{row.function}</Text>
              </Td>
              <Td>
                {row.status === 'Online' ? (
                  <Badge colorScheme="green">Online</Badge>
                ) : (
                  <Badge colorScheme="gray">Offline</Badge>
                )}
              </Td>
              <Td>
                <Text color="white">{row.employed}</Text>
              </Td>
              <Td>
                <Text color="white">Actions</Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableOps;
