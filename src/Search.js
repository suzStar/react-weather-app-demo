import "./Forecast.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="input-group">
          <input
            type="search"
            className="form-control"
            placeholder="Search here"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span
            className="btn btn-secondary"
            id="city-input"
            type="search"
            value="Search"
          >
            <i>SEARCH</i>
          </span>
        </div>
      </form>
    </div>
  );
}
