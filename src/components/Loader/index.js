import React from 'react';
import {LABEL_FETCHING_MSG} from '../../constants';

function Loader() {
  return <div data-testid="loader"><p>{LABEL_FETCHING_MSG}</p></div>;
}

export default Loader;