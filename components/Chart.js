import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Biology Paper 1", 700],
  ["Business Theorists", 89],
  ["Macro - Banking ", 200],
];

export const options = {
  title: "Flash cards revised - Last 7 Days",
};

const PieChart = () => {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}


export default PieChart;