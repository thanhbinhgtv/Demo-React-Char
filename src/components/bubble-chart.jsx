import React, { useState } from "react";
import { Bubble } from "react-chartjs-2";

const BubbleChart = () => {
  const [state, setState] = useState([
    {
      x: 20,
      y: 30,
      r: 15,
    },
    {
      x: 30,
      y: 20,
      r: 15,
    },
    {
        x: 0,
        y: 20,
        r: 5,
      },
    {
      x: 40,
      y: 10,
      r: 10,
    },
  ]);

  const style = {
    width: "1000px",
    margin: "0 auto",
  };

  return (
    <>
      <div style={style}>
        <Bubble
          data={{
            // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
              {
                label: "CMC Global",
                data: state,
                backgroundColor: [
                  "green",
                  "red",
                  "purple",
                  "yellow",
                  "pink",
                  "brown",
                  "black",
                ],
                borderWidth: 1,
                borderColor: "#777",
                hoverBorderWidth: 3,
                hoverBorderColor: "#000",
              },
            ],
          }}
          // width={100}
          // height={40}
        />
      </div>
    </>
  );
};

export default BubbleChart;
