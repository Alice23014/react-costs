import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import CostsDiagram from "./CostsDiagram";

const Costs = (props) => {
  const [year, setYear] = useState("2024");
  const yearChange = (year) => {
    setYear(year);
  };
  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === year;
  });
  return (
    <div>
      <Card className="costs">
        <CostsFilter year={year} onChangeYear={yearChange}></CostsFilter>
        <CostsDiagram costs={filteredCosts}></CostsDiagram>
        {filteredCosts.map((cost) => (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Costs;
