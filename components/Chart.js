import { Chart } from "react-google-charts";
import { useState, useEffect } from "react";

const options = {
  title: "Flash cards revised - Last 7 Days",
};

const PieChart = () => {
  const [cards, setCards] = useState([]);

  const getCards = async () => {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collection`, {
      method: "GET",
    });
    res = await res.json();
    return res;
  };

  useEffect(() => {
    async function fetchData() {
      const response = await getCards();
      setCards(response.data);
    }

    fetchData();
  }, []);

  // Create chart data from cards
  const data = [
    ["Task", "Hours per Day"],
    ...cards.map((card) => [card.name, card.amountRevised]),
  ];

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};

export default PieChart;
