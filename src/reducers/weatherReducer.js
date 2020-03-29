const initialState = {
  isFetching: false,
  data: null
};

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_WEATHER':
      return {
        ...state,
        isFetching: true
      };
    case 'GET_WEATHER_SUCCESS':
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    case 'GET_WEATHER_FAILURE':
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    default:
      return state;
  }
}

export default weatherReducer;