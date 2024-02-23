import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import TableOps from '@/Components/molecules/tables/table';

const TableCard = () => {
  return (
    <Box
      color="rgba(0, 0, 0, 0.87)"
      display="flex"
      flexDirection="column"
      backdropFilter="blur(120px)"
      position="relative"
      minWidth="0px"
      overflowWrap="break-word"
      boxShadow="rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem"
      height="auto" // Change height to auto to fit the content
      transition="box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
      overflow="hidden"
      background="linear-gradient(127.09deg, rgb(12 20 68 / 94%) 19.41%, rgb(107 118 175 / 49%) 76.65%)"
      padding="32px"
      borderWidth="0px"
      borderStyle="solid"
      borderColor="rgba(0, 0, 0, 0.125)"
      borderRadius="1.25rem"
      width={{ base: '100%', md: '500px', lg: '900px' }}
      margin="auto"
      marginBottom="4"
    >
        <Text color={'white'}>Authors table</Text>
      <TableOps />
    </Box>
  );
};

export default TableCard;
