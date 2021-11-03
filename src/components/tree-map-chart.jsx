// https://apexcharts.com/docs/chart-types/treemap-chart/

import { useState } from "react";
import ApexCharts from "react-apexcharts";

const TreeMapChart = () => {
  const [series, setSeries] = useState([
    {
      name: "Team 1",
      data: [
        {
          x: "month 1",
          y: 10,
        },
        {
          x: "month 2",
          y: 60,
        },
        {
          x: "month 3",
          y: 41,
        },
      ],
    },
    {
      name: "Team 2",
      data: [
        {
          x: "month 1",
          y: 10,
        },
        {
          x: "month 2",
          y: 5,
        },
      ],
    },
  ]);

  const [option, setOption] = useState({
    legend: {
      show: true,
    },
    chart: {
      height: 350,
      type: "treemap",
    },
    title: {
      text: "Multi-dimensional Treemap",
      align: "center",
    },
  });

  const style = {
    width: "600px",
    margin: "0 auto",
  };

  return (
    <>
      <div style={style}>
        <ApexCharts
          options={option}
          series={series}
          type="treemap"
          height={350}
        />
      </div>
    </>
  );
};

export default TreeMapChart;
