import React from 'react';
import { Box, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

const Header = () => {
  return (
    <Box
      transition="box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
      flexDirection="row"
      width="100%"
      boxSizing="border-box"
      flexShrink="0"
      position="sticky"
      zIndex="1100"
      left="auto"
      right="0px"
      boxShadow="inset 0rem 0rem 0.0625rem 0.0625rem rgba(255, 255, 255, 0.9), 0rem 1.25rem 1.6875rem 0rem rgba(0, 0, 0, 0.05)"
      backdropFilter="blur(2.625rem)"
      color="rgb(255, 255, 255)"
      top="0.75rem"
      minHeight="4.6875rem"
      display="flex"
      alignItems="center"
      borderRadius="1.25rem"
      padding="4"
      backgroundColor="transparent"
      borderColor="rgba(226, 232, 240, 0.3)"
      justifyContent={'space-between'}
      marginBottom={10}
    >
      <Link href="/" passHref>
        <ChakraLink mr={4}>Home</ChakraLink>
      </Link>
      <Link href="/about" passHref>
        <ChakraLink mr={4}>About Us</ChakraLink>
      </Link>
      <Link href="#" passHref>
        <ChakraLink>Contact Us</ChakraLink>
      </Link>
    </Box>
  );
};

export default Header;
