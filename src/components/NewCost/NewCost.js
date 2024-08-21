import "./NewCost.css";
import CostForm from "./CostForm";
import React, { useState } from "react";

const NewCost = (props) => {
  const [isCostFormVisible, setIsCostFormVisible] = useState(false);
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
    setIsCostFormVisible(false);
  };

  const inputCostDataHandler = () => {
    setIsCostFormVisible(true);
  };

  const cancelCostDataHandler = () => {
    setIsCostFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isCostFormVisible && (
        <button onClick={inputCostDataHandler}>Добавить Новый Расход</button>
      )}
      {isCostFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelCostDataHandler}
        />
      )}
    </div>
  );
};

export default NewCost;
