import "./App.css";
import Search from "./Search";
import CurrentForecast from "./CurrentForecast";
import WeeklyForecast from "./WeeklyForecast";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Search />
      <CurrentForecast />
      <WeeklyForecast />
      <footer>Open-source code, by Suanne Sharman</footer>
    </div>
  );
}

export default App;
