// https://codesandbox.io/s/2o70w3p57j
import React from "react";
import Chart from "react-google-charts";

const AnnotationChart = () => {
    const columns = [
        {
          type: "date",
          label: "Date"
        },
        {
          type: "number",
          label: "Kepler-22b mission"
        },
        {
          type: "string",
          label: "Kepler title"
        },
        {
          type: "string",
          label: "Kepler text"
        },
        {
          type: "number",
          label: "Gliese 163 mission"
        },
        {
          type: "string",
          label: "Gliese title"
        },
        {
          type: "string",
          label: "Gliese text"
        }
      ];
      
      const rows = [
        [
          new Date(2314, 2, 15),
          12400,
          undefined,
          undefined,
          10645,
          undefined,
          undefined
        ],
        [
          new Date(2314, 2, 16),
          24045,
          "Lalibertines",
          "First encounter",
          12374,
          undefined,
          undefined
        ],
        [
          new Date(2314, 2, 17),
          35022,
          "Lalibertines",
          "They are very tall",
          15766,
          "Gallantors",
          "First Encounter"
        ],
        [
          new Date(2314, 2, 18),
          12284,
          "Lalibertines",
          "Attack on our crew!",
          34334,
          "Gallantors",
          "Statement of shared principles"
        ],
        [
          new Date(2314, 2, 19),
          8476,
          "Lalibertines",
          "Heavy casualties",
          66467,
          "Gallantors",
          "Mysteries revealed"
        ],
        [
          new Date(2314, 2, 20),
          0,
          "Lalibertines",
          "All crew lost",
          79463,
          "Gallantors",
          "Omniscience achieved"
        ]
      ];

    const style = {
        width: "65%",
        margin: "20px auto",
      };
 
    return (
      <div style={style}>
        <Chart
          chartType="AnnotationChart"
          width="100%"
          height="300px"
          legendToggle
          rows={rows}
          columns={columns}
        />
      </div>
    );
}

export default AnnotationChart;
