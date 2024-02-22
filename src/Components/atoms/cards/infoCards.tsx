import React, { ReactNode } from 'react';
import { Card, CardBody, Text, Box, Flex } from '@chakra-ui/react';

interface IInfoCard {
  title: string;
  amount: string;
  icon: ReactNode;
  percentage: string
}

const InfoCards = (props: IInfoCard) => {
  const { title, amount, icon, percentage } = props;
  const percentageColor = percentage[0] === '+' ? '#00FF00' : '#FF0000';



  return (
    <Card bgColor={'#0B0C24'} width={['full', '450px']} margin='auto'>
      <CardBody>
        <Flex justifyContent={'space-between'} flexDirection={['row']} alignItems={['start', 'center']} width='full'>
          <Box flexDirection={['column']} order={[1, 2]}>
            <Text fontSize={12} color={'#555c85'}>{title}</Text>
            <Box display={'flex'} flexDirection={'row'} color={'#FFFFFF'}>
              {amount}
              <Text  color={percentageColor} paddingTop={1.5} fontSize={11} paddingLeft={1}>
              {percentage}
              </Text>
            </Box>
          </Box>
          <Box width={45} display={'flex'} height={38} justifyContent={'center'} alignItems={'center'} borderRadius={10} bgColor={'#0075FF'} marginBottom={['2', '0']} marginRight={['0', '4']} order={[1, 2]}>
            {icon}
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default InfoCards;
