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
      <footer>
        <a href="https://github.com/suzStar/react-weather-app-demo">
          Open-source code
        </a>
        , by Suanne Sharman
      </footer>
    </div>
  );
}

export default App;
