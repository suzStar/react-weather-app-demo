import "./WeeklyForecast.css";
import DailyWeather from "./DailyWeather";

export default function WeekForecast(props) {
  return (
    <div className="WeekForecast row">
      <DailyWeather date="Mon" />
      <DailyWeather date="Tue" />
      <DailyWeather date="Wed" />
      <DailyWeather date="Thurs" />
      <DailyWeather date="Fri" />
    </div>
  );
}
