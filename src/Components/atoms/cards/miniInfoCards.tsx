import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react';



interface IMiniInfoCards {
    title: string;
    people: string
}


const MiniInfoCards = (props: IMiniInfoCards) => {
    const {title, people} = props
  return (
    <Box
    display="flex"
    width="220px"
    padding="20px 22px"
    flexDirection="column"
    opacity="1"
    color="rgb(52, 71, 103)"
    background="linear-gradient(126.97deg, rgb(6, 11, 40) 28.26%, rgb(10, 14, 35) 91.2%)"
    borderRadius="20px"
  >
    <Flex display={'flex'} justifyContent={'center'} flexDirection={'column'}>
        <Text fontSize={13} color={'a5a3a3'}>
            {title}
        </Text>
        <Text fontSize={30} color={'white'}>
            {people}
        </Text>
    </Flex>
  </Box>
);
  
}

export default MiniInfoCards