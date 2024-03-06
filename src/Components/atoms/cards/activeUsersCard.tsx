'use client'

import React, { ReactNode } from "react";
import { Box, Text, Flex, Grid, GridItem } from "@chakra-ui/react";
import LineChart from "@/Components/molecules/charts/LineChart";
import UsersCard from "./usersCards";

interface IChartCard {
  percentage: string;
  usersValues: {
    icon: ReactNode;
    title: string;
    progress: number;
    numbers: string;
  }[];
}

const ActiveUsersCard = (props: IChartCard) => {
  const { percentage, usersValues } = props;
  const percentageColor = percentage[0] === "+" ? "#00FF00" : "#FF0000";

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
      transition="box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
      overflow="hidden"
      background="linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgb(53 75 189 / 49%) 76.65%)"
      padding="22px"
      borderWidth="0px"
      borderStyle="solid"
      borderColor="rgba(0, 0, 0, 0.125)"
      borderRadius="1.25rem"
      width={{base: '400px', md: "500px" }} // Limit maximum width on medium screens
      marginX="auto" // Center the card horizontally
      marginTop={{ base: "0", md: "0" }} // Add margin on top only on small screens
      marginBottom={{ base: "5", md: "0" }} // Add margin on bottom only on small screens
    >
      <Flex direction="column">
        <Text fontSize={16} color="white">
          Active Users
        </Text>
        <Text
          color={percentageColor}
          fontSize={11}
          paddingTop={1.5}
          paddingLeft={1}
        >
          {percentage} <Text color="#52566B">than last week</Text>
        </Text>
      </Flex>
      <Box marginTop={-5} marginBottom={5}>
        <LineChart
          line={true}
          doughnut={false}
          seriesAName="Users"
          seriesBName="Non-Users"
          legend={false}
          type="bar"
        />
      </Box>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        gap={6}
        width="100%"
        maxWidth={{ base: "100%", md: "100%" }}
        marginX="auto"
      >
        {usersValues.map((user, index) => (
          <GridItem key={index}>
            <UsersCard
              numbers={user.numbers}
              title={user.title}
              icon={user.icon}
              progress={user.progress}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default ActiveUsersCard;
