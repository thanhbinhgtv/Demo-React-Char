// https://www.chartjs.org/docs/latest/samples/bar/vertical.html
// https://www.chartjs.org/docs/latest/charts/bar.html
import { Bar } from "react-chartjs-2";

const ColumnChart = () => {
  const labels = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  const style = {
    width: "600px",
    margin: "0 auto",
  };
  
  return (
    <>
      <div style={style}>
        <Bar
          data={{
            labels: labels,
            datasets: [
              {
                label: "Data1",
                data: [-65, 59, 80, 81, 56, 55, 40],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                //   "rgba(255, 159, 64, 0.2)",
                //   "rgba(255, 205, 86, 0.2)",
                //   "rgba(75, 192, 192, 0.2)",
                //   "rgba(54, 162, 235, 0.2)",
                //   "rgba(153, 102, 255, 0.2)",
                //   "rgba(201, 203, 207, 0.2)",
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                //   "rgb(255, 159, 64)",
                //   "rgb(255, 205, 86)",
                //   "rgb(75, 192, 192)",
                //   "rgb(54, 162, 235)",
                //   "rgb(153, 102, 255)",
                //   "rgb(201, 203, 207)",
                ],
                borderWidth: 1,
              },
              {
                label: "Data 2",
                data: [null, 59, 80, -21, 56, 55, 40],
                backgroundColor: [
                //   "rgba(255, 99, 132, 0.2)",
                //   "rgba(255, 159, 64, 0.2)",
                //   "rgba(255, 205, 86, 0.2)",
                //   "rgba(75, 192, 192, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                //   "rgba(153, 102, 255, 0.2)",
                //   "rgba(201, 203, 207, 0.2)",
                ],
                borderColor: [
                //   "rgb(255, 99, 132)",
                //   "rgb(255, 159, 64)",
                //   "rgb(255, 205, 86)",
                //   "rgb(75, 192, 192)",
                  "rgb(54, 162, 235)",
                //   "rgb(153, 102, 255)",
                //   "rgb(201, 203, 207)",
                ],
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
    </>
  );
};

export default ColumnChart;
