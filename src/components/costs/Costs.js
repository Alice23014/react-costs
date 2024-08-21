import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import CostList from "./CostList";
import React, { useState } from "react";

const Costs = (props) => {
  const [year, setYear] = useState("2021");
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
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
