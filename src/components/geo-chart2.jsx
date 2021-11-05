// https://react-google-charts.com/geo-chart#region-geocharts
import { useEffect, useState } from "react";
import Chart from "react-google-charts";

const GeoChart2 = () => {
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
          data={[
            ["City", "Population", "Area"],
            ["Rome", 2761477, 1285.31],
            ["Milan", 1324110, 181.76],
            ["Naples", 959574, 117.27],
          ]}
          options={{
            region: "IT",
            displayMode: "markers",
            colorAxis: { colors: ["green", "blue"] },
          }}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey="AIzaSyB7upN5B0NXUj7tJLROkExf81C9WqgpnXY"
          rootProps={{ "data-testid": "2" }}
        />
      </div>
    </>
  );
};

export default GeoChart2;
