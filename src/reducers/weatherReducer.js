import {
  GET_WEATHER,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE
} from '../actions/weatherActionTypes';

const initialState = {
  isFailed: false,
  isFetching: false,
  data: null
};

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        isFetching: true,
      };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        isFailed: false,
        isFetching: false,
        data: action.payload
      };
    case GET_WEATHER_FAILURE:
      return {
        ...state,
        isFailed: true,
        isFetching: false,
        data: action.payload
      };
    default:
      return state;
  }
}

export default weatherReducer;