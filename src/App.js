import React from 'react';
import './App.css';
import WeatherContainer from './containers/WeatherContainer';
import { APP_HEADING } from './constants';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{ APP_HEADING }</h1>
      </header>
      <WeatherContainer />
    </div>
  );
}

export default App;