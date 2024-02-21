import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

interface IWelcomeCard {
    name: string;


}


const WelcomeCard = (props: IWelcomeCard) => {

    const {name} = props

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
      backgroundImage="/jelly.png"
      backgroundPosition="50% center"
      backgroundSize="cover"
      padding="32px 22px"
      borderWidth="0px"
      borderStyle="solid"
      borderColor="rgba(0, 0, 0, 0.125)"
      borderRadius="1.25rem"
      p={10}
    >
      <Flex flexDirection={'column'}>
        <Box>
            <Text color={'#455ba3'}>Welcome back,</Text>
        </Box>
        <Box>
            <Text fontSize={32} fontWeight={'Bold'} color={'white'}>{name}</Text>
        </Box>
        <Box>
            <Text color={'#455ba3'}>Glad to see you again!</Text>
        </Box>
        <Box>
            <Text color={'#455ba3'}>Ask me anything</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default WelcomeCard;
