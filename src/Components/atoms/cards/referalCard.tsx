import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import CircularProgresss from '@/Components/molecules/CircularProgress/CircularProgress';

const ReferalCard = () => {
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
      height="340px"
      transition="box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
      overflow="hidden"
      padding="22px"
      borderWidth="0px"
      borderStyle="solid"
      borderColor="rgba(0, 0, 0, 0.125)"
      borderRadius="1.25rem"
      width={600}
      background="linear-gradient(127.09deg, rgb(12 20 68 / 94%) 19.41%, rgb(107 118 175 / 49%) 76.65%)"
      m={5}
    >
      <Flex flexDirection={'column'}>
        <Box>
            <Text fontSize={30} fontWeight={'Bold'} color={'white'}>Satisfaction Rate</Text>
            <Text fontSize={13} color={'#a5a3a3'}>From all projects</Text>
        </Box>
        <Box display={'flex'} justifyContent={'center'}>
            <CircularProgresss autoChangeProgress={true} showImage={true} color='#3E64FF'  />
        </Box>
      </Flex>
    </Box>
  );
};

export default ReferalCard;
