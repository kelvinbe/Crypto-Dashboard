import { ChakraProvider, Flex, Box, Grid, GridItem } from '@chakra-ui/react'
import MonetarySection from "@/Components/organisms/monetary/monetary";
import WelcomeSection from "@/Components/molecules/welcomeSection/WelcomeSection";
import SatisfactionSection from "@/Components/organisms/SatisfactionSection/SatisfactionSection";


const App = () => {

  return (
    <Flex flexDirection={'column'}>
      <MonetarySection />
      <WelcomeSection />
      <SatisfactionSection />
    </Flex>
  )
  
}




export default function Home() {
  return (
    <Box bg="#0C0F28" className="flex min-h-screen flex-col justify-between p-4 md:p-20">
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Box>
  );
}

