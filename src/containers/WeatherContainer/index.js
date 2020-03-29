import React, { useState, useEffect } from 'react';
import WeatherCard from '../../components/WeatherCard';
import './style.css';
import { API_URL, LABEL_MINUS_3_HRS, LABEL_PLUS_3_HRS, LABEL_TOGGLE_TO, LABEL_CELSIUS, LABEL_FARENHEIGHT } from '../../constants';

function WeatherContainer() {

  const [data, setData] = useState(null); // put this in redux store
  const [currentWeather, setCurrentWeather] = useState(0);
  const [showCelsius, setShowCelsius] = useState(true); // put this in redux store

  useEffect(() => {

    fetch(API_URL)
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
      <h2>{ data?.city?.name }</h2>
      <button onClick={() => setShowCelsius(!showCelsius)}>{ LABEL_TOGGLE_TO } { showCelsius ? LABEL_CELSIUS : LABEL_FARENHEIGHT }</button>
      <WeatherCard details={data?.list[currentWeather]} showCelsius={showCelsius} />
      <button className="navigate-weather" onClick={goBack}>{ LABEL_MINUS_3_HRS }.</button>
      <button className="navigate-weather" onClick={goForward}>{ LABEL_PLUS_3_HRS }</button>
    </div>
  );
}

export default WeatherContainer;