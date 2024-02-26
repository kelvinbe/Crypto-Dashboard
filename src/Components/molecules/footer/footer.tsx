import { Grid, GridItem, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Grid
      templateColumns={{ base: '1fr', md: '1fr 1fr' }}
      gap={{ base: '8px', md: '0' }}
      padding="16px"
      opacity="1"
      background="transparent"
      color="rgb(52, 71, 103)"
      marginTop={5}
    >
      <GridItem>
        <Text textAlign={{ base: 'center', md: 'left' }} color="white">
          @ 2024, Made with ❤️ by Kelvin Beno
        </Text>
      </GridItem>
      <GridItem>
        <Text color={'white'} textAlign={{ base: 'center', md: 'right' }}>Crypto dashboards</Text>
      </GridItem>
    </Grid>
  );
};

export default Footer;
