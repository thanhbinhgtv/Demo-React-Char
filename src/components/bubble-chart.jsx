import { Bubble } from "react-chartjs-2";

const BubbleChart = () => {
  const style = {
    width: "1000px",
    margin: "0 auto",
  };

  return (
    <>
      <div style={style}>
        <Bubble
          data={{
            datasets: [
              {
                label: "CMC Global",
                data:  [{
                  x: 20,
                  y: 30,
                  r: 15
                }, {
                  x: 40,
                  y: 20,
                  r: 10
                }],
                backgroundColor: [
                  "green",
                  // "red",
                  // "purple",
                  // "yellow",
                ],
                borderWidth: 1,
                borderColor: "#777",
                hoverBorderWidth: 3,
                hoverBorderColor: "#000",
              },

              {
                label: "CMC Global 2",
                data:  [{
                  x: 0,
                  y: 30,
                  r: 15
                }, {
                  x: 50,
                  y: 20,
                  r: 10
                }],
                backgroundColor: [
                  // "green",
                  "red",
                  // "purple",
                  // "yellow",
                  
                ],
                borderWidth: 1,
                borderColor: "#777",
                hoverBorderWidth: 3,
                hoverBorderColor: "#000",
              },
            ],
          }}
        />
      </div>
    </>
  );
};

export default BubbleChart;
