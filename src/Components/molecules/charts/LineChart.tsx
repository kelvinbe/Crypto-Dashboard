import * as React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Grid, GridItem } from '@chakra-ui/react';

export default function ChartsOverviewDemo() {
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
        label: '',
        data: [5, 6, 7],
      },
      {
        label: '',
        data: [3, 2, 1],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Grid
      templateColumns="1fr 1fr"
      gap="20px"
      width="100%"
      margin="0 auto"
    >
      <GridItem>
        {/* <Doughnut data={doughnutData} options={options} /> */}
      </GridItem>
      <GridItem>
        <Line data={lineData} options={options} />
      </GridItem>
    </Grid>
  );
}
