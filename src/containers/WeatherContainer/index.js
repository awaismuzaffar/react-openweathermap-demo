import React, {useState, useEffect} from 'react';
import WeatherCard from '../../components/WeatherCard';
import Loader from '../../components/Loader';
import { 
  API_URL, 
  LABEL_MINUS_3_HRS, 
  LABEL_PLUS_3_HRS, 
  LABEL_TOGGLE_TO, 
  LABEL_CELSIUS, 
  LABEL_FARENHEIGHT,
  LABEL_ERROR_MSG
} from '../../constants';
import './style.css';

import {useDispatch, useSelector} from 'react-redux';

function WeatherContainer() {

  const dispatch = useDispatch();
  const settings = useSelector(state => state.settings);
  const weather = useSelector(state => state.weather);

  const [currentWeather, setCurrentWeather] = useState(0);

  const getWeather = () => {
    fetch(API_URL)
      .then(response => {
        if(response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        dispatch({type: 'GET_WEATHER_SUCCESS', payload: data});
      })
      .catch(error => {
        dispatch({type: 'GET_WEATHER_FAILURE'});
      });
    dispatch({type: 'GET_WEATHER'});
  }

  const goBack = () => {
    if (currentWeather === 0) {
      return;
    }
    setCurrentWeather(currentWeather - 1);
  }

  const goForward = () => {
    if (currentWeather === (weather.data.list.length - 1)) {
      return;
    }
    setCurrentWeather(currentWeather + 1);
  }

  const toggleCelsius = () => {
    dispatch({type: 'TOGGLE_CELSIUS'});
  }

  useEffect(getWeather, []);

  return (
    <div className="container">
      {weather.isFetching ? (
        <Loader />
      ) : (
        <div>
          {weather.isFailed ? <p>{LABEL_ERROR_MSG}</p> : null}
          <h2>{weather.data?.city.name}</h2>
          <button onClick={() => toggleCelsius()}>
            {LABEL_TOGGLE_TO} {settings.isCelsius ? LABEL_FARENHEIGHT : LABEL_CELSIUS}
          </button>
          <WeatherCard 
            details={weather.data?.list[currentWeather]}
          />
          <button 
            className="navigate-weather" 
            onClick={goBack}>
              {LABEL_MINUS_3_HRS}.
            </button>
          <button 
            className="navigate-weather" 
            onClick={goForward}>
              {LABEL_PLUS_3_HRS}
          </button>
        </div>
      )}
    </div>
  );
}

export default WeatherContainer;