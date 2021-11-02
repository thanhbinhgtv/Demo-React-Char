import React, { useState } from "react";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  const [state, setState] = useState([100, 200, 300, 400, 500, 600]);
  const style = {
    width: "400px",
    margin: "0 auto",
  };

  return (
    <>
      <div style={style}>
        <Pie
          data={{
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
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

export default PieChart;
