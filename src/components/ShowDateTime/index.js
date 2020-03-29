import { useState, useEffect } from 'react';
import moment from 'moment';

function ShowDateTime(props) {

  const [date, setDate] = useState('');

  useEffect(() => {

    const newDate = new Date(props.dt * 1000);

    setDate(moment(newDate).format('MMMM Do YYYY, h:mma'));
  }, [props.dt]);
  
  return date;
}

export default ShowDateTime;