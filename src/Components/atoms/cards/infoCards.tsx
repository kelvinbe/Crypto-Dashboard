import React, { ReactNode } from 'react';
import { Card, CardBody, Text, Box, Flex, Grid, GridItem } from '@chakra-ui/react';

interface IInfoCard {
  title: string;
  amount: string;
  icon: ReactNode;
  percentage: string;
}

const InfoCards = (props: IInfoCard) => {
  const { title, amount, icon, percentage } = props;
  const percentageColor = percentage[0] === '+' ? '#00FF00' : '#FF0000';

  return (
    <Card bgColor="#0B0C24" width="100%" margin="auto">
      <CardBody>
        <Grid templateColumns={['1fr', '1fr auto']} gap={['2', '4']} alignItems="center">
          <GridItem textAlign={['center', 'left']} marginBottom={['2', '0']}>
            <Text fontSize={12} color="#555c85">
              {title}
            </Text>
            <Flex alignItems="baseline" color="#FFFFFF">
              <Text>{amount}</Text>
              <Text color={percentageColor} fontSize={11} paddingLeft={1}>
                {percentage}
              </Text>
            </Flex>
          </GridItem>
          <GridItem width={45} height={38} borderRadius={10} bgColor="#0075FF" display="flex" justifyContent="center" alignItems="center">
            {icon}
          </GridItem>
        </Grid>
      </CardBody>
    </Card>
  );
};

export default InfoCards;
