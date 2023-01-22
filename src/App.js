import "./App.css";
import Search from "./Search";
import CurrentForecast from "./CurrentForecast";
import WeeklyForecast from "./WeeklyForecast";

function App() {
  return (
    <div className="App">
      <Search />
      <CurrentForecast />
      <WeeklyForecast />
    </div>
  );
}

export default App;
