import React, { useState, useEffect } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import { Grid, GridItem, Box, useMediaQuery } from '@chakra-ui/react';
import 'chart.js/auto';


const initialCryptoData = {
  bitcoin: {
    label: 'Bitcoin',
    doughnutData: [12, 19, 3, 5, 2, 3],
    lineData1: [5, 6, 7],
    lineData2: [3, 2, 1],
  },
  ethereum: {
    label: 'Ethereum',
    doughnutData: [8, 12, 6, 8, 3, 2],
    lineData1: [3, 5, 6],
    lineData2: [1, 3, 2],
  },
  ripple: {
    label: 'Ripple',
    doughnutData: [5, 8, 3, 4, 1, 2],
    lineData1: [2, 3, 4],
    lineData2: [1, 2, 1],
  },
};

const LineChart = ({ doughnut, line }) => {
  const [cryptoData, setCryptoData] = useState(initialCryptoData.bitcoin);
  const [isSmallScreen] = useMediaQuery('(max-width: 480px)');

  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoData((prevData) => {
        if (prevData.label === 'Bitcoin') {
          return initialCryptoData.ethereum;
        } else if (prevData.label === 'Ethereum') {
          return initialCryptoData.ripple;
        } else {
          return initialCryptoData.bitcoin;
        }
      });
    }, 3000); // Change data every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Box overflowX="auto" width={isSmallScreen ? '320px' : '100%'} maxWidth="100%" minWidth="320px">
      <Grid templateColumns="0fr 1fr" gap="20px" width="100%" margin="0 auto">
        <GridItem>
          {doughnut && (
            <Doughnut
              data={{
                labels: ['Bitcoin', 'Etherium', 'Ripple', 'Dodgecoin', 'Lite', 'Orange'],
                datasets: [
                  {
                    label: 'crypto data',
                    data: cryptoData.doughnutData,
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
              }}
              options={options}
            />
          )}
        </GridItem>
        <GridItem>
          {line && (
            <Line
              data={{
                labels: ['Jun', 'Jul', 'Aug'],
                datasets: [
                  {
                    label: 'Etherium',
                    data: cryptoData.lineData1,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                  },
                  {
                    label: 'Bitcoin',
                    data: cryptoData.lineData2,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                  },
                ],
              }}
              options={options}
            />
          )}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default LineChart;
