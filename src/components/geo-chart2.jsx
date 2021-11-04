// https://react-google-charts.com/geo-chart#region-geocharts
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import {GoogleCharts} from 'google-charts';
const GeoChart2 = () => {
 

  const style = {
    width: "400px",
    margin: "0 auto",
  };
  useEffect(()=>{
    // GoogleCharts.load(drawChart);
    GoogleCharts.load(drawGeoChart, {
        'packages': ['geochart'],
        // 'mapsApiKey': 'YOUR_API_KEY'
    });
    function drawChart() {
 
        // Standard google charts functionality is available as GoogleCharts.api after load
        const data = GoogleCharts.api.visualization.arrayToDataTable([
            ['City',   'Population', 'Area'],
            ['Rome',      2761477,    1285.31],
            ['Milan',     1324110,    181.76],
            ['Naples',    959574,     117.27],
            ['Turin',     907563,     130.17],
            ['Palermo',   655875,     158.9],
            ['Genoa',     607906,     243.60],
            ['Bologna',   380181,     140.7],
            ['Florence',  371282,     102.41],
            ['Fiumicino', 67370,      213.44],
            ['Anzio',     52192,      43.43],
            ['Ciampino',  38262,      11]
        ]);
        var options = {
            region: 'IT',
            displayMode: 'markers',
            colorAxis: {colors: ['green', 'blue']}
        };
        const chart = new GoogleCharts.api.visualization.GeoChart(document.getElementById('chart1'));
        chart.draw(data, options);
    }
    function drawGeoChart() {
 
        /* Geo Chart */
        const geo_1_data = GoogleCharts.api.visualization.arrayToDataTable([
            ['State', 'Spend'],
            ['ID', {v:120000, f: '$120,000'}],
            ['CO', {v:567135, f: '$567,135'}],
            ['FL', {v:220000, f: '$220,000'}],
            ['NY', {v:1120000, f: '$1,120,000'}],
            ['CA', {v:5120000, f: '$5,120,000'}],
            ['AK', {v:101000, f: '$101,000'}],
            ['AZ', {v:311030, f: '$311,030'}]
        ]);
        const geo_1_options = {
            region: 'US',
            resolution: 'provinces',
            is3D: true,
            legend: {
                numberFormat:'$###,###'
            }
        }
        const geo_1_chart = new GoogleCharts.api.visualization.GeoChart(document.getElementById('chart1'));
        geo_1_chart.draw(geo_1_data, geo_1_options);
    }
  },[])
  return (
    <>
      <div id="chart1" style={style}>
        
      </div>
    </>
  );
};

export default GeoChart2;
