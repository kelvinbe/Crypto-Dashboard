import React from 'react'
import Image from "next/image";
import { ChakraProvider, Flex, Box, Grid, GridItem } from '@chakra-ui/react'
import InfoCards from "@/Components/atoms/cards/infoCards";
import { FaWallet } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { IoMdCopy } from "react-icons/io";

const monetaryValues = [
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
  return (
    
    <Grid
    templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
    gap={4}
    width="full"
    p={4}
  >
    {monetaryValues.map((info) => (
      <GridItem key={info.title}>
        <InfoCards amount={info.amount} icon={info.icon} percentage={info.percentage} title={info.title} />
      </GridItem>
    ))}
  </Grid>
  )
}

export default MonetarySection