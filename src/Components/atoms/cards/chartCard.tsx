'use client'

import React from 'react';
import { Box, Text, Grid } from '@chakra-ui/react';
import LineChart from '@/Components/molecules/charts/LineChart';

interface IChartCard {
    percentage: string
}

const ChartCard = (props: IChartCard) => {
    const { percentage } = props
    const percentageColor = percentage[0] === '+' ? '#00FF00' : '#FF0000';

    return (
        <Grid
            templateColumns="1fr"
            gap={6}
            m={5}
            width={{ base: '100%', md: '500px' }} // Responsive width
            borderRadius="1.25rem"
            boxShadow="rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem"
            background="linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgb(53 75 189 / 49%) 76.65%)"
            color="rgba(0, 0, 0, 0.87)"
            position="relative"
            overflow="hidden"
            backdropFilter="blur(120px)"
            transition="box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
            borderWidth="0px"
            borderStyle="solid"
            borderColor="rgba(0, 0, 0, 0.125)"
            padding="4px"
        >
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                <Text fontSize={16} color={'white'}>Sales Overview</Text>
                <Text display={'flex'} color={percentageColor} paddingTop={1.5} fontSize={11} paddingLeft={1}>
                    {percentage} <Text color={'#52566B'}>in 2024</Text>
                </Text>
            </Box>
            <Box marginTop={-3}>
                <LineChart line={false} doughnut={true}   />
            </Box>
        </Grid>
    );
}

export default ChartCard;
