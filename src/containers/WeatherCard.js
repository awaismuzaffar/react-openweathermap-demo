import React, { useState, useEffect } from 'react';
import './WeatherCard.css';

import DateTime from '../components/Datetime';

function WeatherCard() {

  const [data, setData] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {

    fetch("data.json")
    //fetch("http://api.openweathermap.org/data/2.5/forecast?q=london&appid=2ef90d11851b97b88140a0c75dfed4dc")
      .then(response => response.json())
      .then(data => setData(data));

  }, []);

  return (
    <div>
      <h2>{ data?.city?.name }</h2>
      <div className="weather-card">
          <p>This card will display the weather.</p>
          { data?.list ? <DateTime dt={data.list[currentWeather].dt} /> : null }
          
      </div>
      <h2>View weather for previous dates:</h2>
      <ul>
        {data?.list.map((item, index) => (
          <li key={item.dt}>
            <button onClick={() => setCurrentWeather(index)}><DateTime dt={item.dt} /></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherCard;
