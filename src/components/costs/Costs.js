import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";

const Costs = (props) => {
  const [year, setYear] = useState("2021");
  const yearChange = (year) => {
    setYear(year);
  };
  return (
    <div>
      <Card className="costs">
        <CostsFilter year={year} onChangeYear={yearChange}></CostsFilter>
        <CostItem
          date={props.costs[0].date}
          description={props.costs[0].description}
          amount={props.costs[0].amount}
        />
        <CostItem
          date={props.costs[1].date}
          description={props.costs[1].description}
          amount={props.costs[1].amount}
        />
        <CostItem
          date={props.costs[2].date}
          description={props.costs[2].description}
          amount={props.costs[2].amount}
        />
      </Card>
    </div>
  );
};

export default Costs;
