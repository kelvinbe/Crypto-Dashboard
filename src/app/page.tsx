import { ChakraProvider, Flex, Box, Grid, GridItem } from '@chakra-ui/react'
import MonetarySection from "@/Components/organisms/monetary/monetary";
import WelcomeSection from "@/Components/molecules/welcomeSection/WelcomeSection";
import SatisfactionSection from "@/Components/organisms/SatisfactionSection/SatisfactionSection";
import ChartsSection from '@/Components/organisms/chartsSection/ChartsSection';
import TableCard from '@/Components/atoms/cards/tableCard';
import Header from '@/Components/molecules/header/header';
import Footer from '@/Components/molecules/footer/footer';

const App = () => {

  return (
    <Flex flexDirection={'column'} p={5}>
      <MonetarySection />
      <WelcomeSection />
      <SatisfactionSection />
      <ChartsSection />
      <TableCard />
    </Flex>
  )
  
}




export default function Home() {
  return (
    <Box bg="#0C0F28" className="flex min-h-screen flex-col justify-between p-4 md:p-20">
      <ChakraProvider>
      <Header />

        <App />
        <Footer />
      </ChakraProvider>
    </Box>
  );
}

