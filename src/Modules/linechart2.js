import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 100, 82, 95]
      },
      {
        name: 'expenses',
        data: [50, 35, 70, 60, 80, 90, 65, 10, 110, 105, 67, 80]
      }
    ]
  });

  const options = {
    chart: {
      id: 'line-chart',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yaxis: {
      opposite: false
    }
  };

  return (
    <ReactApexChart
      options={options}
      series={chartData.series}
      type="line"
      height={180}
      width={980}
    />
  );
};

export default LineChart;


