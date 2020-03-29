import React from 'react';
import ConvertTemp from '../ConvertTemp';
import ShowDateTime from '../ShowDateTime';
import * as Constants from '../../constants';

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
              <th>{ Constants.LABEL_TEMP_MIN }</th>
              <th>{ Constants.LABEL_TEMP_MAX }</th>
              <th>{ Constants.LABEL_TEMP }</th>
              <th>{ Constants.LABEL_PRESSURE }</th>
              <th>{ Constants.LABEL_SEA_LEVEL }</th>
              <th>{ Constants.LABEL_GRND_LEVEL }</th>
              <th>{ Constants.LABEL_HUMIDITY }</th>
            </tr>
            <tr>
              <td><ConvertTemp kelvin={ props.details?.main.temp_min } showCelsius={props.showCelsius} /></td>
              <td><ConvertTemp kelvin={ props.details?.main.temp_max } showCelsius={props.showCelsius} /></td>
              <td><ConvertTemp kelvin={ props.details?.main.temp } showCelsius={props.showCelsius} /></td>
              <td>{ props.details?.main.pressure }<span class="small-text">{ Constants.LABEL_HPA }</span></td>
              <td>{ props.details?.main.sea_level }<span class="small-text">{ Constants.LABEL_HPA }</span></td>
              <td>{ props.details?.main.grnd_level }<span class="small-text">{ Constants.LABEL_HPA }</span></td>
              <td>{ props.details?.main.humidity }%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WeatherCard;