import "./Diagram.css";
import DiagramBar from "./DiagramBar";

const Diagram = (props) => {
  return (
    <div className="diagram">
      {props.dataSet.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={props.maxValue}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};

export default Diagram;
