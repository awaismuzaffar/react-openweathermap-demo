import React, { useState, useEffect } from 'react';

function DateTime(props) {

  const [date, setDate] = useState({
    date: null,
    month: null,
    year: null,
    hours: null,
    minutes: null,
    seconds: null
  });

  useEffect(() => {
    
    const newDate = new Date(props.dt * 1000);
    
    setDate({
      date: newDate.getDate(),
      month: newDate.getMonth() + 1,
      year: newDate.getFullYear(),
      hours: newDate.getHours(),
      minutes: newDate.getMinutes(),
      seconds: newDate.getSeconds()
    });
  }, [props.dt]);

  return (
  <span>{date.date} | {date.month } | {date.year} | {date.hours}:{date.minutes}</span>
  );
}

export default DateTime;