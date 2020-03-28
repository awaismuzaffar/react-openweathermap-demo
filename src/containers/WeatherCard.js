import React, { useState, useEffect } from 'react';
import './WeatherCard.css';

import DateTime from '../components/Datetime';
import ConvertTemp from '../components/ConvertTemp';

function WeatherCard() {

  const [data, setData] = useState(null); // put this in redux store
  const [currentWeather, setCurrentWeather] = useState(0);
  const [showCelsius, setShowCelsius] = useState(true); // put this in redux store

  useEffect(() => {

    fetch("http://api.openweathermap.org/data/2.5/forecast?q=london&appid=2ef90d11851b97b88140a0c75dfed4dc")
      .then(response => response.json())
      .then(data => setData(data));

  }, []);

  function goBack() {

    if (currentWeather === 0) {
      return;
    }
    setCurrentWeather(currentWeather - 1);
  }

  function goForward() {

    if (currentWeather === (data.list.length - 1)) {
      return;
    }
    setCurrentWeather(currentWeather + 1);
  }

  return (
    <div className="container">
      <button onClick={() => setShowCelsius(!showCelsius)}>Toggle to { showCelsius ? <span>&#8457;</span> : <span>&#8451;</span> }</button>
      <div className="weather-card">
        <div className="weather-card-header">
          <h2>{ data?.city?.name }</h2>
          <strong>{ data?.list ? <DateTime dt={data.list[currentWeather].dt} /> : null }</strong>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Min temp</th>
              <th>Max temp</th>
              <th>Temp</th>
              <th>pressure</th>
              <th>Sea level</th>
              <th>Grand level</th>
              <th>Humidity</th>
            </tr>
            <tr>
              <td><ConvertTemp kelvin={ data?.list[currentWeather].main.temp_min } showCelsius={showCelsius} /></td>
              <td><ConvertTemp kelvin={ data?.list[currentWeather].main.temp_max } showCelsius={showCelsius} /></td>
              <td><ConvertTemp kelvin={ data?.list[currentWeather].main.temp } showCelsius={showCelsius} /></td>
              <td>{ data?.list[currentWeather].main.pressure }<span class="small-text">hPa</span></td>
              <td>{ data?.list[currentWeather].main.sea_level }<span class="small-text">hPa</span></td>
              <td>{ data?.list[currentWeather].main.grnd_level }<span class="small-text">hPa</span></td>
              <td>{ data?.list[currentWeather].main.humidity }%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="navigate-weather" onClick={goBack}>-3 Hours.</button>
      <button className="navigate-weather" onClick={goForward}>+3 Hours.</button>
    </div>
  );
}

export default WeatherCard;