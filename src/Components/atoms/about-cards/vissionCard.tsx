import React from 'react';
import { Box, Flex, Text, Heading, useMediaQuery } from '@chakra-ui/react';
import Image from 'next/image'



interface IVissionCard {
    info: string,
    title: string,
    aos: string


}

const VissionCard = (props: IVissionCard) => {

    const {info, title, aos} = props
    const [isSmallScreen] = useMediaQuery('(max-width: 480px)');

    

    return (
    <Box
    data-aos={aos}
    color="rgba(0, 0, 0, 0.87)"
    display="flex"
    flexDirection={'column'}
    backdropFilter="blur(120px)"
    position="relative"
    width={'100%'}
    minWidth="0px"
    overflowWrap="break-word"
    boxShadow="rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem"
    height={isSmallScreen ? "850px" : "500"}
    transition="box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
    overflow="hidden"
    backgroundPosition="50% center"
    backgroundSize="cover"
    padding="32px 22px"
    borderWidth="0px"
    maxHeight={'900px'}
    borderStyle="solid"
    borderColor="rgba(0, 0, 0, 0.125)"
    borderRadius="1.25rem"
    background="linear-gradient(127.09deg, rgb(12 20 68 / 94%) 19.41%, rgb(107 118 175 / 49%) 76.65%)"
    p={10}
    justifyContent={'center'}
    m={20}
    >
    <Flex 

    flexDirection={isSmallScreen ? "column" : 'row'}
    >
        <Box width={'100%'}>
            <Heading color='white' fontSize={36} fontWeight={700} >
                {title}
            </Heading>
            <Text color={'white'}>
                {info}
            </Text>
        </Box>
        <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Image src='/crypto.gif' width={500} height={200} alt='crypto-img' />
        </Box>
    </Flex>
    </Box>
);
};

export default VissionCard;
