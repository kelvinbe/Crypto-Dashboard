'use client'
import React, { useState, useEffect } from "react";
import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import CircularProgresss from "@/Components/molecules/CircularProgress/CircularProgress";
import MiniInfoCards from "./miniInfoCards";

const SatisfactionCard = () => {
  const [invited, setInvited] = useState("145 people");
  const [bonus, setBonus] = useState("1,465");

  useEffect(() => {
    const interval = setInterval(() => {
      setInvited(getRandomNumber(100, 500) + " people");
      setBonus(getRandomNumber(1000, 5000));
    }, 3000); // Change data every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <Box
      color="rgba(0, 0, 0, 0.87)"
      display="flex"
      flexDirection="column"
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
      m={5}
    >
      <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={4}>
        <GridItem>
          <Box display="flex" flexDirection="column">
            <Box>
              <Text fontSize={30} fontWeight="bold" color="white">
                Referral Tracking
              </Text>
            </Box>
            <Box>
              <Box margin={3}>
                <MiniInfoCards title="Invited" people={invited} />
              </Box>
              <Box margin={3}>
                <MiniInfoCards title="Bonus" people={bonus} />
              </Box>
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop={{ base: 0, lg: 20 }}
          >
            <CircularProgresss
              color="green"
              autoChangeProgress={false}
              showImage={false}
            />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default SatisfactionCard;
