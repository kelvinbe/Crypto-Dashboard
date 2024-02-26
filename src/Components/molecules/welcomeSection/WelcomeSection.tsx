import React from 'react';
import WelcomeCard from '@/Components/atoms/cards/welcomeCard';
import { Grid } from '@chakra-ui/react';

const WelcomeSection = () => {
    return (
        <Grid
            templateColumns={{ base: '1fr', md: '9  fr 1fr' }} // One column on small screens, two columns on medium screens
            gap={4} // Add spacing between cards
            justifyContent="center" // Center the cards horizontally
            alignItems="center" // Center the cards vertically
            m={10}
        >
            <WelcomeCard name="Sir/Madam" />
        </Grid>
    );
};

export default WelcomeSection;
