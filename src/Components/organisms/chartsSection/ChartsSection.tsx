import React from 'react';
import { Flex, Grid, GridItem } from '@chakra-ui/react';
import ChartCard from '@/Components/atoms/cards/chartCard';
import ActiveUsersCard from '@/Components/atoms/cards/activeUsersCard';
import { FaWallet } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';
import { FaShoppingCart } from 'react-icons/fa';
import { TiSpanner } from 'react-icons/ti';

const usersValues = [
  { icon: <FaWallet color="white" size={10} />, title: 'Users', progress: 25, numbers: '32,984' },
  { icon: <IoIosRocket color="white" size={10} />, title: 'Clicks', progress: 50, numbers: '2,584' },
  { icon: <FaShoppingCart color="white" size={10} />, title: 'Sales', progress: 75, numbers: '32M' },
  { icon: <TiSpanner color="white" size={10} />, title: 'Items', progress: 100, numbers: '40,984' },
];

const ChartsSection = () => {
  return (
    <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
    <Grid
      templateColumns={{ base: '1fr', md: '1fr 1fr' }} // Responsive grid layout
      gap={6}
      p={6}
    >
      <GridItem colSpan={{ base: 1, md: 1 }}>
        <ChartCard percentage="+5%" />
      </GridItem>
      <GridItem colSpan={{ base: 1, md: 1 }}>
        <ActiveUsersCard usersValues={usersValues} percentage="+23%" />
      </GridItem>
    </Grid>
    </Flex>
  );
};

export default ChartsSection;
