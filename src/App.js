import "./App.css";
import CountriesCapitalsGame from "./components/CountriesCapitalsGame/CountriesCapitalsGame";

function App() {
  const data = { key1: "val1", key2: "val2", key3: "val3", key4: "val4" };
  return (
    <div className="App">
      <CountriesCapitalsGame data={data} />
    </div>
  );
}

export default App;
