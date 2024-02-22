"use client";
import React, { ReactNode } from "react";
import { Flex, Box, Progress, Text, Icon } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";

interface IUSerCard {
  icon: ReactNode;
  title: string;
  progress: number;
  numbers: string;
}

const UsersCard = (props: IUSerCard) => {
  const { icon, title, progress, numbers } = props;

  return (
    <Box borderRadius="md" p={1} m={1} textAlign="center" marginTop={-70}>
      <Flex direction="column" alignItems="center">
        <Flex justifyContent={"center"} alignItems={"center"}>
          <span
            style={{
              backgroundColor: "#0075FF",
              width: 20,
              height: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            {icon}
          </span>
          <Text marginLeft={2} color={"white"} fontSize="xs">
            {title}
          </Text>
        </Flex>
        <Box>
          <Box color={"white"} fontSize={"sm"}>
            {numbers}
          </Box>
          <progress
            style={{
              width: 50,
              borderRadius: 10,
              WebkitAppearance: "none",
              appearance: "none",
              backgroundColor: "#333",
              fontSize: 10,
            }}
            max={100}
            value={progress}
          />
          <style>
            {`
              progress::-webkit-progress-bar {
                background-color: #333; // Background color of the progress bar container
              }
              progress::-webkit-progress-value {
                background-color: #0075FF; // Color of the progress bar
                border-radius: 10px !impotant; // Border radius of the progress bar
              }
            `}
          </style>{" "}
        </Box>
      </Flex>
    </Box>
  );
};

export default UsersCard;
