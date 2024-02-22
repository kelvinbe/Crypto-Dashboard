import React from 'react';
import { Grid } from '@chakra-ui/react';
import ReferalCard from '@/Components/atoms/cards/referalCard';
import SatisfactionCard from '@/Components/atoms/cards/satisfactionCard';

const SatisfactionSection = () => {
    return (
        <Grid
            templateColumns={{ base: '1fr', md: '1fr 1fr' }} // One column on small screens, two columns on medium screens
            gap={4} // Add spacing between cards
            justifyItems="center" // Center the cards horizontally
        >
            <ReferalCard />
            <SatisfactionCard />
        </Grid>
    );
};

export default SatisfactionSection;
