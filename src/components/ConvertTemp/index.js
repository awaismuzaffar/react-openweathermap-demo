import React, { useState, useEffect } from 'react';
import { LABEL_CELSIUS, LABEL_FARENHEIGHT } from '../../constants';

function ConvertTemp(props) {

  const [temp, setTemp] = useState({ c: null, f: null });

  function toCelsius(k) {

    const converted = k - 273.15;

    return (Math.round(converted * 10) / 10);
  }

  function toFarenheight(k) {

    const converted = ((k - 273.15) * 1.8) + 32;

    return (Math.round(converted * 10) / 10);
  }

  useEffect(() => {
    setTemp({
      c: toCelsius(props.kelvin),
      f: toFarenheight(props.kelvin)
    })
  }, [props.kelvin, props.showCelsius]);
  
  return props.showCelsius ? <span>{ temp.c }{ LABEL_CELSIUS }</span> : <span>{ temp.f }{ LABEL_FARENHEIGHT }</span>;
}

export default ConvertTemp;