import React from 'react';
import ConvertTemp from '../ConvertTemp';
import ShowDateTime from '../ShowDateTime';

function WeatherCard(props) {
  return (
    <div className="weather-card">
      <div class="weather-card-header">
        <strong><ShowDateTime dt={props.details?.dt} /></strong>
      </div>
      <div class="weather-card-body">
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
              <td><ConvertTemp kelvin={ props.details?.main.temp_min } showCelsius={props.showCelsius} /></td>
              <td><ConvertTemp kelvin={ props.details?.main.temp_max } showCelsius={props.showCelsius} /></td>
              <td><ConvertTemp kelvin={ props.details?.main.temp } showCelsius={props.showCelsius} /></td>
              <td>{ props.details?.main.pressure }<span class="small-text">hPa</span></td>
              <td>{ props.details?.main.sea_level }<span class="small-text">hPa</span></td>
              <td>{ props.details?.main.grnd_level }<span class="small-text">hPa</span></td>
              <td>{ props.details?.main.humidity }%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WeatherCard;