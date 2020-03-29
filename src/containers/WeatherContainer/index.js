import React, {useState, useEffect} from 'react';
import WeatherCard from '../../components/WeatherCard';
import { 
  API_URL, 
  LABEL_MINUS_3_HRS, 
  LABEL_PLUS_3_HRS, 
  LABEL_TOGGLE_TO, 
  LABEL_CELSIUS, 
  LABEL_FARENHEIGHT 
} from '../../constants';
import './style.css';

import {useDispatch, useSelector} from 'react-redux';

function WeatherContainer() {

  const dispatch = useDispatch();
  const settings = useSelector(state => state.settings);
  const weather = useSelector(state => state.weather);

  const [currentWeather, setCurrentWeather] = useState(0);

  function getWeather() {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        //setData(data);
        dispatch({type: 'GET_WEATHER_SUCCESS', payload: data});
      });
    dispatch({type: 'GET_WEATHER'});
  }

  function goBack() {
    if (currentWeather === 0) {
      return;
    }
    setCurrentWeather(currentWeather - 1);
  }

  function goForward() {
    if (currentWeather === (weather.data.list.length - 1)) {
      return;
    }
    setCurrentWeather(currentWeather + 1);
  }

  function toggleCelsius() {
    dispatch({type: 'TOGGLE_CELSIUS'});
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="container">
      <h2>{weather.data?.city?.name}</h2>
      <button onClick={() => toggleCelsius()}>
        { LABEL_TOGGLE_TO } { settings.isCelsius ? LABEL_FARENHEIGHT : LABEL_CELSIUS }
      </button>
      <WeatherCard 
        details={weather.data?.list[currentWeather]}
      />
      <button 
        className="navigate-weather" 
        onClick={ goBack }>
          { LABEL_MINUS_3_HRS }.
        </button>
      <button 
        className="navigate-weather" 
        onClick={ goForward }>
          { LABEL_PLUS_3_HRS }
      </button>
    </div>
  );
}

export default WeatherContainer;