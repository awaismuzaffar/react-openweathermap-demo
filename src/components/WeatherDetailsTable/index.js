import React from 'react';
import ConvertTemp from '../ConvertTemp';

function WeatherDetailsTable(props) {
 
return (
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
          <td><ConvertTemp kelvin={ props.details?.temp_min } showCelsius={props.showCelsius} /></td>
          <td><ConvertTemp kelvin={ props.details?.temp_max } showCelsius={props.showCelsius} /></td>
          <td><ConvertTemp kelvin={ props.details?.temp } showCelsius={props.showCelsius} /></td>
          <td>{ props.details?.pressure }<span class="small-text">hPa</span></td>
          <td>{ props.details?.sea_level }<span class="small-text">hPa</span></td>
          <td>{ props.details?.grnd_level }<span class="small-text">hPa</span></td>
          <td>{ props.details?.humidity }%</td>
        </tr>
      </tbody>
    </table>
  );
}

export default WeatherDetailsTable;