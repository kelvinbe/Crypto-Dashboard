'use client'
import { ChakraProvider, Flex, Box, useMediaQuery } from '@chakra-ui/react'
import MonetarySection from "@/Components/organisms/landing/monetary/monetary";
import WelcomeSection from "@/Components/molecules/welcomeSection/WelcomeSection";
import SatisfactionSection from "@/Components/organisms/landing/SatisfactionSection/SatisfactionSection";
import ChartsSection from '@/Components/organisms/landing/chartsSection/ChartsSection';
import TableCard from '@/Components/atoms/cards/tableCard';
import Header from '@/Components/molecules/header/header';
import Footer from '@/Components/molecules/footer/footer';

const App = () => {
  return (
    <Flex flexDirection={'column'} p={5}>
      <h1><span>Crypto</span></h1>
      <MonetarySection />
      <WelcomeSection />
      <SatisfactionSection />
      <ChartsSection />
      <TableCard />
    </Flex>
  )
}

const DesktopFallback = () => (
  <Flex alignItems="center" justifyContent="center" minHeight="100vh">
    <Box textAlign="center" color={'white'} fontSize={19}>
      <h6>This section is only available on desktop screens</h6>
    </Box>
  </Flex>
);

export default function Home() {
  const [isSmallScreen, isTabletScreen] = useMediaQuery(['(max-width: 480px)', '(max-width: 1024px)']);

  return (
    <Box bg="#0C0F28" className="flex min-h-screen flex-col justify-between p-4 md:p-20">
      <ChakraProvider>
        {isSmallScreen || isTabletScreen ? <DesktopFallback /> : <>
          <Header />
          <App />
          <Footer />
        </>}
      </ChakraProvider>
    </Box>
  );
}
