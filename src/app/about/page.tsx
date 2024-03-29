'use client'
import { useEffect } from 'react';
import { Box, Container, Heading, Text, Flex } from "@chakra-ui/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import MissionCard from '@/Components/atoms/about-cards/missionCards';
import { data } from './data';
import MissionSection from '@/Components/organisms/aboutSection/mission/missionSection';
import VissionSection from '@/Components/organisms/aboutSection/vission/vissionSection';
import PeopleCards from '@/Components/organisms/aboutSection/team/team';
import ContactForm from '@/Components/organisms/aboutSection/contact/contact';

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of the animation
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <Container bg="#0C0F28" className="flex min-h-screen flex-col justify-between p-4 md:p-20" maxW="container.lg">
      <Heading as="h1" textAlign="center" my={8}>
        About Us
      </Heading>
      <MissionSection />
      <VissionSection />
    <PeopleCards />
    <ContactForm />
    </Container>
  );
};

export default Page;
