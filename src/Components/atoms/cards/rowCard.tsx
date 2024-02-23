import React from 'react';
import { Table, Td, Avatar,Tbody,Tr,Text, Badge, Flex } from '@chakra-ui/react';

const RowCard = ({ author, function: func, status, employed }) => {
  return (
    <Table size="sm" variant="simple">
      <Tbody>
        <Tr>
          <Td>
            <Flex alignItems="center">
              <Avatar name={author} src="https://bit.ly/dan-abramov" marginRight="8px" />
              <Text>{author}</Text>
            </Flex>
          </Td>
          <Td>
            <Text>{func}</Text>
          </Td>
          <Td>
            {status === 'Online' ? (
              <Badge colorScheme="green">Online</Badge>
            ) : (
              <Badge colorScheme="gray">Offline</Badge>
            )}
          </Td>
          <Td>
            <Text>{employed}</Text>
          </Td>
          <Td>
            <Text>Actions</Text>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default RowCard;
