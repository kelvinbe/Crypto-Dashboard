import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";
import './PeopleCards.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const people = [
  { name: 'John Doe', jobTitle: 'Software Engineer', imageUrl: 'https://images.pexels.com/photos/2092450/pexels-photo-2092450.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Ray Smith', jobTitle: 'Product Manager', imageUrl: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Bob Johnson', jobTitle: 'Designer', imageUrl: 'https://images.pexels.com/photos/936054/pexels-photo-936054.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const PeopleCards = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, // duration of the animation
          once: true, // whether animation should happen only once - while scrolling down
          mirror: false, // whether elements should animate out while scrolling past them
        });
    }, []);
    return (
        <Box data-aos="fade-up"  p={20} m={20}>
        <Heading fontSize={36} fontWeight={700} as="h1" size="lg" mb={4}>
            Our Team
        </Heading>
    <Flex  className="people-cards-container" direction="row" align="center">
    {people.map((person, index) => (
        <Box
        style={{ width: 270, height: 230 }}

        background="linear-gradient(127.09deg, rgb(12 20 68 / 94%) 19.41%, rgb(107 118 175 / 49%) 76.65%)"
        key={index} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} width={270} height={230} className="people-card" p="10"  boxShadow="md" borderRadius="md" maxW="md">
        <Image src={person.imageUrl} height={130} alt={person.name} borderRadius="md" />
        <Box mt="2">
            <Heading as="h3" size="md">{person.name}</Heading>
            <Text fontSize="sm" color="gray.500">{person.jobTitle}</Text>
    </Box>
        </Box>
    ))}
    </Flex> 
    </Box>
    
);
};

export default PeopleCards;
