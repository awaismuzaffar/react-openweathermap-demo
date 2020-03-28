import React, { useState, useEffect } from 'react';
import './WeatherCard.css';

import DateTime from '../components/Datetime';

function WeatherCard() {

  const [data, setData] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {

    //fetch("data.json")
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
    <div>
      <h2>{ data?.city?.name }</h2>
      <div className="weather-card">
        <div className="weather-card-header">
          {/* { data?.list[currentWeather].weather.map(data => data.icon) } */}
          <br/>
          <strong>{ data?.list ? <DateTime dt={data.list[currentWeather].dt} /> : null }</strong>
        </div>
        
        
        <table>
          <tbody>
            <tr>
              <th>Temp_min</th>
              <th>Temp_max</th>
              <th>Temp</th>
              <th>pressure</th>
              <th>Sea level</th>
              <th>Grand level</th>
              <th>Humidity</th>
              <th>Temp KF</th>
            </tr>
            <tr>
              <td>{ data?.list[currentWeather].main.temp_min }</td>
              <td>{ data?.list[currentWeather].main.temp_max }</td>
              <td>{ data?.list[currentWeather].main.temp }</td>
              <td>{ data?.list[currentWeather].main.pressure }</td>
              <td>{ data?.list[currentWeather].main.sea_level }</td>
              <td>{ data?.list[currentWeather].main.grnd_level }</td>
              <td>{ data?.list[currentWeather].main.humidity }</td>
              <td>{ data?.list[currentWeather].main.temp_kf }</td>
            </tr>
          </tbody>
        </table>

      </div>
      <button className="navigate-weather" onClick={goBack}>Go back 3 hours.</button>
      <button className="navigate-weather" onClick={goForward}>Go forward 3 hours.</button>
      
      {/* <ul>
        {data?.list.map((item, index) => (
          <li key={item.dt}>
            <button onClick={() => setCurrentWeather(index)}><DateTime dt={item.dt} /></button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default WeatherCard;
