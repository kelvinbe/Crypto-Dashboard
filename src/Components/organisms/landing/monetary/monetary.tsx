'use client'
import React, { useState, useEffect } from 'react';
import { ChakraProvider, Flex, Box, Grid, GridItem } from '@chakra-ui/react';
import InfoCards from "@/Components/atoms/cards/infoCards";
import { FaWallet } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { IoMdCopy } from "react-icons/io";

const initialMonetaryValues = [
  {
    title: 'Todays Money',
    amount: '$53,000',
    percentage: '+55%',
    icon: <FaWallet color="white" />
  },
  {
    title: 'Yesterday\'s Sales',
    amount: '$45,000',
    percentage: '-10%',
    icon: <IoMdCopy color="white" />
  },
  {
    title: 'Global Revenue',
    amount: '$102,000',
    percentage: '+30%',
    icon: <BsGlobe2 color="white" />
  },
  {
    title: 'Shopping Cart Total',
    amount: '$22,500',
    percentage: '-15%',
    icon: <FaShoppingCart color="white" />
  }
];

const MonetarySection = () => {
  const [monetaryValues, setMonetaryValues] = useState(initialMonetaryValues);

  useEffect(() => {
    const interval = setInterval(() => {
      const newMonetaryValues = initialMonetaryValues.map((info) => ({
        ...info,
        amount: getRandomAmount(),
        percentage: getRandomPercentage()
      }));
      setMonetaryValues(newMonetaryValues);
    }, 3000); // Change data every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const getRandomAmount = () => {
    // Generate a random amount
    return `$${Math.floor(Math.random() * 100000)}`;
  };

  const getRandomPercentage = () => {
    // Generate a random percentage
    const positive = Math.random() < 0.5;
    const sign = positive ? '+' : '-';
    const value = Math.floor(Math.random() * 100);
    return `${sign}${value}%`;
  };

  return (
    <Grid
      templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
      gap={4}
      width={['full', '100%']}
      maxWidth={['full']}
      margin="auto"
      p={1}
    >
      {monetaryValues.map((info) => (
        <GridItem key={info.title}>
          <InfoCards amount={info.amount} icon={info.icon} percentage={info.percentage} title={info.title} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default MonetarySection;
