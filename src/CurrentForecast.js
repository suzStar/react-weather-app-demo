import "./CurrentForecast.css";

export default function CurrentForecast() {
  return (
    <div className="CurrentForecast">
      <div className="row">
        <div className="col-6">
          <div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
              id="icon"
              className="float-left"
            />
            <strong className="temperature">8</strong>
            <span className="units">
              <a href="/">°F </a> |
              <a href="/" className="active">
                °C
              </a>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <h1>London</h1>
            </li>
            <li>Humidity: 68%</li>
            <li>Wind: 7 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
