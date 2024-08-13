import Costs from "./components/costs/Costs";
import NewCost from "./components/NewCost/NewCost";
const App = () => {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Холодильник",
      amount: 3000,
    },
    {
      date: new Date(2021, 10, 25),
      description: "MacBook Pro",
      amount: 1254.72,
    },
    {
      date: new Date(2021, 3, 1),
      description: "Телевизор",
      amount: 499.99,
    },
  ];
  return (
    <div>
      <NewCost />
      <Costs costs={costs} />;
    </div>
  );
};

export default App;
