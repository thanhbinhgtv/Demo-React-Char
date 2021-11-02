import { useState } from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const [state, setState] = useState([100, 140, 500, 400, 200, 600,100, 140, 500, 400, 200, 600]);
  const style = {
    width: "600px",
    margin: "0 auto",
  };

  return (
    <>
      <div style={style}>
        <Line
          data={{
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange,Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
              {
                label: "CMC Global",
                data: state,
                backgroundColor: [
                  "blue",
                  "red",
                  "purple",
                  "yellow",
                  "pink",
                  "brown",
                  "black",
                ],
                tension: 0.3,
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

export default LineChart;
