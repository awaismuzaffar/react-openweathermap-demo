import React from 'react';
import ConvertTemp from '../../containers/ConvertTemp';
import ShowDateTime from '../ShowDateTime';
import * as Constants from '../../constants';
import './style.css';

function WeatherCard(props) {
  return (
    <div className="WeatherCard">
      <div className="WeatherCard-header">
        <strong><ShowDateTime dt={props.details?.dt} /></strong>
      </div>
      <div className="WeatherCard-body">
        <table className="WeatherCard-table">
          <thead>
            <tr>
              <th>{ Constants.LABEL_TEMP_MIN }</th>
              <th>{ Constants.LABEL_TEMP_MAX }</th>
              <th>{ Constants.LABEL_TEMP }</th>
              <th>{ Constants.LABEL_PRESSURE }</th>
              <th>{ Constants.LABEL_SEA_LEVEL }</th>
              <th>{ Constants.LABEL_GRND_LEVEL }</th>
              <th>{ Constants.LABEL_HUMIDITY }</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><ConvertTemp kelvin={ props.details?.main.temp_min } showCelsius={props.showCelsius} /></td>
              <td><ConvertTemp kelvin={ props.details?.main.temp_max } showCelsius={props.showCelsius} /></td>
              <td><ConvertTemp kelvin={ props.details?.main.temp } showCelsius={props.showCelsius} /></td>
              <td>{ props.details?.main.pressure }<span className="small-text">{ Constants.LABEL_HPA }</span></td>
              <td>{ props.details?.main.sea_level }<span className="small-text">{ Constants.LABEL_HPA }</span></td>
              <td>{ props.details?.main.grnd_level }<span className="small-text">{ Constants.LABEL_HPA }</span></td>
              <td>{ props.details?.main.humidity }{ Constants.LABEL_PERCENTAGE }</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WeatherCard;