import "./Forecast.css";

export default function DailyWeather(props) {
  return (
    <div className="col-sm DailyWeather">
      <div className="weekDays">{props.date}</div>
      <div>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt="Sunny"
          width="60"
        />
      </div>
      <div>
        <span className="temperature-max">18°C</span>
        <span className="temperature-min"> 8°C</span>
      </div>
    </div>
  );
}
