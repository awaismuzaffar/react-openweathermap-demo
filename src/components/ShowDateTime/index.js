import { useState, useEffect } from 'react';
import moment from 'moment';
import { DATE_FORMAT } from '../../constants';

function ShowDateTime(props) {

  const [date, setDate] = useState('');

  useEffect(() => {

    const newDate = new Date(props.dt * 1000);

    setDate(moment(newDate).format(DATE_FORMAT));
  }, [props.dt]);
  
  return date;
}

export default ShowDateTime;