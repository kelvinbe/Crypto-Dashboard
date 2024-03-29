"use client";
import React, { useState, useEffect } from "react";
import { Box, Text, Grid, GridItem, Heading, useMediaQuery } from "@chakra-ui/react";
import CircularProgresss from "@/Components/molecules/CircularProgress/CircularProgress";


interface ImissionCard {
    info: string,
    title: string,
    aos: string
}

const MissionCard = (props: ImissionCard) => {


    const {info, title, aos} = props

 

  return (
    <Box
    data-aos={aos}
      color="rgba(0, 0, 0, 0.87)"
      display="flex"
      flexDirection={"column"}
      backdropFilter="blur(120px)"
      position="relative"
      minWidth="0px"
      overflowWrap="break-word"
      boxShadow="rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem"
      height={{ base: "auto", md: "370px" }}
      transition="box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
      overflow="hidden"
      padding="22px"
      borderWidth="0px"
      borderStyle="solid"
      borderColor="rgba(0, 0, 0, 0.125)"
      borderRadius="1.25rem"
      width={{ base: "100%", md: "500px" }}
      background="linear-gradient(127.09deg, rgb(12 20 68 / 94%) 19.41%, rgb(107 118 175 / 49%) 76.65%)"
      m={20}
    >
      <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={4}>
        <GridItem>
          <Heading textColor={'white'} fontSize={36} fontWeight={700}  marginBottom={5}>{title}</Heading>
          <Text textColor={'white'} fontWeight={100} fontSize={17}>
            {info}
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default MissionCard;
