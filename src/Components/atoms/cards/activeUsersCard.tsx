import React, { ReactNode } from 'react';
import { Box, Text } from '@chakra-ui/react';
import LineChart from '@/Components/molecules/charts/LineChart';
import UsersCard from './usersCards';


interface IChartCard {
    percentage: string;
    usersValues: {icon: ReactNode,title: string;progress: number; numbers: string}[]
}

const ActiveUsersCard = (props: IChartCard) => {

    const {percentage, usersValues} = props

    const percentageColor = percentage[0] === '+' ? '#00FF00' : '#FF0000';



  return (
    <Box
      color="rgba(0, 0, 0, 0.87)"
      display="flex"
      flexDirection="column"
      backdropFilter="blur(120px)"
      position="relative"
      minWidth="0px"
      overflowWrap="break-word"
      boxShadow="rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem"
      transition="box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
      overflow="hidden"
      background="linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgb(53 75 189 / 49%) 76.65%)"
      padding="22px"
      borderWidth="0px"
      borderStyle="solid"
      borderColor="rgba(0, 0, 0, 0.125)"
      borderRadius="1.25rem"
      width={600}
      height={400}
      m={5}
    >
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
            <Text fontSize={16} color={'white'}>Active Users</Text>
            <Text display={'flex'}  color={percentageColor} paddingTop={1.5} fontSize={11} paddingLeft={1}>
                {percentage} <Text color={'#52566B'}>than last week</Text>  
            </Text>
        </Box>
    <Box marginTop={-3}>
    <LineChart seriesAName='Users' seriesBName='Non-Users' legend={false} type={"bar"} />
    </Box>

    <Box display={'flex'} justifyContent={'space-between'} marginTop={-2}>

    {usersValues.map((user) => {
        return <UsersCard numbers={user.numbers} title={user.title} icon={user.icon} progress={user.progress} />
    })
    }
    </Box>
    </Box>
  );
}

export default ActiveUsersCard;
