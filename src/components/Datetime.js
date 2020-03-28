import React, { useState, useEffect } from 'react';
import moment from 'moment';

function DateTime(props) {

  const [date, setDate] = useState('');

  useEffect(() => {

    const newDate = new Date(props.dt * 1000);

    setDate(moment(newDate).format('MMMM Do YYYY, h:mm:a'));
  }, [props.dt]);
  
  return date;
}

export default DateTime;