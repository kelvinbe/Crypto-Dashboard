'use client'
import React, { Component } from "react";
import Chart from "react-apexcharts";

interface ILineChart {
  type: string;
  legend: boolean;
  seriesAName: string;
  seriesBName: string;
}

class LineChart extends Component<ILineChart> {
  constructor(props: ILineChart) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
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
          show: this.props.legend // Hide the legend
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
      },
      series: [
        {
          name: this.props.seriesAName,
          data: [30, 40, 45, 50, 49, 60, 70, 91, 80, 70, 60, 50]
        },
        {
          name: this.props.seriesBName,
          data: [20, 35, 40, 55, 60, 65, 70, 75, 70, 65, 55, 45]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type={this.props.type}
              width="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LineChart;
