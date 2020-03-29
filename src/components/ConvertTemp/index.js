import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {LABEL_CELSIUS, LABEL_FARENHEIGHT} from '../../constants';

function ConvertTemp(props) {

  const [temp, setTemp] = useState({c: null, f: null});

  const isCelsius = useSelector(state => state.settings.isCelsius);

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
  }, [props.kelvin]);
  
  return isCelsius ? <span>{temp.c}{LABEL_CELSIUS}</span> : <span>{temp.f}{LABEL_FARENHEIGHT}</span>;
}

export default ConvertTemp;