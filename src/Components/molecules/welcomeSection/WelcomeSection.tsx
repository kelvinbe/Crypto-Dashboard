import React from 'react'
import WelcomeCard from '@/Components/atoms/cards/welcomeCard'
import { Box, Flex, Text } from '@chakra-ui/react';


const WelcomeSection = () => {
  return (
    <Box m={10}>
        <WelcomeCard name='Beno Kinyanjui' />
    </Box>
  )
}

export default WelcomeSection