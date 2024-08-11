import Costs from "./components/Costs";
function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Холодильник",
      amount: 3000,
    },
    {
      date: new Date(2021, 11, 25),
      description: "MacBook",
      amount: 1254.72,
    },
    {
      date: new Date(2021, 3, 1),
      description: "Телевизор",
      amount: 499.99,
    }
  ];  
  return (
    <Costs costs = {costs}/>
  );
}

export default App;
