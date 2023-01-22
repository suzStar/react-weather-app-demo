import "./App.css";

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
              class="float-left"
            />
            <strong className="temperature">8</strong>
            <span className="units">
              <botton href="#">°F </botton> |
              <botton href="#" className="active">
                °C
              </botton>
            </span>
          </div>
        </div>
        <div class="col-6">
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
