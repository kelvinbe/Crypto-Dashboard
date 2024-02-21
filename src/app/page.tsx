import Image from "next/image";
import { ChakraProvider, Flex, Box, Grid, GridItem } from '@chakra-ui/react'
import MonetarySection from "@/Components/organisms/monetary/monetary";



const App = () => {

  return (
    <Flex>
      <MonetarySection />
    </Flex>
  )
  
}




export default function Home() {
  return (
    <Box bg="#0C0F28" className="flex min-h-screen flex-col justify-between p-20">
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Box>
  );
}

