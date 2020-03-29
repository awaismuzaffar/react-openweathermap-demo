const initialState = {
  isLoading: false,
  data: null
};

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_WEATHER':
      return {
        ...state,
        isLoading: true
      };
    case 'GET_WEATHER_SUCCESS':
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    default:
      return state;
  }
}

export default weatherReducer;