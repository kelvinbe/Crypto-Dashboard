import * as React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Grid, GridItem, Box, useMediaQuery } from '@chakra-ui/react';



interface IProps {
  line: boolean;
  doughnut: boolean
}



export default function ChartsOverviewDemo(props: IProps) {

  const {line, doughnut} = props

  const doughnutData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ['Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [5, 6, 7],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Dataset 2',
        data: [3, 2, 1],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };
  

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const [isSmallScreen] = useMediaQuery('(max-width: 480px)');

  return (
    <Box overflowX="auto" width={isSmallScreen ? '320px' : '100%'} maxWidth="100%" minWidth="320px">
      <Grid templateColumns="0fr 1fr" gap="20px" width="100%" margin="0 auto">
        <GridItem>
          {doughnut && <Doughnut data={doughnutData} options={options} />}
        </GridItem>
        <GridItem>
         {line && <Line data={lineData} options={options} /> }
        </GridItem>
      </Grid>
    </Box>
  );
}
