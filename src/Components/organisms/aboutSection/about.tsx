import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUsPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Container maxW="container.lg">
      <Heading as="h1" textAlign="center" my={8}>
        About Us
      </Heading>
      <Box ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          my={8}
        >
          <Heading as="h2" size="lg" mb={4}>
            Our Mission
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            fringilla magna non risus fermentum, quis tincidunt nunc ultrices.
          </Text>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          my={8}
        >
          <Heading as="h2" size="lg" mb={4}>
            Our Vision
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            fringilla magna non risus fermentum, quis tincidunt nunc ultrices.
          </Text>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          my={8}
        >
          <Heading as="h2" size="lg" mb={4}>
            Our Team
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            fringilla magna non risus fermentum, quis tincidunt nunc ultrices.
          </Text>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          my={8}
        >
          <Heading as="h2" size="lg" mb={4}>
            Contact Us
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            fringilla magna non risus fermentum, quis tincidunt nunc ultrices.
          </Text>
        </motion.div>
      </Box>
    </Container>
  );
};

export default AboutUsPage;
