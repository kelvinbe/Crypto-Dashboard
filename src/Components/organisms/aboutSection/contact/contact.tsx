import { Box, Flex, Heading, Text, Input, Textarea, Button } from "@chakra-ui/react";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ContactForm = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, // duration of the animation
          once: true, // whether animation should happen only once - while scrolling down
          mirror: false, // whether elements should animate out while scrolling past them
        });
      }, []);
  return (
    <Box p={20} m={20} >
    <Heading fontSize={36} fontWeight={700} as="h1" size="lg" mb={4}>
      Contact Us
    </Heading>
    <Box
      background="linear-gradient(127.09deg, rgb(12 20 68 / 94%) 19.41%, rgb(107 118 175 / 49%) 76.65%)"
      display={'flex'} flexDirection={'column'} justifyContent={'space-between'} width={600} height={300}
      p="10" boxShadow="md" borderRadius="md" maxW="md"
    >
      <Flex direction="column" alignItems="center" justifyContent="center" flex="1">
        <Heading as="h3" size="md" textAlign="center" mb={2}>
          Get in Touch
        </Heading>
        <Text fontSize="sm" color="gray.500" textAlign="center">
          Have a question or want to get in touch? Fill out the form below.
        </Text>
      </Flex>
      <form style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Input placeholder="Your Name" variant="filled" mb={4} />
        <Input placeholder="Your Email" variant="filled" mb={4} />
        <Textarea placeholder="Your Message" variant="filled" flex={1} mb={4} />
        <Button colorScheme="blue" variant="solid">
          Send Message
        </Button>
      </form>
    </Box>
  </Box>
);
};


export default ContactForm;
