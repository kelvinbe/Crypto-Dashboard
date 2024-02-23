'use client'
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";


interface ILineChartProps {
  type: string;
  legend: boolean;
  seriesAName: string;
  seriesBName: string;
}

const LineChart: React.FC<ILineChartProps> = (props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Render nothing on the server

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ],
      labels: {
        style: {
          colors: "#ffffff"
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: "#ffffff"
        }
      }
    },
    legend: {
      show: props.legend // Hide the legend
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: '100%'
          }
        }
      }
    ]
  };

  const series = [
    {
      name: props.seriesAName,
      data: [30, 40, 45, 50, 49, 60, 70, 91, 80, 70, 60, 50]
    },
    {
      name: props.seriesBName,
      data: [20, 35, 40, 55, 60, 65, 70, 75, 70, 65, 55, 45]
    }
  ];

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type={props.type}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
