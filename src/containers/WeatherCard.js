import React, { useState, useEffect } from 'react';
import DateTime from '../components/Datetime';
import WeatherDetailsTable from '../components/WeatherDetailsTable';
import './WeatherCard.css';

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
        <WeatherDetailsTable details={data?.list[currentWeather].main} showCelsius={showCelsius} />
      </div>
      <button className="navigate-weather" onClick={goBack}>-3 Hours.</button>
      <button className="navigate-weather" onClick={goForward}>+3 Hours.</button>
    </div>
  );
}

export default WeatherCard;