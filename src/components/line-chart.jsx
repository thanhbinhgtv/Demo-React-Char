import { useState } from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const [state, setState] = useState([300, 140, 500, 400, 200, 600,100, 140, 500, 400, 200, 600]);
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
                ],
                tension: 0.3,
                borderWidth: 1,
                borderColor: "blue",
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
