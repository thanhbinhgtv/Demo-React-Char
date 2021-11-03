// https://react-google-charts.com/geo-chart#region-geocharts
import { useState } from "react";
import { Chart } from "react-google-charts";
const GeoChart = () => {
  const [state, setState] = useState([
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
    ["VietNam", 700],
  ]);

  const style = {
    width: "400px",
    margin: "0 auto",
  };

  return (
    <>
      <div style={style}>
        <Chart
          width={"500px"}
          height={"300px"}
          chartType="GeoChart"
          data={state}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey="YOUR_KEY_HERE"
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    </>
  );
};

export default GeoChart;
