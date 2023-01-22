import "./DailyWeather.css";

export default function DailyWeather(props) {
  return (
    <div className="DailyWeather">
      <div className="col weekDays">{props.date}</div>
      <div className="col">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt="Sunny"
          width="60"
        />
      </div>
      <div className="col">
        <span className="temperature-max">18°C</span>
        <span className="temperature-min"> 8°C</span>
      </div>
    </div>
  );
}
