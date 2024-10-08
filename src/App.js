import Costs from "./components/costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2023, 2, 12),
    description: "Холодильник",
    amount: 3000,
  },
  {
    id: "c2",
    date: new Date(2024, 10, 25),
    description: "MacBook Pro",
    amount: 1254.72,
  },
  {
    id: "c3",
    date: new Date(2024, 3, 1),
    description: "Телевизор",
    amount: 499.99,
  },
];
const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);
  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };
  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />;
    </div>
  );
};

export default App;
