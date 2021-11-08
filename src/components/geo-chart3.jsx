// https://codesandbox.io/search?refinementList%5Btemplate%5D=&refinementList%5Bnpm_dependencies.dependency%5D%5B0%5D=react-simple-maps&page=1&configure%5BhitsPerPage%5D=12&query=react%20marker%20map
// https://codesandbox.io/s/basic-marker-example-forked-xf10r?file=/src/MapChart.js
// https://www.react-simple-maps.io/examples/basic-markers/

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const GeoChart3 = () => {
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
  const samples = [
    {
      id: 1,
      region: "US",
      data: 290,
      lat: "38.0000",
      long: "-97.0000",
      color: "#25a6e6",
      rad: "7",
    },
    {
      id: 2,
      region: "US",
      data: 490,
      lat: "34.0000",
      long: "-98.0000",
      color: "#25a6e6",
      rad: "9",
    },
    {
      id: 3,
      region: "AT",
      data: 790,
      lat: "42.3333",
      long: "12.3333",
      color: "#25a6e6",
      rad: "12",
    },
    {
      id: 4,
      region: "SE",
      data: 590,
      lat: "55.0000",
      long: "12.0000",
      color: "#25a6e6",
      rad: "10",
    },
    {
      id: 5,
      region: "AT",
      data: 290,
      lat: "47.3333",
      long: "13.3333",
      color: "#25a6e6",
      rad: "5",
    },
    {
      id: 6,
      region: "SE",
      data: 390,
      lat: "62.0000",
      long: "15.0000",
      color: "#25a6e6",
      rad: "6",
    },
    {
      id: 6,
      region: "VN",
      data: 390,
      lat: " 21.0245",
      long: "105.84117",
      color: "#25a6e6",
      rad: "60",
      rad2: "602",
    },
  ];

  const style = {
    width: "600px",
    margin: "0 auto",
  };

  // const text = {
  //   color:'red',
  //   "&:hover":{
  //       background:'red',
  //       display: 'block',
  //   }
  // }

  return (
    <>
      <div style={style}>
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#DDD"
                  stroke="#FFF"
                />
              ))
            }
          </Geographies>
          {samples.map((sample) => {
            return (
              <Marker coordinates={[sample.long, sample.lat]}>
                <circle r={sample.rad} fill={sample.color} />
                <text>{sample.region}</text>
              </Marker>
            );
          })}
        </ComposableMap>
      </div>
    </>
  );
};

export default GeoChart3;
