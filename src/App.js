import React from 'react';
import './App.css';
import WeatherCard from './containers/WeatherCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Open Weather Map API Demo</h1>
      </header>
      <WeatherCard />
    </div>
  );
}

export default App;
