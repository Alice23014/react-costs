import DiagramBar from "./DiagramBar";
import "./Diagram.css";

const Diagram = (props) => {
  const costsAmountArray = props.dataSet.map((dataSet) => dataSet.value);
  const maxMonthCost = Math.max(...costsAmountArray);

  return (
    <div className="diagram">
      {props.dataSet.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCost}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};

export default Diagram;
